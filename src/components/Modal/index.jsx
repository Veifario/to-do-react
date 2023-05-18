import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskRemovingWithDelete } from "../../redux/actions";
import Button from "../../ui/Button";
import s from "./modal.module.scss";

const Modal = ({ isVisible, setIsVisible, removingId }) => {
	const dispatch = useDispatch();
	const tasksList = useSelector((state) => state.tasks.tasksList);

	const removeTask = () => {
		dispatch(
			taskRemovingWithDelete(
				removingId,
				tasksList.filter((task) => task.id !== removingId)
			)
		);
		setIsVisible(false);
	};

	return (
		<div
			className={isVisible ? s.root : s.root + " " + s.hide}
			onClick={() => setIsVisible(false)}
		>
			<div onClick={(e) => e.stopPropagation()} className={s.inner}>
				<h3>Delete this task?</h3>
				<div className={s.btns}>
					<Button onClick={removeTask}>Yes</Button>
					<Button onClick={() => setIsVisible(false)}>No</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
