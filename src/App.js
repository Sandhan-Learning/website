import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import AboutUs from "./Components/AboutUs";
import { Experts } from "./Components/Experts";
import StudentCourses from "./Components/StudentCourses";
import InstituteCourses from "./Components/InstituteCourses";
import CorporateCourses from "./Components/CorporateCourses";
import Contact from "./Components/Contact";
import Chanakya from "./Components/Chanakya";
import Career from "./Components/Career";
import Startup from "./Components/Startup";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/about'>
						<AboutUs />
					</Route>
					<Route exact path='/experts'>
						<Experts />
					</Route>
					<Route exact path='/student-courses'>
						<StudentCourses />
					</Route>
					<Route exact path='/institute-courses'>
						<InstituteCourses />
					</Route>
					<Route exact path='/corporate-courses'>
						<CorporateCourses />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/chanakya'>
						<Chanakya />
					</Route>
					<Route exact path='/career'>
						<Career />
					</Route>
					<Route exact path='/knowmore'>
						<Startup />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
