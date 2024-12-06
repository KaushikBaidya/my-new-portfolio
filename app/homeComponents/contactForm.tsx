"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			// Replace these values with your own Email.js credentials
			const serviceId = "service_sgnwek8";
			const templateId = "template_rvlhtd8";
			const userId = "user_nVLBRPb3OpwcAuLGrJEok";

			await emailjs.send(serviceId, templateId, formData, userId);
			Swal.fire({
				title: "Thank You!",
				text: "Your email has sent!",
				icon: "success",
			});
		} catch (error) {
			console.error("Error sending email:", error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit} className="px-10">
			<div className="mb-4">
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="mt-1 p-2 border rounded w-full bg-gray-950"
					placeholder="Your Name"
				/>
			</div>

			<div className="mb-4">
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="mt-1 p-2 border rounded w-full bg-gray-950"
					placeholder="example@email.com"
				/>
			</div>

			<div className="mb-4">
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					className="mt-1 p-2 border rounded w-full h-56 bg-gray-950"
					placeholder="Write your message..."
				/>
			</div>
			<div className="flex justify-center ">
				<button
					type="submit"
					className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-primary font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-primary hover:shadow-primary hover:before:border-[25px] rounded-md"
				>
					<span className="relative z-10">Send Message</span>
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
