import React  from "react"; 
import {CustomFormContainer, FormHeader, ForgotPasswordTitle, ForgotPasswordSubTitle,  FormGroups, FormActions, StyledLink, Option} from "./forgot-password.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
class ForgotPassword extends React.Component{
  state = {
    email : "",    
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
          <ForgotPasswordTitle>Forgot account</ForgotPasswordTitle>
          <ForgotPasswordSubTitle>Get your account via Email.</ForgotPasswordSubTitle>
        </FormHeader>
        <FormGroups>
          <CustomInput type="text" name="email" value={email} label="Email" onChange={this.handleChange} required/>        
          <CustomButton variant="outlined" size="small" color="#0d47a1" bgColor="blue">Submit</CustomButton>
        </FormGroups>       
        <FormActions>          
          <Option><StyledLink to="/auth/signin">Back to Signin</StyledLink></Option>          
        </FormActions>
      </CustomFormContainer>
    )
  }

}

export default withRouter(ForgotPassword);