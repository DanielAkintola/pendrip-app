import React, { useRef, useState } from "react";
import conatctIllustration from "../assets/images/contact-illustration.svg";

import FormControl from "./FormControl";

import { BsSend } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const sendEmail = async () => {
		setLoading(true);
		try {
			const result = await emailjs.sendForm(
				"service_8fekqd7",
				"template_f42n4kf",
				form.current,
				"K56qyoODds9eTl_MZ"
			);

			alert("Email sent successfully");
			setName("");
			setEmail("");
			setMessage("");
		} catch (error) {
			alert("Email Failed");
		}
		setLoading(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name && email && message) {
			sendEmail();
		} else {
			alert("Please fill the form!");
		}
	};

	return (
		<section className="contact-section bg-[#060a2c]" id="contact">
			<div className="container py-[3rem] px-[2rem] max-w-[1200px] mx-auto">
				<div className="contact-content flex flex-col md:flex-row justify-between">
					<div className="contact-form-container w-[100%] md:w-[50%]">
						<h2 className="font-bold text-[30px] text-[white] mb-[1rem] leading-[1.1]">
							Contact Us
						</h2>
						<p className="max-w-[700px] mb-[2rem] text-[#f9a826] text-[20px] leading-[1.4] font-medium">
							Contact us to learn more about our services, we will be
							happy to hear from you and answer any of your questions.
						</p>
						<form ref={form} onSubmit={handleSubmit}>
							<FormControl className="">
								<input
									type="text"
									name="name"
									className="input"
									placeholder="Name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</FormControl>

							<FormControl className="">
								<input
									type="email"
									name="email"
									className="input"
									placeholder="Email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</FormControl>

							<FormControl className="">
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="5"
									className="input"
									placeholder="Message"
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								></textarea>
							</FormControl>

							<button
								type="submit"
								disabled={loading}
								className="flex gap-4 items-center px-[1rem] py-[.7rem] bg-[#F9A826] text-white text-[15px] uppercase font-bold rounded-lg"
							>
								Send
								{loading ? (
									<BiLoaderAlt fontSize={"20px"} className="loader" />
								) : (
									<BsSend fontSize={"20px"} />
								)}
							</button>
						</form>
					</div>

					<div className="contact-illustartion mt-[2rem] w-[40%]  hidden md:block illustrator">
						<img
							src={conatctIllustration}
							alt="conatct-illustration"
							width={"100%"}
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
