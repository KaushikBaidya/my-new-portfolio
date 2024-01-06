"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
      const serviceId = "your_emailjs_service_id";
      const templateId = "your_emailjs_template_id";
      const userId = "your_emailjs_user_id";

      await emailjs.send(serviceId, templateId, formData, userId);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-lg mx-auto px-10">
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
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
