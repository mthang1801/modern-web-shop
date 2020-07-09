import React from "react";
import Directory from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./home.styles";
class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}

export default HomePage;
