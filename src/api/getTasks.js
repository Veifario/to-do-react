import axios from "axios";

export const getTasks = async () => {
	const response = await axios.get("http://localhost:3001/tasks");
	return response.data;
};
