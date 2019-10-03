import React, { Component } from "react";
import Header from "../Header";
import Gallery from "../Gallery";
import "./App.css";

class App extends Component {
  state = {
    comments: [],
    loading: false
  };

  async componentDidMount() {
    const result = await fetch(
      "https://www.reddit.com/r/reactjs.json?limit=100"
    ).then(res => res.json());
    this.setState({ comments: result.data.children });
  }

  render() {
    const { loading, comments } = this.state;
    return (
      <div className="container">
        <Header />
        <Gallery loading={loading} comments={comments} />
      </div>
    );
  }
}

export default App;
