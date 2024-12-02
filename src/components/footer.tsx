import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container py-12 md:py-16 lg:py-20">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="font-semibold text-lg">Unity A.C Service</h3>
						<p className="mt-4 text-muted-foreground text-sm">
							Professional AC solutions for homes and businesses. Quality
							service since 1995.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-lg">Quick Links</h3>
						<ul className="mt-4 space-y-2">
							{["About", "Services", "Portfolio", "Careers", "Contact"].map(
								(item) => (
									<li key={item}>
										<Link
											href={`/${item.toLowerCase()}`}
											className="text-muted-foreground text-sm hover:text-primary"
										>
											{item}
										</Link>
									</li>
								),
							)}
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-lg">Services</h3>
						<ul className="mt-4 space-y-2">
							{[
								"AC Installation",
								"AC Maintenance",
								"Emergency Repairs",
								"Annual Contracts",
								"AC Dealership",
							].map((service) => (
								<li key={service}>
									<Link
										href="/services"
										className="text-muted-foreground text-sm hover:text-primary"
									>
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-lg">Newsletter</h3>
						<p className="mt-4 text-muted-foreground text-sm">
							Subscribe to our newsletter for updates and tips.
						</p>
						<div className="mt-4 flex space-x-2">
							<Input placeholder="Enter your email" type="email" />
							<Button>Subscribe</Button>
						</div>
						<div className="mt-6 flex space-x-4">
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t pt-8 text-center">
					<p className="text-muted-foreground text-sm">
						© {new Date().getFullYear()} Unity A.C Service. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
