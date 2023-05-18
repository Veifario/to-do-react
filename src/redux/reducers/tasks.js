const initialState = {
	tasksList: [],
	loadingStatus: "loaded",
};

const tasks = (state = initialState, action) => {
	switch (action.type) {
		case "TASKS_FETCHING":
			return {
				...state,
				loadingStatus: "loading",
			};
		case "TASKS_FETCHED":
			return {
				...state,
				tasksList: action.payload,
				loadingStatus: "loaded",
			};

		case "TASKS_FETCHING_ERROR":
			return {
				...state,
				loadingStatus: "error",
			};
		case "TASK_ADD":
			return {
				...state,
				// Делай сам
			};
		case "TASK_REMOVE":
			return {
				...state,
				// Делай сам
			};
		case "TASK_EDIT":
			return {
				...state,
				// Делай сам 
			};
		default:
			return state;
	}
};

export default tasks;
