import React from "react";
import s from "./task.module.scss";
import Button from "../../ui/Button/index";
import editImg from "../../assets/img/edit.svg";
import checkImg from "../../assets/img/check.svg";
import removeImg from "../../assets/img/remove.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ title, body, isDone }) => {
	const dispatch = useDispatch();
	const tasksList = useSelector((state) => state.tasks.tasksList);

	const [isContentEditable, setIsContentEditable] = useState(false);

	const taskDone = () => {};

	const editTask = async () => {};

	const saveEdition = () => {};

	const removeTaskOpeningModal = () => {};

	return (
		<div className={s.root}>
			<div className={s.content}>
				<h2
					className={
						(isContentEditable ? s.edit : null) + " " + (isDone ? s.done : null)
					}
					contentEditable={isContentEditable}
				>
					{title}
				</h2>
				<p
					className={
						(isContentEditable ? s.edit : null) + " " + (isDone ? s.done : null)
					}
					contentEditable={isContentEditable}
				>
					{body}
				</p>
			</div>
			<div className={s.btns}>
				<div>
					<Button>SAVE</Button>
				</div>
				<Button>
					<img className={s.icon} src={editImg} alt="" />
				</Button>
				<Button>
					<img className={s.icon} src={removeImg} alt="" />
				</Button>
				<Button>
					<img className={s.icon} src={isDone ? checkImg : "#"} alt="" />
				</Button>
			</div>
		</div>
	);
};

export default Task;
