import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Building,
	Calendar,
	Fan,
	Home,
	Package,
	Settings,
	Split,
	Store,
	Wrench as Tool,
	Grid2X2 as Window,
} from "lucide-react";

const mainServices = [
	{
		icon: Calendar,
		title: "Maintenance Contracts",
		description:
			"Regular maintenance plans to keep your AC running efficiently all year round.",
	},
	{
		icon: Store,
		title: "AC Dealership",
		description:
			"Authorized dealer for leading AC brands with genuine products and warranties.",
	},
	{
		icon: Settings,
		title: "Installation Services",
		description:
			"Professional installation of all types of AC units by certified technicians.",
	},
	{
		icon: Tool,
		title: "AC Servicing",
		description:
			"Comprehensive servicing including cleaning, repair, and performance optimization.",
	},
];

const acTypes = [
	{
		icon: Building,
		title: "Central AC",
		description: "Ideal for large buildings and commercial spaces.",
	},
	{
		icon: Package,
		title: "Ductable AC",
		description: "Perfect for multi-room cooling requirements.",
	},
	{
		icon: Home,
		title: "Package AC",
		description: "Suitable for medium to large commercial spaces.",
	},
	{
		icon: Split,
		title: "Split AC",
		description: "Energy-efficient solution for homes and offices.",
	},
	{
		icon: Window,
		title: "Window AC",
		description: "Compact and efficient for single room cooling.",
	},
];

export default function ServicesPage() {
	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">Our Services</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						Comprehensive AC solutions for all your cooling needs
					</p>
				</div>
			</section>

			<section className="container">
				<h2 className="font-bold text-3xl">Main Services</h2>
				<div className="mt-8 grid gap-8 md:grid-cols-2">
					{mainServices.map((service) => (
						<Card key={service.title}>
							<CardContent className="flex items-start gap-4 p-6">
								<service.icon className="h-8 w-8 text-primary" />
								<div>
									<h3 className="font-semibold">{service.title}</h3>
									<p className="mt-2 text-muted-foreground">
										{service.description}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="bg-muted py-20">
				<div className="container">
					<h2 className="font-bold text-3xl">AC Types We Service</h2>
					<div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{acTypes.map((type) => (
							<Card key={type.title} className="relative overflow-hidden">
								<CardHeader className="pb-0">
									<type.icon className="h-12 w-12 text-primary" />
								</CardHeader>
								<CardContent className="pt-6">
									<CardTitle className="text-xl">{type.title}</CardTitle>
									<p className="mt-2 text-muted-foreground">
										{type.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="container">
				<Card>
					<CardContent className="p-8 text-center">
						<Fan className="mx-auto h-16 w-16 text-primary" />
						<h2 className="mt-6 font-bold text-2xl">
							Emergency Services Available
						</h2>
						<p className="mt-2 text-muted-foreground">
							24/7 emergency AC repair services for urgent cooling problems
						</p>
						<p className="mt-4 font-semibold text-2xl text-primary">
							Call: 1-800-AC-UNITY
						</p>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
