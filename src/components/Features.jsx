import React from "react";
import Tag from "./Tag";

import { featuressList } from "../constants";

const Features = () => {
	return (
		<section id="features">
			<div className="features-container my-[4rem]  max-w-[1200px] mx-auto px-[1rem]">
				<div className="content mb-[3rem]">
					<Tag>Our Features</Tag>
					<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.1]">
						We work on Core values and Norms <br /> to provide the best
						services in the world
					</h2>
				</div>

				<div className="features-card-container grid grid-cols-1 lg:grid-cols-2  gap-[3rem]">
					{featuressList.map((features) => {
						return <FeatureCard key={features.id} {...features} />;
					})}
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ id, icon, title, text }) => {
	return (
		<div className="feature-card flex flex-col lg:flex-row-reverse gap-[1rem] lg:gap-[2rem] shadow-sm p-[.8rem] items-start md:items-center">
			<div className="illustration max-w-[300px]">
				<img src={icon} alt={title} className="w-[100%]" />
			</div>

			<div className="content">
				<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.1]">
					{title}
				</h2>
				<p className=" text-gray-600 leading-[1.7] font-medium">{text}</p>
			</div>
		</div>
	);
};

export default Features;
