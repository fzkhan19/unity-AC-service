import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import Image from "next/image";

const mainServices = [
	{
		icon: Calendar,
		title: "Maintenance Contracts",
		description:
			"Regular maintenance plans to keep your AC running efficiently all year round.",
		image: "/img/service-1.jpg",
	},
	{
		icon: Store,
		title: "AC Dealership",
		description:
			"Authorized dealer for leading AC brands with genuine products and warranties.",
		image: "/img/service-2.jpg",
	},
	{
		icon: Settings,
		title: "Installation Services",
		description:
			"Professional installation of all types of AC units by certified technicians.",
		image: "/img/service-3.jpg",
	},
	{
		icon: Tool,
		title: "AC Servicing",
		description:
			"Comprehensive servicing including cleaning, repair, and performance optimization.",
		image: "/img/service-4.jpg",
	},
];

const acTypes = [
	{
		icon: Building,
		title: "Central AC",
		description: "Ideal for large buildings and commercial spaces.",
		image: "/img/ac/central.jpg",
	},
	{
		icon: Package,
		title: "Ductable AC",
		description: "Perfect for multi-room cooling requirements.",
		image: "/img/ac/ductable.jpg",
	},
	{
		icon: Home,
		title: "Package AC",
		description: "Suitable for medium to large commercial spaces.",
		image: "/img/ac/package.jpg",
	},
	{
		icon: Split,
		title: "Split AC",
		description: "Energy-efficient solution for homes and offices.",
		image: "/img/ac/split.jpg",
	},
	{
		icon: Window,
		title: "Window AC",
		description: "Compact and efficient for single room cooling.",
		image: "/img/ac/window.jpg",
	},
];

export default function ServicesPage() {
	return (
		<div className="flex flex-col gap-20 py-20">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-20 text-white">
				<div className="container text-center">
					<h1 className="font-bold text-5xl">Your Comfort, Our Priority</h1>
					<p className="mt-4 text-lg">
						Comprehensive AC solutions tailored to your needs
					</p>
					<p className="mt-6 font-semibold text-2xl">
						Emergency Services Available 24/7!
					</p>
					<p className="mt-2 text-lg">Call Now: 1-800-AC-UNITY</p>
				</div>
			</section>

			{/* Main Services */}
			<section className="container">
				<h2 className="text-center font-bold text-3xl">Main Services</h2>
				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{mainServices.map((service) => (
						<Card key={service.title} className="shadow-none">
							<div className="relative h-48 w-full">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="rounded-t-lg object-cover"
								/>
							</div>
							<CardContent className="flex flex-col items-center gap-4 p-6 text-center">
								<service.icon className="h-10 w-10 text-primary" />
								<h3 className="font-semibold text-xl">{service.title}</h3>
								<p className="text-muted-foreground">{service.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* AC Types */}
			<section className="bg-muted py-20">
				<div className="container">
					<h2 className="text-center font-bold text-3xl">
						AC Types We Service
					</h2>
					<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{acTypes.map((type) => (
							<Card key={type.title} className="shadow-none ">
								<div className="relative h-48 w-full">
									<Image
										src={type.image}
										alt={type.title}
										fill
										className="rounded-t-lg object-cover"
									/>
								</div>
								<CardContent className="p-6 text-center">
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

			{/* Emergency Services */}
			<section className="container">
				<Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
					<CardContent className="p-10 text-center">
						<Fan className="mx-auto h-16 w-16 text-white" />
						<h2 className="mt-6 font-bold text-3xl">
							Emergency AC Services Available
						</h2>
						<p className="mt-4">
							24/7 emergency AC repair services for urgent cooling problems
						</p>
						<p className="mt-6 font-semibold text-2xl">
							Call Now: 1-800-AC-UNITY
						</p>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
