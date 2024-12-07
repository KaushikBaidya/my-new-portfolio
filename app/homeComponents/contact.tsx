import React from "react";
import ContactForm from "./contactForm";
import EarthCanvas from "./Earth";

const Contact = () => {
	return (
		<section id="contact" className="lg:w-9/12 mx-auto sm:px-4 lg:px-0 py-20">
			<div className="text-center space-y-4">
				<h1 className="text-5xl font-semibold hero-font uppercase">
					<span className="">Contact</span>
					<span className="text-primary"> Me.</span>
				</h1>
				<p className="py-4">Write me anything what you want to say. </p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 my-20">
				<div className="w-full">
					<ContactForm />
				</div>

				<div>
					<EarthCanvas />
				</div>
			</div>
		</section>
	);
};

export default Contact;
