import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './components/Auth';
import Users from './components/Users';
import Roles from './components/Roles';
import Permissions from './components/Permissions';
import Logs from './components/Logs';
import I18n from './components/I18n';
import Websockets from './components/Websockets';
import './styles/global.css';
import './styles/theme.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/users" component={Users} />
        <Route path="/roles" component={Roles} />
        <Route path="/permissions" component={Permissions} />
        <Route path="/logs" component={Logs} />
        <Route path="/i18n" component={I18n} />
        <Route path="/websockets" component={Websockets} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
