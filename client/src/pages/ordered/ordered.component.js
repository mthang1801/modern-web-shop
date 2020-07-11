import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrderedList } from "../../redux/ordered/ordered.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { OrderedListContainer } from "./ordered.styles";
import { default as OrderedListOverview } from "../../components/ordered-list-overview/ordered-list.container";
import { Redirect } from "react-router-dom";
const Ordered = ({ fetchOrderedList, currentUser, match }) => {
  useEffect(() => {
    fetchOrderedList();
  }, [fetchOrderedList]);
  if (!currentUser)
    return (
      <Redirect to={{ pathname: "auth/signin", state: { from: match.path } }} />
    );
  return (
    <OrderedListContainer>
      <OrderedListOverview />
    </OrderedListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  fetchOrderedList: () => dispatch(fetchOrderedList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Ordered);
