import React from "react";

const Link = ({ children, link }) => {
	const handleClick = () => {
		const section = document.querySelector(`#${link}`);
		const position = section.offsetTop;

		console.log(position);

		window.scrollTo({
			left: 0,
			top: position - 96,
		});

		console.log(`#${link}`);
	};

	return <span onClick={handleClick}>{children}</span>;
};

export default Link;
