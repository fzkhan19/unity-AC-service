import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Target, Users } from "lucide-react";

const teamMembers = [
	{
		name: "John Smith",
		role: "CEO & Founder",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
	},
	{
		name: "Sarah Johnson",
		role: "Technical Director",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
	},
	{
		name: "Michael Chen",
		role: "Service Manager",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
	},
];

const certifications = [
	"ISO 9001:2015 Certified",
	"HVAC Excellence Certification",
	"Energy Star Partner",
	"NATE Certified Technicians",
];

export default function AboutPage() {
	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">
						About Unity A.C Service
					</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						With over 25 years of experience, we've been providing top-quality
						AC solutions to homes and businesses across the region.
					</p>
				</div>
			</section>

			<section className="container">
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h2 className="font-bold text-3xl">Our Story</h2>
						<p className="mt-4 text-muted-foreground">
							Founded in 1995, Unity A.C Service began with a simple mission: to
							provide reliable and efficient AC solutions. Today, we're proud to
							be one of the leading AC service providers in the region.
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						<Card>
							<CardContent className="flex flex-col items-center p-6">
								<Users className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold">500+</h3>
								<p className="text-muted-foreground text-sm">Clients Served</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center p-6">
								<Building2 className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold">1000+</h3>
								<p className="text-muted-foreground text-sm">
									Projects Completed
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section className="bg-muted py-20">
				<div className="container">
					<h2 className="font-bold text-3xl">Our Mission & Vision</h2>
					<div className="mt-8 grid gap-8 md:grid-cols-2">
						<Card>
							<CardContent className="p-6">
								<Target className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold text-xl">Mission</h3>
								<p className="mt-2 text-muted-foreground">
									To provide exceptional AC solutions that enhance comfort and
									efficiency while maintaining the highest standards of customer
									service.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<Award className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold text-xl">Vision</h3>
								<p className="mt-2 text-muted-foreground">
									To be the most trusted and innovative AC service provider,
									setting industry standards for quality and customer
									satisfaction.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section className="container">
				<h2 className="font-bold text-3xl">Our Team</h2>
				<div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{teamMembers.map((member) => (
						<Card key={member.name}>
							<CardContent className="p-6">
								<div className="aspect-square overflow-hidden rounded-full">
									<img
										src={member.image}
										alt={member.name}
										className="h-full w-full object-cover"
									/>
								</div>
								<h3 className="mt-4 text-center font-semibold text-xl">
									{member.name}
								</h3>
								<p className="text-center text-muted-foreground">
									{member.role}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="bg-muted py-20">
				<div className="container">
					<h2 className="font-bold text-3xl">Certifications & Partnerships</h2>
					<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{certifications.map((cert) => (
							<Card key={cert}>
								<CardContent className="flex items-center gap-4 p-6">
									<Award className="h-8 w-8 text-primary" />
									<span className="font-medium">{cert}</span>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
