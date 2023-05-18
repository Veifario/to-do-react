import React from "react";
import s from "./input.module.scss";

const Input = ({ ...props }) => {
	return <input type="text" className={s.root} {...props} />;
};

export default Input;
