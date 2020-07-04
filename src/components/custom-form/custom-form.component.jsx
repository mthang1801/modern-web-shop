import React  from "react"; 
import {CustomFormContainer, FormHeader, SignInTitle, SignInSubTitle,  FormGroups, FormActions, StyledLink, Option} from "./custom-form.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
class CustomForm extends React.Component{
  state = {
    email : "", 
    password : ""
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name] : value})
  }

  render(){
    const {email, password} = this.state; 
    return (
      <CustomFormContainer>
        <FormHeader>
          <SignInTitle>Sign in</SignInTitle>
          <SignInSubTitle>Sign in your account via email and password.</SignInSubTitle>
        </FormHeader>
        <FormGroups>
          <CustomInput type="text" name="email" value={email} label="Email" onChange={this.handleChange} required/>
          <CustomInput type="password" name="password" value={password} label="Password" onChange={this.handleChange} required/>
          <CustomButton size="medium" color="blue">Sign In</CustomButton>
        </FormGroups>       
        <FormActions>          
          <Option>Don't have account ? <StyledLink to="/sign-up">Signup account</StyledLink></Option>
          <Option>Forgot password ? <StyledLink to="/forgot-password">Get Password Again.</StyledLink></Option>
        </FormActions>
      </CustomFormContainer>
    )
  }

}

export default CustomForm;