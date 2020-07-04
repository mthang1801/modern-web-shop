import React , {Component} from 'react'
import {SignInContainer} from "./signin.styles";
import CustomForm from "../../../components/custom-form/custom-form.component";
class SignInPage extends  Component{
  state = {
    isSignIn : true
  }
  render(){
    const {isSignIn} = this.state; 
    return (
      <SignInContainer>
        <CustomForm isSignIn={isSignIn}/>
      </SignInContainer>
    )
  }
 
}

export default SignInPage
