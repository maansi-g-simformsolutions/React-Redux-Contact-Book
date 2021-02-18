import React from 'react';
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from './components/contacts/Contacts';
import { Provider, provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container"></div>
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
        </div>
      </Router>
    </Provider>
  );
}
