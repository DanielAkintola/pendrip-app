import React from "react";

const Button = ({ variant, children, size }) => {
	console.log(children);

	return (
		<button
			className={` text-white  font-bold uppercase ${
				size == "small"
					? "px-[1rem] py-[1rem] text-[13px]"
					: " px-[2rem] py-[1rem] text-[15px]"
			}  opacity-100 hover:opacity-90 transition-opacity
               ${variant === "primary" ? "bg-[#f28a29]" : "bg-[#0a0c1c]"}
            
            `}
		>
			{children}
		</button>
	);
};

export default Button;
