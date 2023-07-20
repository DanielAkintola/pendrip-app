import React from "react";
import { footerLinksOne } from "../constants";

import Link from "./Link";

import { socialMediaLinks } from "../constants";

const Footer = () => {
	return (
		<footer className="footer bg-[#0a0c1c]  p-[1.5rem] md:py-[6rem]">
			<div className="footer-container w-[95%] max-w-[1200px] mx-auto flex flex-col md:flex-row gap-[2rem] lg:gap-[6rem]">
				<div className="footer-content lg:mr-[2rem]">
					<h2 className="font-bold text-[36px] mb-[2rem] text-[white]">
						It's Time to Pull in <br /> A
						<span className="text-[#f29e50]"> Professional</span>
					</h2>

					<p className="text-gray-300 max-w-[500px] leading-[1.7]">
						Partner with us to unlock the transformative potential of
						exceptional academic and technical writing. Trust Pendrip to
						bring your research and ideas to life. Get in touch today to
						discover how Pendrip can elevate your academic and technical
						content through expert writing and captivating delivery.
						Together, let's make your knowledge shine.
					</p>
				</div>

				<div className="footer-link-list">
					<ul className="flex flex-col items-start">
						<li className="text-[18px] font-extrabold text-gray-200 mb-[2rem]">
							Useful Links
						</li>
						{footerLinksOne.map((link) => {
							return (
								<Link key={link.id} link={link.link}>
									<li
										key={link.id}
										className="cursor-pointer inline-block text-gray-300 text-[14px] font-bold uppercase mb-[1rem] hover:text-[#f29e50] transition-colors"
									>
										<a>{link.title}</a>
									</li>
								</Link>
							);
						})}
					</ul>
				</div>

				<div className="footer-contact-us">
					<h2 className="text-[18px] font-extrabold text-gray-200 mb-[2rem]">
						Contact Us
					</h2>
					<p className="mb-[1rem] text-[#f28a29] uppercase text-[15px] tracking-[2px] font-bold">
						pendrip099@gmail.com
					</p>
					<p className="font-bold text-[30px] text-white">
						+234-80-6233-9157
					</p>

					<ul className="mt-[1rem]">
						{socialMediaLinks.map((item) => {
							const { id, Icon, profile } = item;
							return (
								<li key={id} className="text-white">
									<p className="flex items-center gap-[12px] mb-[1rem]">
										<Icon fontSize="30px" />
										<span>{profile}</span>
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
