import axios from "axios";

export const patchTask = async (id, el) => {
	await axios.patch(`http://localhost:3001/tasks/${id}`, el);
};
