import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksFetch } from "../../redux/actions";
import Preloader from "../Preloader/index";
import s from "./taskslist.module.scss";
import Modal from "../Modal";
import { useState } from "react";

const TasksList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tasks = useSelector((state) => state.tasks.tasksList);
	const loadingStatus = useSelector((state) => state.tasks.loadingStatus);

	const dispatch = useDispatch();

	useEffect(() => {}, []);

	const displayTasks = () => {};

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
			<Modal isVisible={isModalOpen} setIsVisible={setIsModalOpen} />
		</div>
	);
};

export default TasksList;
