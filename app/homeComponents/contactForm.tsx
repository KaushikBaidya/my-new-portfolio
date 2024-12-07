"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		// Clear the error for the field being updated
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: "",
		}));

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = (): boolean => {
		const newErrors: FormData = { name: "", email: "", message: "" };

		// Debugging logs
		console.log("Validating form data:", formData);

		if (!formData.name.trim()) {
			newErrors.name = "Name is required. Please let us know who you are!";
		}
		if (!formData.email.trim()) {
			newErrors.email =
				"Email is required. We need to know how to contact you!";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address.";
		}
		if (!formData.message.trim()) {
			newErrors.message =
				"Message cannot be empty. Tell us what’s on your mind!";
		}

		setErrors(newErrors);

		// Debugging logs
		console.log("Validation errors:", newErrors);

		// Check if there are any errors
		return !Object.values(newErrors).some((error) => error !== "");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate the form
		if (!validateForm()) {
			Swal.fire({
				icon: "warning",
				title: "Validation Error",
				text: "Please correct the errors and try again.",
			});
			return;
		}

		try {
			// Replace these values with your own Email.js credentials
			const serviceId = "service_sgnwek8";
			const templateId = "template_rvlhtd8";
			const userId = "user_nVLBRPb3OpwcAuLGrJEok";

			const data = {
				name: formData.name,
				email: formData.email,
				message: formData.message,
			};

			await emailjs.send(serviceId, templateId, data, userId);
			Swal.fire({
				title: "Thank You!",
				text: "Your email has been sent successfully!",
				icon: "success",
			});

			// Reset the form
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error sending email:", error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong! Please try again later.",
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
					className={`mt-1 p-2 border rounded w-full bg-gray-950 ${
						errors.name ? "border-red-500" : ""
					}`}
					placeholder="Your Name"
				/>
				{errors.name && (
					<p className="text-red-500 text-sm mt-1">{errors.name}</p>
				)}
			</div>

			<div className="mb-4">
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className={`mt-1 p-2 border rounded w-full bg-gray-950 ${
						errors.email ? "border-red-500" : ""
					}`}
					placeholder="example@email.com"
				/>
				{errors.email && (
					<p className="text-red-500 text-sm mt-1">{errors.email}</p>
				)}
			</div>

			<div className="mb-4">
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					className={`mt-1 p-2 border rounded w-full h-56 bg-gray-950 ${
						errors.message ? "border-red-500" : ""
					}`}
					placeholder="Write your message..."
				/>
				{errors.message && (
					<p className="text-red-500 text-sm mt-1">{errors.message}</p>
				)}
			</div>
			<div className="flex justify-center">
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
