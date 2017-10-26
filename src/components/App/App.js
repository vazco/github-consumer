import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import AccessTokenInput from '../AccessTokenInput';
import Organization from '../Organization';
import Repository from '../Repository';

import {setAuthorizationHeader} from '../../imports/api/apollo';

const AccessTokenInputRedirection = props => <Redirect to={{pathname: '/', state: {from: props.location}}} />;
const PrivateRoute = ({hasAccessToken, component: Component, ...props}) =>
  <Route {...props} component={hasAccessToken ? Component : AccessTokenInputRedirection} />
;

export class App extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      hasAccessToken: false
    };

    this.onAccessToken = this.onAccessToken.bind(this);
  }

  componentWillMount() {
    const accessToken =localStorage.getItem('accessToken');
    if (accessToken) {
      setAuthorizationHeader(accessToken);
      this.setState({hasAccessToken: true});
    }
  }

  onAccessToken(accessToken) {
    setAuthorizationHeader(accessToken);
    localStorage.setItem('accessToken', accessToken);
    this.setState({hasAccessToken: true});
  }

  render() {
    const {state: {hasAccessToken}, onAccessToken} = this;
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute hasAccessToken={hasAccessToken} path="/:organization/:repository" component={Repository} />
          <PrivateRoute hasAccessToken={hasAccessToken} path="/:organization" component={Organization} />
          <Route
            path="/"
            component={hasAccessToken ?
              () => <Redirect to="/vazco" /> :
              () => <AccessTokenInput onAccessToken={onAccessToken}/>
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
