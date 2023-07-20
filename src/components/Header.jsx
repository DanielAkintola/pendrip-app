import React from "react";
import NavBar from "./NavBar";
import Button from "./Button";

import heroImg from "../assets/images/hero-illustration.png";

import Link from "./Link";

const Header = () => {
	return (
		<header id="home" className=" mb-[6rem]">
			<NavBar />

			<div className="hero-container p-[1rem] flex flex-col-reverse lg:flex-row gap-[3rem]  max-w-[1200px] mx-auto my-[5px] lg:my-[3rem]  ">
				<div className="hero-content  mt-[2rem]">
					<span className="bg-[#f5a65c] p-[1rem] inline-block uppercase text-[15px] rounded-md font-bold mb-[1rem] text-white">
						Welcome to Pendrip
					</span>
					<h1 className="text-[#0b185d] lg:max-w-[900px] font-bold text-[40px] md:text-[50px] leading-[1.1] mb-[2rem]">
						Improve Your Academic and Business performances with Quality
						Writing Services.
					</h1>
					<p className="max-w-[600px] mb-[2rem] text-[20px] text-gray-600 leading-[1.5] font-medium">
						Pendrip is a reputable and client-centred writing company that
						specializes in academic and technical writing. Trust Pendrip
						as your dedicated partner in achieving writing excellence at a
						considerate price.
					</p>

					<Link link={"services"}>
						<Button variant="primary">Explore Services</Button>
					</Link>
				</div>

				<div className="hero-iilustration hidden md:h-[30rem] md:block">
					<img
						src={heroImg}
						alt=""
						className="w-[100%] h-[100%] object-cover rounded-xl"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
