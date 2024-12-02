import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const contactInfo = [
	{
		icon: PhoneCall,
		title: "Phone",
		details: ["1-800-AC-UNITY", "+1 (555) 123-4567"],
	},
	{
		icon: Mail,
		title: "Email",
		details: ["info@unityac.com", "support@unityac.com"],
	},
	{
		icon: MapPin,
		title: "Location",
		details: ["123 Cooling Street", "Comfort City, ST 12345"],
	},
	{
		icon: Clock,
		title: "Hours",
		details: ["Mon-Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Service"],
	},
];

export default function ContactPage() {
	return (
		<div className="flex flex-col gap-20 py-20">
			<section className="container">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="font-bold text-4xl tracking-tight">Contact Us</h1>
					<p className="mt-6 text-lg text-muted-foreground">
						Get in touch with our team for all your AC needs
					</p>
				</div>
			</section>

			<section className="container">
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h2 className="font-bold text-3xl">Get in Touch</h2>
						<p className="mt-4 text-muted-foreground">
							Fill out the form below and we'll get back to you as soon as
							possible.
						</p>
						<div className="mt-8">
							<ContactForm />
						</div>
					</div>
					<div>
						<div className="grid gap-6">
							{contactInfo.map((item) => (
								<Card key={item.title}>
									<CardContent className="flex items-start gap-4 p-6">
										<item.icon className="h-6 w-6 text-primary" />
										<div>
											<h3 className="font-semibold">{item.title}</h3>
											{item.details.map((detail) => (
												<p key={detail} className="mt-1 text-muted-foreground">
													{detail}
												</p>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
						<div className="mt-8 aspect-video w-full overflow-hidden rounded-lg">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								title="Google Maps location of New York City"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}