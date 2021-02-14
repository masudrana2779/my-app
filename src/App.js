import React from 'react';
import './App.css';
import Home from "./components/pages/home/home";
import {Switch, Route,
    useRouteMatch,
    useParams} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './static/assets/sass/style.scss';
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import About from "./components/pages/about";
import Service from "./components/pages/services";
import {about, blog, blogDetails, contact, home, services} from "./route";
import Blog from "./components/pages/bolg";
import Contact from "./components/pages/contact";
import BlogFunctional from "./components/pages/bolg/blog";
import BlogDetails from "./components/pages/blogSingle";


function App() {
    let match = useRouteMatch();
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={home} component={Home}/>
                <Route exact path={about} component={About}/>
                <Route exact path={services} component={Service}/>
                <Route exact path={blog} component={BlogFunctional}/>
                <Route exact path={contact} component={Contact}/>
                <Route exact path={`${blogDetails}/:topicId`} component={BlogDetails}/>
                {/*<Route exact path={blogDetails} component={BlogDetails}/>*/}
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
