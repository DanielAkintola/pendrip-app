import React from "react";
import { servicesList } from "../constants";

const Services = () => {
	return (
		<div className="service-section" id="services">
			<div className="featurs-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[5px] h-[100%]">
				{servicesList.map((item) => {
					return <ServicesCard key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

const ServicesCard = ({ id, title, text, Icon }) => {
	return (
		<article className="service-card p-[1rem] h-[60vw] lg:h-[40vw] relative cursor-pointer">
			<div className="service-card-header flex items-center justify-between">
				<span>
					{<Icon style={{ fontSize: "40px", color: "#cc8d2e" }} />}
				</span>
				<span className=" text-gray-100 text-[22px]">{id}</span>
			</div>

			<div className=" absolute bottom-0 left-0 flex flex-col gap-[1.5rem] px-[1rem] py-[2rem] md:py-[4rem] text-white">
				<h2 className="font-bold text-[25px] font-semibold">{title}</h2>
				<p className=" text-gray-100 text-[17px] font-semibold service-card-text">
					{text}
				</p>
			</div>
		</article>
	);
};

export default Services;
