import { ProjectCard } from "@/components/project-card";
import { client } from "../../../tina/__generated__/client";

export const revalidate = 60; // Revalidate every hour
export default async function PortfolioPage() {
	const { data } = await client.queries.portfolioConnection();
	console.log(data.portfolioConnection.edges);
	const projects = data.portfolioConnection.edges?.map((edge) => edge?.node);

	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">Our Portfolio</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						Explore our successful projects and installations
					</p>
				</div>
			</section>

			<section className="container">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects?.map((project) => (
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
			</section>
		</div>
	);
}
