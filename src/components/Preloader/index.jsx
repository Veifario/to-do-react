import React from "react";
import s from "./preloader.module.scss";
import loader from "../../assets/img/loadersvg.svg";

const Preloader = () => {
	return <img className={s.root} src={loader} />;
};

export default Preloader;
