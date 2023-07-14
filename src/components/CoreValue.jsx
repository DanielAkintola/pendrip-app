import React from "react";
import Tag from "./Tag";

import { CoreValues } from "../constants";

const CoreValueSection = () => {
	return (
		<section id="features">
			<div className="features-container my-[4rem]  max-w-[1200px] mx-auto px-[1rem]">
				<div className="content mb-[3rem]">
					<Tag>Our Core Values</Tag>
					<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.3]">
						Pendrip's core values are the driving force <br /> that shapes
						our culture and guides our decisions.
					</h2>
				</div>

				<div className="features-card-container grid grid-cols-1 lg:grid-cols-2  gap-[3rem]">
					{CoreValues.map((features) => {
						return <FeatureCard key={features.id} {...features} />;
					})}
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ id, title, text }) => {
	return (
		<div className="feature-card flex flex-col lg:flex-row-reverse gap-[1rem] lg:gap-[2rem] shadow-sm p-[.8rem] items-start md:items-center">
			<div className="content">
				<h2 className="font-bold text-[25px] text-[#0b185d] mb-[1rem] leading-[1.1]">
					{title}
				</h2>
				<p className=" text-gray-600 leading-[1.7] font-medium">{text}</p>
			</div>
		</div>
	);
};

export default CoreValueSection;
