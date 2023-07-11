import React from "react";

import { navLinks } from "../constants";

import Link from "./Link";
import Button from "./Button";

const Modal = ({ toggleModal, modal }) => {
	return (
		<div
			className={`modal  ${
				modal ? "modal--active" : ""
			} absolute z-40 top-0 left-0 w-[100%] h-[100vh] lg:hidden`}
			onClick={() => {
				toggleModal(!modal);
			}}
		>
			<div className="modal-content h-[100%] bg-white w-[70%] z-50 px-[1.5rem] py-[2rem]">
				<ul className="flex flex-col gap-[2rem]">
					{navLinks.map((item) => {
						const { id, link, title } = item;
						return (
							<Link key={id} link={link}>
								<li className="inline-block cursor-pointer text-gray-500 uppercase font-bold text-[16px] hover:text-[#f28a29]">
									<a>{title}</a>
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Modal;
