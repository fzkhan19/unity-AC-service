import {
	Award,
	Clock4,
	HeartHandshake,
	Lightbulb,
	Shield,
	ThumbsUp,
} from "lucide-react";

const reasons = [
	{
		icon: Award,
		title: "25+ Years Experience",
		description: "Trusted expertise in AC solutions since 1995",
	},
	{
		icon: Shield,
		title: "Licensed & Insured",
		description: "Fully certified technicians and insured services",
	},
	{
		icon: Clock4,
		title: "24/7 Emergency Service",
		description: "Round-the-clock support when you need it most",
	},
	{
		icon: ThumbsUp,
		title: "Satisfaction Guaranteed",
		description: "100% satisfaction with our service quality",
	},
	{
		icon: Lightbulb,
		title: "Energy Efficient Solutions",
		description: "Eco-friendly and cost-effective AC systems",
	},
	{
		icon: HeartHandshake,
		title: "Competitive Pricing",
		description: "Best value for professional AC services",
	},
];

export function WhyChooseUs() {
	return (
		<section className="bg-muted/50 py-20">
			<div className="container">
				<div className="text-center">
					<h2 className="font-bold text-3xl tracking-tight">Why Choose Us</h2>
					<p className="mt-4 text-muted-foreground">
						Discover what makes us the preferred choice for AC solutions
					</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{reasons.map((reason) => (
						<div
							key={reason.title}
							className="flex items-start space-x-4 rounded-lg border bg-card p-6"
						>
							<reason.icon className="h-6 w-6 shrink-0 text-primary" />
							<div>
								<h3 className="font-semibold">{reason.title}</h3>
								<p className="mt-2 text-muted-foreground text-sm">
									{reason.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
