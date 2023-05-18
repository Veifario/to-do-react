import React from "react";
import s from "./button.module.scss";

const Button = ({ children, ...props }) => {
	return (
		<button className={s.root} {...props}>
			{children}
		</button>
	);
};

export default Button;
