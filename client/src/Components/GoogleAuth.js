import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signIn, signOut } from '../actions/index';
class GoogleAuth extends Component {
    //state = { isSignedIn : null };
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '295830813026-8gb12r9daoksrqi37hldfncbdeqddpdn.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                // fetch after gapi completed 
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn : this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        //this.setState({isSignedIn : this.auth.isSignedIn.get() });
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        //console.log('onSignInClick')
        this.auth.signIn();
    }  
    onSignOutClick = () =>{
        //console.log('onSignOutClick')
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null ){
            return null;
        }else if(this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />Sign Out
                </button>
            )
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
                )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)