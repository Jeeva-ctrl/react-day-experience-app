import React, { Component } from "react";
import Banner from "./Banner";
import { FetchFeed } from "../../actions/Feed";
import { connect } from "react-redux";
import CustomizedDialogs from "../Modal";
import Loader from "../Loader";
import { withRouter } from "react-router";
import Feeds from "../Feeds";
class Home extends Component {
  state = {
    showLoading: true,
  };
  componentDidMount() {
    this.props.FetchFeed(() => console.log("d"));
  }

  render() {
    let error = this.props.feedInfo.failure ? (
      <CustomizedDialogs
        title="Error"
        message={this.props.feedInfo.error}
        initialState={true}
      />
    ) : (
      ""
    );
    return (
      <div className="home_Container">
        <Banner />
        {error}
        {this.props.feedInfo.feed || this.props.feedInfo.failure ? (
          ""
        ) : (
          <Loader showLoading={true} />
        )}
        {this.props.feedInfo.feed ? (
          <Feeds feeds={this.props.feedInfo.feed} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  feedInfo: state.Feed,
});

export default withRouter(connect(mapStateToProps, { FetchFeed })(Home));
