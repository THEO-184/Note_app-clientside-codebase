import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
// local imports
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
);
