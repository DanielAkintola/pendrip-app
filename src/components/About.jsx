import React from "react";

import Tag from "./Tag";
import aboutImg from "../assets/images/test-2.svg";
import Button from "./Button";

import styles from "../assets/styles/index";

import Link from "./Link";

const About = () => {
	return (
		<section className="about-section pt-[3rem]" id="about">
			<div className="about-container  px-[1rem] flex flex-col-reverse  lg:flex-row lg:gap-[2rem] max-w-[1200px] mx-auto  justify-between">
				<div className="about-content mt-[3rem]">
					<Tag>About Us.</Tag>
					<h2 className="font-bold text-[30px] text-[#0b185d] mb-[1rem] leading-[1.1]">
						A professoinal writer <br />
						makes a big difference
					</h2>
					<p className={styles.text}>
						Pendrip is a professional writing company that specializes in
						providing top-notch academic and technical writing solutions.
						With a team of specialist writers from diverse disciplines, we
						are committed to delivering exceptional writing services to
						students, job-seekers, researchers and organizations
						worldwide.
					</p>

					<div className="content-container my-[2rem]">
						<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.1]">
							Our Mission
						</h2>
						<p className={styles.text}>
							Our mission is to empower students, researchers and
							professionals globally by providing impeccable academic and
							technical writing solutions that foster excellence and
							drive success.
						</p>
					</div>

					<div className="content-container my-[2rem]">
						<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.1]">
							Our Vision
						</h2>
						<p className={styles.text}>
							We envision a future where Pendrip equals exceptional
							writing solutions, empowering individuals and organizations
							worldwide to excel in their academic, professional and
							research aspirations.
						</p>
					</div>

					<Link link={"contact"}>
						<Button variant={"primary"} className="mt-7">
							Contact
						</Button>
					</Link>
				</div>

				<div className="about-illustraion lg:mt-[6rem]">
					<img src={aboutImg} alt="" className="w-[80%] lg:ml-auto" />
				</div>
			</div>
		</section>
	);
};

export default About;
