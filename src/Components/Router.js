import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import  Home from "Routes/Home";
import  Movie from "Routes/Movie";
import  TV from "Routes/TV";
import  Search from "Routes/Search";
import Header from "./Header";
import Detail from "Routes/Detail";

const appRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/movie" exact component={ Movie } />
                <Route path="/tv" exact component={ TV } />
                <Route path="/search" component={ Search } />
                <Route path="/movie/:id" component={ Detail } />
                <Route path="/tv/:id" component={ Detail } />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>

    );
}

export default appRouter;
    

