import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";

import Link from "./Link";
import { AiOutlineMenu } from "react-icons/ai";

import Modal from "./Modal";

const NavBar = () => {
	const [isFixed, setIsFixed] = useState(false);
	const [isModal, setIsModal] = useState(false);

	const handleEvent = () => {
		if (window.scrollY > 40) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleEvent);
	}, []);

	return (
		<nav
			className={`h-[6rem] bg-white shadow-sm ${
				isFixed && "fixed shadow-md"
			} top-0 left-0 z-20 w-[100%] `}
		>
			<div className="flex justify-between items-center h-[100%] w-[100%] px-[1rem] max-w-[1200px] mx-auto">
				<p className="logo mr-auto text-gray-800 uppercase text-[17px] font-extrabold">
					<a href="#">
						PenDrip
						<span>.</span>
					</a>
				</p>
				<ul className="hidden gap-[2rem]  items-center  md:flex">
					{navLinks.map((item) => {
						const { id, link, title } = item;
						return (
							<Link key={id} link={link}>
								<li className="cursor-pointer text-gray-500 uppercase font-bold text-[16px] hover:text-[#f28a29]">
									<a>{title}</a>
								</li>
							</Link>
						);
					})}
				</ul>

				<div
					className="block cursor-pointer ml-auto md:hidden"
					onClick={() => {
						setIsModal(true);
					}}
				>
					<AiOutlineMenu fontSize={"2rem"} />
				</div>

				<Modal toggleModal={setIsModal} modal={isModal} />
			</div>
		</nav>
	);
};

export default NavBar;
