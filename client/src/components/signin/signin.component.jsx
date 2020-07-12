import React  from "react"; 
import {CustomFormContainer, FormHeader, SignInTitle, SignInSubTitle,  FormGroups, FormActions, StyledLink, Option, FlashForm , ErrorMessage} from "./signin.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from "react-router-dom";
import {FaGooglePlusG, FaFacebookF} from "react-icons/fa"
import {signInWithGoogle, auth, signInWithFacebook} from "../../utils/firebase";
class SignIn extends React.Component{
  state = {
    email : "", 
    password : "",
    error : null
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name] : value})
  }

  onSubmitSigninForm = async e => {
    e.preventDefault();
    const {email, password} = this.state ; 
    this.setState({error : null })
    try {
      await auth.signInWithEmailAndPassword(email, password);      
    } catch (error) {
      this.setState({error : error.message})
    }
  }

  render(){    
    const {email, password, error} = this.state;   
    const {authPath}  = this.props;   
    return (
      <CustomFormContainer onSubmit={this.onSubmitSigninForm}>
        <FormHeader>
          <SignInTitle>Sign In</SignInTitle>
          <SignInSubTitle>Sign in your account via email and password.</SignInSubTitle>
        </FormHeader>
        {error &&  <ErrorMessage>{error}</ErrorMessage>}
        <FlashForm>
          <CustomButton type="button" icon={<FaGooglePlusG/>} size="small"  color="white" bgColor="#EA4335" variant="contained" onClick={signInWithGoogle} positionIcon="after">Sign In</CustomButton>     
          <CustomButton type="button" icon={<FaFacebookF/>} size="small"  color="white" bgColor="#4267B2" variant="contained" onClick={signInWithFacebook} positionIcon="after">Sign In</CustomButton>     
        </FlashForm>
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