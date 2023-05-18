import axios from "axios";

export const postTask = async (task) => {
	await axios.post("http://localhost:3001/tasks", task);
};
