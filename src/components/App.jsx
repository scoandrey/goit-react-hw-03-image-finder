import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Audio } from 'react-loader-spinner';
import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends React.Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
    q: '',
  };

  getData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get(
        `/?q=${this.state.q}&page=${this.state.page}&key=38276773-cc10c978d0e26ae655aac3ef3&image_type=photo&orientation=horizontal&per_page=12`
      );
      const images = [...this.state.images, ...data.hits];
      this.setState(() => {
        return {
          images,
          page: this.state.page + 1,
        };
      });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setQ = q => this.setState({ q, page: 1, images: [] });



  async componentDidMount() {
    await this.getData();
  }

  render() {
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.getData}
          setQ={this.setQ}
        />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading ? <Audio /> : <Button onClick={this.getData} />}
      </div>
    );
  }
}

export default App;
