import React, { Component } from "react";
import Header from "../Header";
import Gallery from "../Gallery";
// import Filters from "../Filters";
import "./App.css";

class App extends Component {
  state = {
    comments: [],
    loading: false,
    refreshStatus: false,
    minComments: 0
  };

  onRefresh = () => {
    const { refreshStatus } = this.state;
    this.setState(
      state => {
        return {
          refreshStatus: !state.refreshStatus
        };
      },
      () => {
        if (refreshStatus) {
          clearInterval(this.interval);
        } else {
          this.interval = setInterval(this.fetchData, 3000);
        }
      }
    );
  };

  fetchData = async () => {
    this.setState({ loading: true });
    const result = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    )
      .then(res => res.json())
      .catch(err => console.log(err));
    this.setState({ comments: result.data.children, loading: false });
  };

  onChangeFilter = event => {
    this.setState({ minComments: Number(event.target.value) });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { loading, comments, refreshStatus, minComments } = this.state;

    return (
      <div className="container">
        <Header />
        <div>Current filter: {minComments}</div>
        <input
          type="range"
          min={0}
          defaultValue={minComments}
          max={500}
          style={{ width: "400px" }}
          onChange={this.onChangeFilter}
        />
        <button onClick={this.onRefresh} type="button">
          {refreshStatus ? "Stop" : "Start"} auto refresh
        </button>
        <Gallery
          loading={loading}
          comments={comments}
          minComments={minComments}
        />
      </div>
    );
  }
}

export default App;
