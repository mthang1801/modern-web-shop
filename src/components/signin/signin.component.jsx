import React  from "react"; 
import {CustomFormContainer, FormHeader, SignInTitle, SignInSubTitle,  FormGroups, FormActions, StyledLink, Option} from "./signin.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
class SignIn extends React.Component{
  state = {
    email : "", 
    password : "",
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name] : value})
  }

  render(){    
    const {email, password} = this.state;   
    const {authPath}  = this.props;
    return (
      <CustomFormContainer>
        <FormHeader>
          <SignInTitle>Sign In</SignInTitle>
          <SignInSubTitle>Sign in your account via email and password.</SignInSubTitle>
        </FormHeader>
        <FormGroups>
          <CustomInput type="text" name="email" value={email} label="Email" onChange={this.handleChange} required/>
          <CustomInput type="password" name="password" value={password} label="Password" onChange={this.handleChange} required/>
          <CustomButton variant="outlined" size="small" color="#0d47a1" bgColor="blue">Sign In</CustomButton>
        </FormGroups>       
        <FormActions>          
          <Option>Don't have account ? <StyledLink to={`${authPath}/signup`}>Signup account</StyledLink></Option>
          <Option>Forgot password ? <StyledLink to={`${authPath}/forgot-password`}>Get Password Again.</StyledLink></Option>
        </FormActions>
      </CustomFormContainer>
    )
  }

}

export default withRouter(SignIn);