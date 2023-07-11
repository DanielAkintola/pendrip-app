import React from "react";
import { teamList } from "../constants";

import Tag from "./Tag";

import styles from "../assets/styles";

const Team = () => {
	return (
		<div className="team-section mb-[6rem]" id="team">
			<div className="team-container px-[1rem] flex flex-col max-w-[1200px]  mx-auto gap-[1rem]">
				<div className="team-content">
					<Tag>The Team.</Tag>
					<h2 className="font-bold text-[30px] text-[#0b185d] mb-[1rem] leading-[1.1]">
						Meet The Brains <br />
						behind the whole Drama
					</h2>

					<div className="flex my-[1.5rem] gap-3 md:gap-0 flex-col md:flex-row">
						<p className={`${styles.text}  md:pr-[1rem] md:w-[50%]`}>
							We take pride in our team of experts who possess in-depth
							knowledge and expertise in various fields and subjects.
							With our experts from diverse fields such as Health,
							Sciences, Finance, Economics, Politics, Literary studies,
							Theology, Law, Tech, Cryptocurrency, Fine art, Education
							and more, we are equipped to handle a wide range of topics
							and disciplines, ensuring that we can meet the unique
							requirements of every project.
						</p>
						<p
							className={`${styles.text} md:w-[50%] md:border-l-[2px] md:pl-[1rem]`}
						>
							Our commitment to excellence, professionalism, and client
							satisfaction sets us apart as a trusted partner for all
							writing needs. The team is not only committed to saving
							your time and reducing stress levels, but we also ensure
							you enjoy optimal performance in all projects.
						</p>
					</div>
				</div>
				<div className="team-card-container grid grid-cols-1   mt-[2rem]  gap-[2rem]">
					{teamList.map((item) => {
						return <TeamCard key={item.id} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

const TeamCard = ({ id, about, img, name, position }) => {
	return (
		<figure className="md:flex bg-white p-8 md:p-0 shadow-md">
			<img
				src={img}
				className="h-[11rem] max-w-[300px] w-[11rem] md:h-[100%] md:w-[35%] md:rounded-none rounded-full mx-auto object-cover relative"
				alt=""
			/>
			<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
				<blockquote>
					<p className="text-lg font-medium leading-[1.8] text-gray-600">
						“{about}”
					</p>
				</blockquote>
				<figcaption className="font-medium">
					<div className="text-[#f28a29] uppercase text-[14px] font-bold mb-[6px]">
						{name}
					</div>
					<div className="text-gray-500 text-[16px]">{position}</div>
				</figcaption>
			</div>
		</figure>
	);
};

export default Team;
