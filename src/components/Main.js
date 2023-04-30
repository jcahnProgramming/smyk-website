import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact Component={Home} />
                <Route path='/about' exact Component={About} />
                <Route path='/joinus' exact Component={Joinus} />
                <Route path='/contact' exact Component={Contact} />
                <Route path='/shop' exact Component={Shop} />

            </Switch>
        </Router>
    );
}

export default Main;