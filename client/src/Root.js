import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./configureStore";
import HomePage from "./components/Users/HomePage";
import UserList from "./components/Users/UserList";
import NewForm from "./components/Users/NewForm";
import User from "./components/Users/User";

///Photographer Imports
import PhotographersList from './components/PhotoGraphers/PhotographersList'
// ///PhotoGallery
// import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import NavBar from "./components/styled_components/NavBar";

const history = createHistory();
const store = configureStore(history);
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NavBar/>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/new" component={NewForm} />
        <Route exact path="/users/:userId" component={User} />
        <Route exact path="/photographers" component={PhotographersList} />
        {/* <Route exact path="/users" component={User} /> */}
        {/* <Route exact path="/photographers" component={DataOfPhotographers}/>
      <Route exact path="/photogallery" component={allOfThePhotos}/> */}
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root;
