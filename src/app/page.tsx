import { ContactForm } from "@/components/contact-form";
import { Features } from "@/components/features";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
							{/* Add hero image here */}
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

			{/* Contact Form */}
			<section className="bg-muted py-20">
				<div className="container">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="font-bold text-3xl tracking-tight">Get in Touch</h2>
						<p className="mt-4 text-muted-foreground">
							Contact us for a free consultation and quote.
						</p>
					</div>
					<div className="mx-auto mt-8 max-w-xl">
						<ContactForm />
					</div>
				</div>
			</section>
		</div>
	);
}
