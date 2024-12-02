import { CareerForm } from "@/components/career-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Briefcase,
	Coffee,
	GraduationCap,
	Heart,
	Sun,
	Trophy,
} from "lucide-react";

const openings = [
	{
		title: "Senior AC Technician",
		type: "Full-time",
		location: "Multiple Locations",
		experience: "5+ years",
	},
	{
		title: "AC Installation Specialist",
		type: "Full-time",
		location: "City Center",
		experience: "3+ years",
	},
	{
		title: "Service Coordinator",
		type: "Full-time",
		location: "Head Office",
		experience: "2+ years",
	},
];

const benefits = [
	{
		icon: Heart,
		title: "Health Insurance",
		description: "Comprehensive medical coverage for you and your family",
	},
	{
		icon: GraduationCap,
		title: "Training Programs",
		description: "Continuous learning and skill development opportunities",
	},
	{
		icon: Trophy,
		title: "Performance Bonuses",
		description: "Rewards for exceptional work and dedication",
	},
	{
		icon: Coffee,
		title: "Work-Life Balance",
		description: "Flexible schedules and paid time off",
	},
	{
		icon: Briefcase,
		title: "Career Growth",
		description: "Clear career progression paths",
	},
	{
		icon: Sun,
		title: "Positive Culture",
		description: "Inclusive and supportive work environment",
	},
];

export default function CareersPage() {
	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">Join Our Team</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						Build your career with the region's leading AC service provider
					</p>
				</div>
			</section>

			<section className="container">
				<h2 className="font-bold text-3xl">Current Openings</h2>
				<div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{openings.map((job) => (
						<Card key={job.title}>
							<CardHeader>
								<CardTitle>{job.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<dl className="grid gap-2 text-sm">
									<div className="flex justify-between">
										<dt className="text-muted-foreground">Type:</dt>
										<dd className="font-medium">{job.type}</dd>
									</div>
									<div className="flex justify-between">
										<dt className="text-muted-foreground">Location:</dt>
										<dd className="font-medium">{job.location}</dd>
									</div>
									<div className="flex justify-between">
										<dt className="text-muted-foreground">Experience:</dt>
										<dd className="font-medium">{job.experience}</dd>
									</div>
								</dl>
								<Button className="mt-4 w-full">Apply Now</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="bg-muted py-20">
				<div className="container">
					<h2 className="font-bold text-3xl">Benefits & Perks</h2>
					<div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit) => (
							<Card key={benefit.title}>
								<CardContent className="flex items-start gap-4 p-6">
									<benefit.icon className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">{benefit.title}</h3>
										<p className="mt-2 text-muted-foreground text-sm">
											{benefit.description}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="container">
				<div className="mx-auto max-w-2xl">
					<h2 className="font-bold text-3xl">Apply Now</h2>
					<p className="mt-4 text-muted-foreground">
						Submit your application and join our growing team of professionals
					</p>
					<div className="mt-8">
						<CareerForm />
					</div>
				</div>
			</section>
		</div>
	);
}
