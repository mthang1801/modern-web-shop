import React  from "react"; 
import {CustomFormContainer, FormHeader, SignUpTitle, SignUpSubTitle,  FormGroups, FormActions, StyledLink, Option, FlashForm} from "./signup.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
import {FaGooglePlusG, FaFacebookF} from "react-icons/fa";
import {signInWithGoogle, signInWithFacebook, signUpAccount } from "../../utils/firebase";
class SignUp extends React.Component{
  state = {
    name : "", 
    email : "", 
    password : "",
    confirmPassword : ""
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name] : value})
  }

  handleSubmitSignUpForm = e => {
    e.preventDefault();
    const {name, email, password, confirmPassword} = this.state ; 
    if(password !== confirmPassword){
      alert("Password and confirm are not match");
      this.setState({password : "", confirmPassword : ""})
      return false ; 
    }
    signUpAccount(name,email,password);
  }

  render(){    
    const {name, email, password, confirmPassword} = this.state;    
    const {authPath} = this.props;
    return (
      <CustomFormContainer onSubmit={this.handleSubmitSignUpForm}>
        <FormHeader>
          <SignUpTitle>Sign Up</SignUpTitle>
          <SignUpSubTitle>Sign up your account via email and password.</SignUpSubTitle>
        </FormHeader>
        <FlashForm>
          <CustomButton type="button" icon={<FaGooglePlusG/>} size="small"  color="white" bgColor="#EA4335" variant="contained" onClick={signInWithGoogle} positionIcon="after">Sign In</CustomButton>     
          <CustomButton type="button" icon={<FaFacebookF/>} size="small"  color="white" bgColor="#4267B2" variant="contained" onClick={signInWithFacebook} positionIcon="after">Sign In</CustomButton>     
        </FlashForm>
        <FormGroups>
          <CustomInput type="text" name="name" value={name} label="Name" onChange={this.handleChange} required/>
          <CustomInput type="text" name="email" value={email} label="Email" onChange={this.handleChange} required/>
          <CustomInput type="password" name="password" value={password} label="Password" onChange={this.handleChange} required/>
          <CustomInput type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" onChange={this.handleChange} required/>
          <CustomButton variant="outlined" size="small" color="#0d47a1" bgColor="blue">Submit</CustomButton>
        </FormGroups>       
        <FormActions>          
          <Option><StyledLink to="/auth/signin">Signin account</StyledLink></Option>
          <Option>Forgot password ? <StyledLink to="/auth/forgot-password">Get Password Again.</StyledLink></Option>
        </FormActions>
      </CustomFormContainer>
    )
  }

}

export default withRouter(SignUp);