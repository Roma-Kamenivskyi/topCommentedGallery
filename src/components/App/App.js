import React, { Component } from "react";
import Header from "../Header";
import Gallery from "../Gallery";
import Refresh from "../Refresh";
import "./App.css";

class App extends Component {
  state = {
    comments: [],
    loading: true,
    refreshStatus: false
  };

  onRefresh = () => {
    this.setState(({ refreshStatus }) => {
      return {
        refreshStatus: !refreshStatus
      };
    });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const result = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    ).then(res => res.json());
    console.log(result);
    this.setState({ comments: result.data.children, loading: false });
  }

  render() {
    const { loading, comments, refreshStatus } = this.state;

    return (
      <div className="container">
        <Header />
        <Refresh onRefresh={this.onRefresh} refreshStatus={refreshStatus} />
        <Gallery loading={loading} comments={comments} />
      </div>
    );
  }
}

export default App;
