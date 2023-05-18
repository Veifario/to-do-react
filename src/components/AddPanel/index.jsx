import React, { useState } from "react";
import { v4 as unique } from "uuid";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import s from "./addpanel.module.scss";
import addImg from "../../assets/img/add.svg";
import { taskAddingWithPost } from "../../redux/actions";
import { useDispatch } from "react-redux";

const AddPanel = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState({
		title: "",
		body: "",
	});

	const addTask = async () => {};

	const handleSetTitle = (e) => {
		setInputValue({ ...inputValue, title: e.target.value });
	};

	return (
		<div className={s.root}>
			<Input
				placeholder="Title..."
				value={inputValue.title}
				onChange={handleSetTitle}
			/>
			<Input
				placeholder="About..."
				value={inputValue.body}
				onChange={(e) => setInputValue({ ...inputValue, body: e.target.value })}
			/>
			<Button onClick={addTask}>
				<img src={addImg} alt="" />
			</Button>
		</div>
	);
};

export default AddPanel;
