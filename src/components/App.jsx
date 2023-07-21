import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Audio } from 'react-loader-spinner';
import React from 'react';
import axios from 'axios';
// import Modal from './Modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends React.Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
  };

  incPage() {
    this.setState(prev => ({
      page: +prev.page + 1,
    }));
  }

  getData = async () => {
    try {
      const { data } = await axios.get(
        `/?q=cat&page=${this.state.page}&key=38276773-cc10c978d0e26ae655aac3ef3&image_type=photo&orientation=horizontal&per_page=12`
      );

      const images = [...this.state.images, ...data.hits];

      this.setState(() => {
        console.log(this.state.page);
        return {
          images,
          isLoading: false,
          page: this.incPage(),
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.page, nextState);
    if (this.state.page === nextState.page) {
      return false;
    }

    return true;
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Searchbar />
        {this.state.isLoading ? (
          <Audio />
        ) : (
          <ImageGallery images={this.state.images} />
        )}
        {/* <Modal /> */}
        <Button />
      </div>
    );
  }
}

export default App;
