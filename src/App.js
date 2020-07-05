import React from "react";
import Header from "./components/header/header.component";
import { GlobalStyled, Container } from "./global.styles";
import Homepage from "./pages/home/home.component";
import Shoppage from "./pages/shop/shop.component";
import Orderedpage from "./pages/ordered/ordered.component";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <GlobalStyled />
        <Container>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shoppage} />
            <Route path="/ordered" component={Orderedpage} />
            <Route path="/auth" component={AuthPage} />
            <Route exact path="/checkout" component={CheckoutPage}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
