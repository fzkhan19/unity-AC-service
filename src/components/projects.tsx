import { ProjectCard } from "@/components/project-card";

const featuredProjects = [
	{
		title: "Corporate Office HVAC Installation",
		description:
			"Complete HVAC system installation for a 10-story corporate building with smart temperature control.",
		images: [
			"https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
			"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
		],
		location: "Downtown Business District",
		serviceType: "Commercial Installation",
	},
	{
		title: "Luxury Apartment Complex",
		description:
			"Installation and maintenance of central AC systems for a 200-unit luxury apartment complex.",
		images: [
			"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
			"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80",
		],
		location: "Residential Heights",
		serviceType: "Residential Installation",
	},
	{
		title: "Shopping Mall AC Upgrade",
		description:
			"Major AC system upgrade for a shopping mall, improving energy efficiency by 40%.",
		images: [
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
			"https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&q=80",
		],
		location: "City Center Mall",
		serviceType: "Commercial Upgrade",
	},
];

export function Projects() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="text-center">
					<h2 className="font-bold text-3xl tracking-tight">
						Featured Projects
					</h2>
					<p className="mt-4 text-muted-foreground">
						Discover our recent installations and success stories
					</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{featuredProjects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
