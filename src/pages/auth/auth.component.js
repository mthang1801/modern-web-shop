import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import ForgotPassword from "../../components/forgot-password/forgot-password.component";
import {Switch, Route} from "react-router-dom";
class AuthPage extends React.Component{
  render(){
    const {match} = this.props;    
    return(
      <Switch>
        <Route path={`${match.path}/signin`} render={(props) => <SignIn authPath={match.path} {...props} />}/>
        <Route path={`${match.path}/signup`} render={(props) => <SignUp authPath={match.path} {...props}/>}/>
        <Route path={`${match.path}/forgot-password`} render={(props) => <ForgotPassword authPath={match.path} {...props} />}/>
      </Switch>
    )
  }
}

export default AuthPage; 