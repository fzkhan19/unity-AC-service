import { Features } from "@/components/features";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ArrowRight, Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
	{
		icon: PhoneCall,
		title: "Phone",
		details: ["+91 9712142195", "+91 9712142197"],
	},
	{
		icon: Mail,
		title: "Email",
		details: ["info@unityac.com"],
	},
	{
		icon: MapPin,
		title: "Location",
		details: [
			"Shop No. A 16, Mexican Plaza, Road No. 3, 4",
			"opp. dress gallery, Udhna, Surat-394610, Gujarat, India",
		],
	},
	{
		icon: Clock,
		title: "Hours",
		details: ["Mon-Sat: 10:00 AM - 8:00 PM"],
	},
];

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative bg-background py-20 md:py-32">
				<div className="container">
					<div className="grid gap-8 md:grid-cols-2 md:gap-12">
						<div className="flex flex-col justify-center">
							<h1 className="font-bold text-4xl tracking-tight md:text-6xl">
								Professional AC Solutions for Your Comfort
							</h1>
							<p className="mt-4 text-lg text-muted-foreground md:text-xl">
								Expert AC installation, maintenance, and repair services for
								homes and businesses.
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Button size="lg" asChild>
									<Link href="/contact">Get Started</Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link href="/services">
										View Services
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative hidden md:block">
							<Image src={"/hero.webp"} alt="hero" width={1000} height={500} />
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<Features />

			{/* Featured Projects */}
			<Projects />

			{/* Why Choose Us */}
			<WhyChooseUs />

			{/* Contact Details */}
			<section className="bg-muted py-20">
				<div className="container flex flex-col items-center gap-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="font-bold text-3xl tracking-tight">Contact Us</h2>
						<p className="mt-4 text-muted-foreground">
							Get in touch with our team for all your AC needs
						</p>
					</div>
					<div className="mx-auto grid max-w-3xl gap-6 pl-12 md:grid-cols-2">
						{contactInfo.map((item) => (
							<div key={item.title} className="flex items-start gap-4 p-6">
								<item.icon className="h-6 w-6 text-primary" />
								<div>
									<h3 className="font-semibold">{item.title}</h3>
									{item.details.map((detail) => (
										<p key={detail} className="mt-1 text-muted-foreground">
											{detail}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
