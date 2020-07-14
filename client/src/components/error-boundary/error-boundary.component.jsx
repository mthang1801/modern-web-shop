import React, {Component} from "react" ;
import {ErrorImageOverlay, ErrorImageContainer, ErrorText} from "./error-boundary.styles";
import BrokenPage from "../../assets/Broken-Mug-big.png"
class ErrorBoundary extends Component{
  state = {
    hasError : false 
  }
  static getDerivedStateFromError(error){
    //process the error
    return {hasError : true }
  }
  componentDidCatch(error, info){
    console.log(error);
  }

  render(){
    return this.state.hasError ? <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={BrokenPage}/>
      <ErrorText>Sorry, this page is broken!</ErrorText>
    </ErrorImageOverlay> : this.props.children;
  }
}

export default ErrorBoundary;