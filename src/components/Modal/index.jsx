import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import s from "./modal.module.scss";

const Modal = ({ isVisible, setIsVisible }) => {
	const dispatch = useDispatch();
	const removeTask = () => {};

	return (
		<div
			className={isVisible ? s.root : s.root + " " + s.hide}
			onClick={() => setIsVisible(false)}
		>
			<div onClick={(e) => e.stopPropagation()} className={s.inner}>
				<h3>Delete this task?</h3>
				<div className={s.btns}>
					<Button>Yes</Button>
					<Button>No</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
