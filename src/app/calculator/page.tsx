"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
	length: z.string().min(1, "Length is required"),
	width: z.string().min(1, "Width is required"),
	height: z.string().min(1, "Height is required"),
	roomType: z.string().min(1, "Room type is required"),
	occupants: z.string().min(1, "Number of occupants is required"),
});

export default function CalculatorPage() {
	const [result, setResult] = useState<number | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			length: "",
			width: "",
			height: "",
			roomType: "",
			occupants: "",
		},
	});

	function calculateTonnage(values: z.infer<typeof formSchema>) {
		const length = Number.parseFloat(values.length);
		const width = Number.parseFloat(values.width);
		const height = Number.parseFloat(values.height);
		const occupants = Number.parseInt(values.occupants);

		// Basic calculation (simplified for demonstration)
		const roomVolume = length * width * height;
		const baseCapacity = roomVolume * 20; // BTU per cubic foot

		// Adjustments based on room type
		let adjustedCapacity = baseCapacity;
		switch (values.roomType) {
			case "bedroom":
				adjustedCapacity *= 0.9;
				break;
			case "kitchen":
				adjustedCapacity *= 1.2;
				break;
			case "living":
				adjustedCapacity *= 1.1;
				break;
			case "office":
				adjustedCapacity *= 1.0;
				break;
		}

		// Adjust for occupants
		adjustedCapacity += occupants * 400; // Additional BTU per person

		// Convert BTU to Tons (12,000 BTU = 1 Ton)
		const tons = adjustedCapacity / 12000;
		return Number.parseFloat(tons.toFixed(1));
	}

	function onSubmit(values: z.infer<typeof formSchema>) {
		const tonnage = calculateTonnage(values);
		setResult(tonnage);
	}

	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">
						AC Tonnage Calculator
					</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						Calculate the required AC capacity for your space
					</p>
				</div>
			</section>

			<section className="container">
				<div className="mx-auto max-w-2xl">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Calculator className="h-6 w-6" />
								Room Details
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-6"
								>
									<div className="grid gap-6 md:grid-cols-3">
										<FormField
											control={form.control}
											name="length"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Length (ft)</FormLabel>
													<FormControl>
														<Input type="number" step="0.1" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="width"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Width (ft)</FormLabel>
													<FormControl>
														<Input type="number" step="0.1" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="height"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Height (ft)</FormLabel>
													<FormControl>
														<Input type="number" step="0.1" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<div className="grid gap-6 md:grid-cols-2">
										<FormField
											control={form.control}
											name="roomType"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Room Type</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select room type" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value="bedroom">Bedroom</SelectItem>
															<SelectItem value="living">
																Living Room
															</SelectItem>
															<SelectItem value="kitchen">Kitchen</SelectItem>
															<SelectItem value="office">Office</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="occupants"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Average Number of Occupants</FormLabel>
													<FormControl>
														<Input type="number" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<Button type="submit" className="w-full">
										Calculate
									</Button>
								</form>
							</Form>

							{result !== null && (
								<div className="mt-8 rounded-lg bg-primary/10 p-6 text-center">
									<h3 className="font-semibold text-lg">
										Recommended AC Capacity
									</h3>
									<p className="mt-2 font-bold text-3xl text-primary">
										{result} Tons
									</p>
									<p className="mt-2 text-muted-foreground text-sm">
										This is an approximate calculation. Contact our experts for
										a detailed assessment.
									</p>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
