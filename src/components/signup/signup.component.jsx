import React  from "react"; 
import {CustomFormContainer, FormHeader, SignUpTitle, SignUpSubTitle,  FormGroups, FormActions, StyledLink, Option} from "./signup.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
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

  render(){    
    const {name, email, password, confirmPassword} = this.state;    
    const {authPath} = this.props;
    return (
      <CustomFormContainer>
        <FormHeader>
          <SignUpTitle>Sign Up</SignUpTitle>
          <SignUpSubTitle>Sign up your account via email and password.</SignUpSubTitle>
        </FormHeader>
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