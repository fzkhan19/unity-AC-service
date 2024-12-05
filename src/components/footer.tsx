import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container py-12 md:py-16 lg:py-20">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<h3 className="font-semibold text-lg">Unity A.C Service</h3>
						<p className="mt-4 text-muted-foreground text-sm">
							Professional AC solutions for homes and businesses.
							<br />
							Quality service since 2017.
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
