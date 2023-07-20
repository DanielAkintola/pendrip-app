import React from "react";
import Button from "./Button";

import Link from "./Link";

const CtaSection = () => {
	return (
		<section className="bg-[#f28a29] p-[3rem]">
			<div className="cta-container max-w-[1200px] mx-auto">
				<div className="flex flex-col md:flex-row gap-[3rem]  justify-between px-[2rem] mx-auto items-center">
					<h2 className="font-bold text-[30px] md:text-[36px]  text-[#0a0c1c] text-center md:text-left">
						Unleash your academic <br /> potential with our expert pen.
					</h2>

					<Link link="contact">
						<Button>Contact Us</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
