import React, { Component } from 'react';

import Header from '../Header';
import Gallery from '../Gallery';
import Refresh from '../Refresh';

import fetchData from '../../services/fetchData';

import './App.css';

class App extends Component {
  state = {
    comments: [],
    loading: false,
    refreshStatus: false,
    minComments: 0,
    limit: 100
  };

  componentDidMount() {
    this.updateData();
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
      this.interval = setInterval(this.updateData, 3000);
    }
  };

  updateData = async () => {
    this.setState({ loading: true });

    fetchData(`/reactjs.json?limit=${this.state.limit}`)
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
            value={minComments}
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
