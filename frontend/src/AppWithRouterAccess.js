import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import SignIn from './signIn';
import Protected from './protected';
import HomePage from './homepage';

export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <Security issuer="https://${dev-450266.okta.com}/oauth2/default"
                clientId='{0oawbfz3ayn1zTSG54x6}'
                redirectUri={window.location.origin + '/implicit/callback'}
                onAuthRequired={this.onAuthRequired}
                pkce={true} >
        <Route path='/' exact={true} component={Home} />
        <Route path='/homepage' component={HomePage} />
        <SecureRoute path='/protected' component={Protected} />
        <Route path='/login' render={() => <SignIn issuer="https://${dev-450266.okta.com}/oauth2/default" />} />
        <Route path='/implicit/callback' component={LoginCallback} />
      </Security>
    );
  }
});