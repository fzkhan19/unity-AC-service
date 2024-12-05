import { ProjectCard } from "@/components/project-card";
import { client } from "../../tina/__generated__/client";

export const revalidate = 3600; // Revalidate every hour

export async function Projects() {
	// Fetch all projects
	const { data } = await client.queries.portfolioConnection();
	const projects = data.portfolioConnection.edges?.map((edge) => edge?.node);

	// Get the top 3 projects (e.g., based on a "featured" property or simply the first three)
	const featuredProjects = projects?.slice(0, 3);

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
					{featuredProjects?.map((project) => (
						<ProjectCard
							key={project?.title}
							title={project?.title || ""}
							description={project?.description || ""}
							images={
								project?.images
									?.map((image) => image.image)
									.filter(
										(img): img is string => img !== null && img !== undefined,
									) || []
							}
							location={project?.location || ""}
							serviceType={project?.serviceType || ""}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
