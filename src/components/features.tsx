import {
	Clock,
	Fan,
	HeartHandshake,
	Shield,
	ThumbsUp,
	Wrench,
} from "lucide-react";

const features = [
	{
		icon: Fan,
		title: "AC Installation",
		description: "Professional installation of all AC types with warranty.",
	},
	{
		icon: Wrench,
		title: "Maintenance",
		description: "Regular maintenance to ensure optimal performance.",
	},
	{
		icon: Clock,
		title: "24/7 Service",
		description: "Emergency repairs and support available round the clock.",
	},
	{
		icon: Shield,
		title: "Certified Experts",
		description: "Fully certified and experienced technicians.",
	},
	{
		icon: ThumbsUp,
		title: "Quality Parts",
		description: "Genuine spare parts and components.",
	},
	{
		icon: HeartHandshake,
		title: "Customer Support",
		description: "Dedicated support team for all your queries.",
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
							<feature.icon className="h-12 w-12 text-primary" />
							<h3 className="mt-4 font-semibold text-xl">{feature.title}</h3>
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
