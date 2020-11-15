import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import AboutUs from "./Components/AboutUs";
import Experts from "./Components/Experts";
import StudentCourses from "./Components/StudentCourses";
import InstituteCourses from "./Components/InstituteCourses";
import CorporateCourses from "./Components/CorporateCourses";
import Contact from "./Components/Contact";
import Chanakya from "./Components/Chanakya";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/experts' component={Experts} />
					<Route
						exact
						path='/student-courses'
						component={StudentCourses}
					/>
					<Route
						exact
						path='/institute-courses'
						component={InstituteCourses}
					/>
					<Route
						exact
						path='/corporate-courses'
						component={CorporateCourses}
					/>
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/chanakya'>
						<Chanakya />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
