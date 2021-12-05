import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Layout
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewPlanPage from './pages/NewPlanPage';

// Context
import AuthState from "./context/Auth/AuthState";

function App() {
	return (
		<div className="App">
			<AuthState>
				<Navbar />
				<Routes>
					{/* <PrivateRoute path='/' element={<Home />} /> */}
          <Route path='/newplan' element={<NewPlanPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</AuthState>
		</div>
	);
}

export default App;
