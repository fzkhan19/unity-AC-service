import {
	Clock,
	Fan,
	HeartHandshake,
	Shield,
	ThumbsUp,
	Wrench,
} from "lucide-react";
import Image from "next/image";

const features = [
	{
		icon: Fan,
		title: "AC Installation",
		description: "Professional installation of all AC types with warranty.",
		image: "/img/service-1.jpg",
	},
	{
		icon: Wrench,
		title: "Cooling Services",
		description: "Regular maintenance to ensure optimal performance.",
		image: "/img/service-2.jpg",
	},
	{
		icon: Clock,
		title: "Heating Services",
		description: "Emergency repairs and support available round the clock.",
		image: "/img/service-3.jpg",
	},
	{
		icon: Shield,
		title: "Maintenance & Repair",
		description: "Fully certified and experienced technicians.",
		image: "/img/service-4.jpg",
	},
	{
		icon: ThumbsUp,
		title: "Indoor Air Quality",
		description: "Genuine spare parts and components.",
		image: "/img/service-5.jpg",
	},
	{
		icon: HeartHandshake,
		title: "Annual Inspections",
		description: "Dedicated support team for all your queries.",
		image: "/img/service-6.jpg",
	},
];

export function Features() {
	return (
		<section className="bg-muted py-20">
			<div className="container">
				<div className="text-center">
					<h2 className="font-bold text-3xl tracking-tight">Our Services</h2>
					<p className="mt-4 text-muted-foreground">
						Comprehensive AC solutions for all your needs
					</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-lg border bg-card p-6 shadow-sm"
						>
							<Image
								src={feature.image}
								alt={feature.title}
								className="mt-4 rounded-lg"
								width={400}
								height={300}
							/>
							<h3 className="mt-4 flex items-center gap-2 font-semibold text-xl">
								<feature.icon className="size-5 text-primary" />
								{feature.title}
							</h3>
							<p className="mt-2 text-muted-foreground">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
