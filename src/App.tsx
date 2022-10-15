import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// local imports
import HomePage from "./views/Home";

function App() {
	return (
		<>
			<Toaster
				position="top-right"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 3000,
					style: {
						background: "#fff",
						color: "#000",
					},
				}}
			/>
			<Routes>
				<Route element={<HomePage />} path="/" />
			</Routes>
		</>
	);
}

export default App;
