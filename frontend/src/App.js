import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Layout
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewTripPage from "./pages/NewTripPage";
import MyTripsPage from "./pages/MyTripsPage";
import ExplorePage from "./pages/ExplorePage";

// Context
import AuthState from "./context/Auth/AuthState";
import ItenaryState from "./context/Itenary/ItenaryState";

function App() {
	return (
		<div className="App">
			<AuthState>
				<ItenaryState>
					<Navbar />
					<Routes>
						<Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
						<Route path='/explore' element={<PrivateRoute><ExplorePage /></PrivateRoute>} />
						<Route path='/mytrips' element={<PrivateRoute><MyTripsPage /></PrivateRoute>} />
						<Route path="/newtrip" element={<PrivateRoute><NewTripPage /></PrivateRoute>} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</ItenaryState>
			</AuthState>
		</div>
	);
}

export default App;
