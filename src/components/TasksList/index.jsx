import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksFetch } from "../../redux/actions";
import Task from "../Task";
import Preloader from "../Preloader/index";
import s from "./taskslist.module.scss";
import Modal from "../Modal";
import { useState } from "react";

const TasksList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [removingId, setRemovingId] = useState("");

	const tasks = useSelector((state) => state.tasks.tasksList);
	const loadingStatus = useSelector((state) => state.tasks.loadingStatus);
	// const isTaskDone = useSelector((state) => state.task.tasksList);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(tasksFetch());
	}, []);

	const displayTasks = () =>
		tasks.map(({ id, title, body, done }) => (
			<Task
				modalOpen={setIsModalOpen}
				setRemovingId={setRemovingId}
				key={id}
				title={title}
				body={body}
				id={id}
				isDone={done}
			/>
		));

	return (
		<div className={s.root}>
			{loadingStatus === "loading" ? (
				<Preloader />
			) : loadingStatus === "error" ? (
				<div className={s.another}>Error sending request</div>
			) : tasks.length === 0 ? (
				<div className={s.another}>No tasks</div>
			) : (
				displayTasks()
			)}
			<Modal
				isVisible={isModalOpen}
				setIsVisible={setIsModalOpen}
				removingId={removingId}
			/>
		</div>
	);
};

export default TasksList;
