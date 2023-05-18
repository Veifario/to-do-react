import "./App.css";
import AddPanel from "./components/AddPanel";
import TasksList from "./components/TasksList";

function App() {
	return (
		<div className="App">
			<div className="container">
				<AddPanel />
				<TasksList />
			</div>
		</div>
	);
}

export default App;
