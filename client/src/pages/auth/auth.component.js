import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import ForgotPassword from "../../components/forgot-password/forgot-password.component";
import ForgotPasswordDone from "../../components/forgot-password-done/forgot-password-done.component";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";

class AuthPage extends React.Component {
  render() {
    const { match, location, currentUser } = this.props;
    if (currentUser) {
      if (location.state) return <Redirect to={location.state.from} />;
      return <Redirect to="/" />;
    }
    return (
      <Switch>
        <Route
          path={`${match.path}/signin`}
          render={(props) => <SignIn authPath={match.path} {...props} />}
        />
        <Route
          path={`${match.path}/signup`}
          render={(props) => <SignUp authPath={match.path} {...props} />}
        />
        <Route
          path={`${match.path}/forgot-password`}
          exact
          render={(props) => (
            <ForgotPassword authPath={match.path} {...props} />
          )}
        />
        <Route
          path={`${match.path}/forgot-password`}
          component={ForgotPasswordDone}
        />
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AuthPage);
