import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

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
		details: ["Mon-Sat: 10:00 AM - 8:00 PM", "24/7 Emergency Service"],
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
					</div>
					<div>
						<div className="w-full overflow-hidden rounded-lg">
							<iframe
								title="Unity A.C Service"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4783349129725!2d72.83431607958762!3d21.173148930265413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e39e6f8f871%3A0xb9fc5530efc499a2!2s3%2C%20Udhana%20Main%20Rd%2C%20Satyanagar%20Society%2C%20Udhna%20Udhyog%20Nagar%2C%20Udhana%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1733387730776!5m2!1sen!2sin"
								width="600"
								height="550"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
