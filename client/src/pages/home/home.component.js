import React from "react";
import { default as Directory } from "../../components/directory-menu/directory-menu.container";
import { connect } from "react-redux";
import { HomePageContainer } from "./home.styles";
import { fetchDirectory } from "../../redux/directory/directory.actions";
class HomePage extends React.Component {
  componentDidMount() {
    const { fetchDirectory } = this.props;
    fetchDirectory();
  }
  render() {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDirectory: () => dispatch(fetchDirectory()),
});

export default connect(null, mapDispatchToProps)(HomePage);
