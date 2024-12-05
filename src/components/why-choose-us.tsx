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
		title: "Over 6 Years of Expertise",
		description: "Delivering reliable AC solutions with a proven track record since 2017",
	},
	{
		icon: Shield,
		title: "Fully Licensed & Insured",
		description: "Our certified technicians provide safe and insured services",
	},
	{
		icon: Clock4,
		title: "24/7 Emergency Support",
		description: "Always available to assist you in urgent situations",
	},
	{
		icon: ThumbsUp,
		title: "Guaranteed Satisfaction",
		description: "We strive for 100% customer satisfaction with every service",
	},
	{
		icon: Lightbulb,
		title: "Eco-Friendly Solutions",
		description: "Offering energy-efficient and sustainable AC systems",
	},
	{
		icon: HeartHandshake,
		title: "Affordable Pricing",
		description: "Providing the best value for high-quality AC services",
	},
];

export function WhyChooseUs() {
	return (
		<section className="bg-muted/50 py-20">
			<div className="container">
				<div className="text-center">
					<h2 className="font-bold text-3xl tracking-tight">Why Choose Us</h2>
					<p className="mt-4 text-muted-foreground">
						Explore the reasons why we are the top choice for your AC needs
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
