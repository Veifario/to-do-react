import axios from "axios";

export const deleteTask = async (id) => {
	await axios.delete(`http://localhost:3001/tasks/${id}`);
};
 