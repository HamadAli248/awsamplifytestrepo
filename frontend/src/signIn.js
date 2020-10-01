import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from './signInForm';
import { withOktaAuth } from '@okta/okta-react';


export default withOktaAuth(class SignIn extends Component {
  render() {
    if (this.props.authState.isPending) {
      return <div>Loading...</div>;
    }
    return this.props.authState.isAuthenticated ?
      <Redirect to={{ pathname: '/homepage' }}/> :
      <SignInForm issuer={this.props.issuer} />;
  }
});