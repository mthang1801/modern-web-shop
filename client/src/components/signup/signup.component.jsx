import React  from "react"; 
import {CustomFormContainer, FormHeader, SignUpTitle, SignUpSubTitle,  FormGroups, FormActions, StyledLink, Option, FlashForm} from "./signup.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
import {FaGooglePlusG, FaFacebookF} from "react-icons/fa";
import {signInWithGoogle, signInWithFacebook, signUpAccount } from "../../utils/firebase";
const INITIAL_STATE = {       
  controls : {
    name : {
      type : "text", 
      name : "name",
      valid : false , 
      label : "Name",
      validation : {
        required : true, 
        minLength : 3, 
        maxLength : 50
      },
      value : "",
      touched : false ,
      validationErrors : ""
    },
    email : {
      type : "email", 
      name : "email",
      label : "Email", 
      valid : false , 
      validation : {
        required : true, 
        isEmail : true 
      },
      value : "",
      touched : false ,
      validationErrors : ""
    },
    password : {
      type : "password", 
      name : "password",
      valid : false , 
      label : "Password",
      validation : {
        required : true, 
        minLength : 6,
      },
      value : "",
      touched : false ,
      validationErrors : ""
    },
    confirmPassword : {
      type : "password", 
      name : "confirmPassword",
      label : "Confirm Password",
      valid : false , 
      validation : {
        required : true, 
        minLength : 6,
        match : true 
      },
      value : "",
      touched : false ,
      validationErrors : ""
    },
  },
  formIsValid : false 
}
class SignUp extends React.Component{
  state = {...INITIAL_STATE}
  
  checkValidity = (value, rules) => {
    console.log(rules);
    let isValid = true ; 
    let errorsMessage = []; 
    if(rules.required){
      isValid = value.trim().length && isValid ; 
      if(!isValid){
        errorsMessage.push("This field is required");
      }
    }
    if(rules.isEmail){
      const pattern =  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = pattern.test(value) && isValid ; 
      if(!isValid){
        errorsMessage.push("Email is invalid");
      }
    }
    if(rules.minLength){
      isValid = value.trim().length >= rules.minLength && isValid ;
      if(!isValid){
        errorsMessage.push(`Invalid, at least ${rules.minLength} characters`);
      }
    }
    if(rules.maxLength){
      isValid = value.trim().length <= rules.maxLength && isValid ;
      if(!isValid){
        errorsMessage.push(`Invalid, at most ${rules.maxLength} characters`);
      }
    }
    if(rules.match){
      isValid = value.trim() === this.state.controls.password.value && isValid ; 
      if(!isValid){
        errorsMessage.push("Password and confirm Password do not match");
      }
    }
    return errorsMessage;   
  }

  handleChange = (e,name) => {
    let updatedControls = {...this.state.controls};
    let updatedControlElement= {...updatedControls[name]};
    updatedControlElement.value = e.target.value ; 
    const checkValid = this.checkValidity( e.target.value, updatedControlElement.validation) ;
    updatedControlElement.valid = checkValid.length === 0  ; 
    updatedControlElement.touched = true ; 
    updatedControlElement.validationErrors = checkValid;  
    updatedControls[name] = updatedControlElement;   
    let {email, password, confirmPassword} = updatedControls;
    const formIsValid = email.valid && updatedControlElement.valid && password.valid && confirmPassword.valid ;
    this.setState({controls : updatedControls, formIsValid})
  }

  handleSubmitSignUpForm = e => {
    e.preventDefault();
    if(!this.state.formIsValid){
      this.setState({...INITIAL_STATE})
      return ;
    }
    const {name, email, password} = this.state.controls ;        
    signUpAccount(name.value,email.value,password.value);
  }

  render(){    
    const {formIsValid} = this.state; 
    let formInputArray = []  ; 
    Object.keys(this.state.controls).map( controlItem => {
      formInputArray.push(this.state.controls[controlItem]);
    })    
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
          {formInputArray.map(({label, name, touched, type, valid, validation, validationErrors, value}) => (
            <CustomInput
              key={name}
              type={type}
              name={name}
              value={value}
              label={label}
              onChange={e => this.handleChange(e,name)}
              require={validation.required}
              touched={touched}
              valid={valid}
              validationErrors={validationErrors}
            />
          ))}
          <CustomButton variant="outlined" size="small" color="#0d47a1" bgColor="blue" disabled={!formIsValid}>Submit</CustomButton>
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