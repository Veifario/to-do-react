import { createAction } from "@reduxjs/toolkit";
import { getTasks } from "../api/getTasks";
import { postTask } from "../api/postTask";
import { deleteTask } from "../api/deleteTask";
import { patchTask } from "../api/patchTask";

export const tasksFetch = () => async (dispatch) => {
	try {
		dispatch(tasksFetching());
		const data = await getTasks();
		dispatch(tasksFetched(data));
	} catch (err) {
		dispatch(tasksFetchingError());
	}
};

export const taskAddingWithPost = (task) => (dispatch) => {
	postTask(task);
	dispatch(taskAdd(task));
};

export const taskRemovingWithDelete = (id, filteredTasks) => (dispatch) => {
	deleteTask(id);
	dispatch(taskRemove(filteredTasks));
};

export const taskEditWithPut = (id, task, updatedTasks) => (dispatch) => {
	patchTask(id, task);
	dispatch(taskEdit(updatedTasks));
};

const tasksFetching = createAction("TASKS_FETCHING");
const tasksFetched = createAction("TASKS_FETCHED");
const tasksFetchingError = createAction("TASKS_FETCHING_ERROR");

const taskAdd = createAction("TASK_ADD");
const taskRemove = createAction("TASK_REMOVE");
const taskEdit = createAction("TASK_EDIT");
