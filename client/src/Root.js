import React from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./configureStore";
import HomePage from "./components/Users/HomePage";
import UserList from "./components/Users/UserList";
import NewForm from "./components/Users/NewForm";
import User from "./components/Users/User";
import UserEditDelete from "./components/Users/UserEditDelete";
///Photographer Imports
// import PhotographersList from './components/PhotoGraphers/PhotographersList'
// ///PhotoGallery
// import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import NavBar from "./components/styled_components/NavBar";
import NavLinkWrapper from "./components/styled_components/NavLinkWrapper";

const history = createHistory();
const store = configureStore(history);
console.log(store);
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NavBar>
          <NavLinkWrapper>
            <Link to="/">Home</Link>
            <Link to="/user">Users</Link>
            <Link to="/new">Create A User</Link>
            <Link to="/photographers">Photographers</Link>
            <Link to="/photogallery">Photo Gallery</Link>
            {/* <Link to="">About</Link> */}
          </NavLinkWrapper>
        </NavBar>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={UserList} />
        <Route exact path="/new" component={NewForm} />
        <Route exact path="/users" component={User} />
        <Route exact path="/users/:userId" component={UserEditDelete} />
        <Route exact path="users/userId/delete" component={UserEditDelete} />
        {/* <Route exact path="/photographers" component={DataOfPhotographers}/>
      <Route exact path="/photogallery" component={allOfThePhotos}/> */}
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root;
