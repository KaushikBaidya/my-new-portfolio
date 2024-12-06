import React from "react";
import ContactForm from "./contactForm";

const Contact = () => {
	return (
		<main id="contact" className="py-20">
			<div className="text-center">
				<h1 className="text-4xl font-bold">
					<span className="border-b-4 border-primary">Contact</span>
					<span className="text-primary"> Me.</span>
				</h1>
				<p className="py-4">Write me anything what you want to say. </p>
			</div>

			<div>
				<ContactForm />
			</div>
		</main>
	);
};

export default Contact;
