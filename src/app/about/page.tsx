import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Target, Users } from "lucide-react";

const teamMembers = [
	{
		name: "Sayeed Khan",
		role: "Co-Founder & Co-Owner",
		image: "",
	},
	{
		name: "Zuber Munshi",
		role: "Co-Founder & Co-Owner",
		image: "",
	},
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
						Founded in 2017, Unity A.C Service has been dedicated to providing
						reliable and efficient AC solutions for both residential and
						commercial spaces. With over 100 ongoing contracts and a team of
						highly skilled professionals, we ensure exceptional service and
						unmatched customer satisfaction.
					</p>
				</div>
			</section>

			<section className="container">
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h2 className="font-bold text-3xl">Our Story</h2>
						<p className="mt-4 text-muted-foreground">
							Unity A.C Service was founded in 2017 by{" "}
							<strong className="bg-primary p-1 text-white">Sayeed Khan</strong>{" "}
							and{" "}
							<strong className="bg-primary p-1 text-white">
								Zuber Munshi
							</strong>
							, driven by a shared vision of delivering outstanding AC
							solutions. Today, we proudly serve a diverse clientele with a
							dedicated team of professionals working across three specialized
							teams, committed to excellence and innovation.{" "}
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						<Card>
							<CardContent className="flex flex-col items-center p-6">
								<Users className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold">100+</h3>
								<p className="text-muted-foreground text-sm">
									Ongoing Contracts
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center p-6">
								<Building2 className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold">3 Teams</h3>
								<p className="text-muted-foreground text-sm">
									Each with 3 Skilled Workers
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
									To deliver reliable, high-quality AC solutions that enhance
									comfort and efficiency for homes and businesses alike,
									ensuring a better living environment for our clients.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="p-6">
								<Award className="h-12 w-12 text-primary" />
								<h3 className="mt-4 font-semibold text-xl">Vision</h3>
								<p className="mt-2 text-muted-foreground">
									To become the region’s most trusted and innovative AC service
									provider, setting new standards in quality and customer
									satisfaction while continuously improving our services.
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
		</div>
	);
}
