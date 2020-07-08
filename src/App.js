import React from "react";
import Header from "./components/header/header.component";
import { GlobalStyled, Container } from "./global.styles";
import Homepage from "./pages/home/home.component";
import Shoppage from "./pages/shop/shop.component";
import Orderedpage from "./pages/ordered/ordered.component";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument, firestore } from "./utils/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends React.Component {
  unSubcribeFromAuth;

  async componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          const currentUser = { id: snapshot.id, ...snapshot.data() };
          this.props.setCurrentUser(currentUser);
        });
        return;
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }
  render() {
    const { currentUser, loading } = this.props;
    return (
      <div>
        <Header />
        <GlobalStyled />
        <Container>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shoppage} />
            <Route path="/ordered" component={Orderedpage} />
            <Route
              path="/auth"
              render={(props) =>
                (currentUser && !loading) || loading ? (
                  <Redirect to="/" />
                ) : (
                  <AuthPage {...props} />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { currentUser, loading } }) => ({
  currentUser,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
