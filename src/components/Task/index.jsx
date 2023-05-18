import React, { useRef } from "react";
import s from "./task.module.scss";
import Button from "../../ui/Button/index";
import editImg from "../../assets/img/edit.svg";
import checkImg from "../../assets/img/check.svg";
import removeImg from "../../assets/img/remove.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskEditWithPut } from "../../redux/actions";

const Task = ({ id, title, body, isDone, modalOpen, setRemovingId }) => {
	const dispatch = useDispatch();
	const tasksList = useSelector((state) => state.tasks.tasksList);

	// const [isDone, setIsDone] = useState(false);
	const [isSaveShow, setIsSaveShow] = useState(false);
	const [isContentEditable, setIsContentEditable] = useState(false);
	const [content, setContent] = useState({
		title: title,
		body: body,
	});

	const taskDone = () => {
		const updatedDoneTask = {
			done: !isDone,
		};
		const updatedList = tasksList.map((task) => {
			return task.id === id ? { ...task, ...updatedDoneTask } : task;
		});
		dispatch(taskEditWithPut(id, updatedDoneTask, updatedList));
	};

	const editTask = async () => {
		setIsContentEditable(!isContentEditable);
		setIsSaveShow(!isSaveShow);
	};

	const saveEdition = () => {
		const updatedContent = {
			title: content.title,
			body: content.body,
		};

		const updatedList = tasksList.map((task) =>
			task.id === id ? { ...task, ...updatedContent } : task
		);

		dispatch(taskEditWithPut(id, updatedContent, updatedList));

		setIsContentEditable(false);
		setIsSaveShow(false);
	};

	const removeTaskOpeningModal = () => {
		setRemovingId(id);
		modalOpen(true);
	};

	return (
		<div className={s.root}>
			<div className={s.content}>
				<h2
					suppressContentEditableWarning={true}
					className={
						(isContentEditable ? s.edit : null) + " " + (isDone ? s.done : null)
					}
					contentEditable={isContentEditable}
					onInput={(e) =>
						setContent({ ...content, title: e.target.textContent })
					}
				>
					{title}
				</h2>
				<p
					suppressContentEditableWarning={true}
					className={
						(isContentEditable ? s.edit : null) + " " + (isDone ? s.done : null)
					}
					contentEditable={isContentEditable}
					onInput={(e) =>
						setContent({ ...content, body: e.target.textContent })
					}
				>
					{body}
				</p>
			</div>
			<div className={s.btns}>
				<div className={isSaveShow ? s.save : s.save + " " + s.hide}>
					<Button onClick={saveEdition}>SAVE</Button>
				</div>
				<Button onClick={editTask}>
					<img className={s.icon} src={editImg} alt="" />
				</Button>
				<Button onClick={removeTaskOpeningModal}>
					<img className={s.icon} src={removeImg} alt="" />
				</Button>
				<Button onClick={taskDone}>
					<img className={s.icon} src={isDone ? checkImg : "#"} alt="" />
				</Button>
			</div>
		</div>
	);
};

export default Task;
