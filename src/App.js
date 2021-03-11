import React, { Component } from 'react';
import SearchBar from './componets/SearchBar';
import ImageList from './componets/ImageList';
import './app.css';
const axios = require('axios');

class App extends Component {
  state = { images: [] };
  //event handler 
  onSearchSubmit = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: { Authorization: 'Client-ID 1eQWNTM0gc2kGXYhSMF9ASR43EqK1FZcxakmuLrPGwM' },
    });
    // const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=1eQWNTM0gc2kGXYhSMF9ASR43EqK1FZcxakmuLrPGwM&query=${term}`);

    console.log(response.data.results);
    this.setState({ images: response.data.results });

  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: { Authorization: 'Client-ID 1eQWNTM0gc2kGXYhSMF9ASR43EqK1FZcxakmuLrPGwM' },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3>Found {this.state.images.length} images</h3>
        <ImageList images = {this.state.images} />
      </div>

    )
  }
}

export default App;