import React, { Component } from "react";
import Header from "../Header";
import Gallery from "../Gallery";
import "./App.css";

class App extends Component {
  state = {
    comments: [],
    loading: true
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
