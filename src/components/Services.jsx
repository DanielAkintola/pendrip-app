import React, { useState } from "react";
import { servicesList } from "../constants";

const Services = () => {
	const [activeService, setActiveService] = useState("01");
	return (
		<div className="service-section" id="services">
			<div className="featurs-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[5px] h-[100%]">
				{servicesList.map((item) => {
					return (
						<ServicesCard
							key={item.id}
							{...item}
							active={item.id == activeService ? true : false}
							setActiveService={setActiveService}
						/>
					);
				})}
			</div>
		</div>
	);
};

const ServicesCard = ({ id, title, text, Icon, active, setActiveService }) => {
	return (
		<article
			className={`service-card ${
				active && "service-card--active"
			} p-[1rem] h-[60vw] lg:h-[27vw] relative cursor-pointer`}
			onMouseOver={() => {
				setActiveService(id);
			}}
		>
			<div className="service-card-header flex items-center justify-between">
				<span>
					{<Icon style={{ fontSize: "40px", color: "#cc8d2e" }} />}
				</span>
				<span className=" text-gray-100 text-[22px]">{id}</span>
			</div>

			<div className=" absolute bottom-0 left-0 flex flex-col gap-[1.5rem] px-[1rem] py-[2rem]  text-white">
				<h2 className="font-bold text-[25px] font-semibold">{title}</h2>
				<p className=" text-gray-100 text-[17px] font-semibold service-card-text">
					{text}
				</p>
			</div>
		</article>
	);
};

export default Services;
