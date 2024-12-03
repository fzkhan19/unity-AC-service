"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Wrench } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	description: string;
	images: string[];
	location: string;
	serviceType: string;
}

export function ProjectCard({
	title,
	description,
	images,
	location,
	serviceType,
}: ProjectCardProps) {
	return (
		<Card className="border-none bg-transparent px-14 shadow-none">
			<Carousel className="w-full">
				<CarouselContent>
					{images.map((image, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<CarouselItem key={index}>
							<div className="relative aspect-[16/9]">
								<Image
									src={image}
									alt={`${title} - Image ${index + 1}`}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<CardContent className="p-0 pt-6">
				<h3 className="font-semibold text-xl">{title}</h3>
				<p className="mt-2 text-muted-foreground text-sm">{description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					<span className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 font-medium text-primary text-xs">
						<Wrench className="size-[12px]" />
						{serviceType}
					</span>
					<span className="flex items-center gap-1 rounded-full px-3 py-1 font-medium text-xs">
						<MapPin className="size-[12px]" />
						{location}
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
