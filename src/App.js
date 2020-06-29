import React from "react";
import Header from "./components/header/header.component";
import { GlobalStyled, Container } from "./global.styles";
import Homepage from "./pages/home/home.component";
import Shoppage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyled />
        <Container>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shoppage}></Route>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
