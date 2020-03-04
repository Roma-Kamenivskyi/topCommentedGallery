import React, { Component } from 'react';

import Header from '../Header';
import Gallery from '../Gallery';
import Refresh from '../Refresh';

import './App.css';

class App extends Component {
  state = {
    comments: [],
    loading: false,
    refreshStatus: false,
    minComments: 0
  };

  componentDidMount() {
    this.fetchData();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRefresh = () => {
    const { refreshStatus } = this.state;

    this.setState(state => ({
      refreshStatus: !state.refreshStatus
    }));

    if (refreshStatus) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(this.fetchData, 3000);
    }
  };

  fetchData = async () => {
    this.setState({ loading: true });

    await fetch('https://www.reddit.com/r/reactjs.json?limit=100')
      .then(response => response.json())
      .then(({ data }) =>
        this.setState({ comments: data.children, loading: false })
      )
      .catch(err => console.log(err));
  };

  onChangeFilter = ({ target }) =>
    this.setState({ minComments: Number(target.value) });

  render() {
    const { loading, comments, refreshStatus, minComments } = this.state;

    return (
      <div className='container'>
        <div className='jumbotron'>
          <Header />
          <div>Current filter: {minComments}</div>
          <input
            type='range'
            min={0}
            defaultValue={minComments}
            max={1000}
            style={{ width: '100%' }}
            onChange={this.onChangeFilter}
          />
          <Refresh refreshStatus={refreshStatus} onRefresh={this.onRefresh} />
        </div>

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
