// App.js
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
} from "react-router-dom";
import Signup from "./components/Signup";
import VerifyOTP from "./components/VerifyOTP";
import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div>
            <Signup />
            {/* <Login /> */}
            {/* <VerifyOTP /> */}
            {/* <Dashboard /> */}
            <Router>
                <Routes>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/verify-otp" component={VerifyOTP} />
                    <Route exact path="/login" component={Login} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
