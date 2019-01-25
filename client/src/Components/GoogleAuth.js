import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                cleintId:'295830813026-67g2pogr8nv075eeohj4cll5ef0t28k5.apps.googleusercontent.com',
                scope:'email'
            });
        });
    }
    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;