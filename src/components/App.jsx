import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Audio } from 'react-loader-spinner';
import React from 'react';
import { getImage } from './api';

class App extends React.Component {
  state = {
    isLoading: false,
    images: [],
    page: 1,
    q: '',
    showLoadMoreButton: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      try {
        const data = await getImage(this.state.page, this.state.q);

        this.state.page < Math.ceil(data.totalHits / 12)
          ? this.setState({ showLoadMoreButton: true })
          : this.setState({ showLoadMoreButton: false });

        this.setState({ images: [...this.state.images, ...data.hits] });
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = q => this.setState({ q, page: 1, images: [] });

  incPage = () => this.setState(prevState => ({ page: prevState.page + 1 }));

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading ? (
          <Audio />
        ) : this.state.showLoadMoreButton ? (
          <Button onClick={this.incPage} />
        ) : null}
      </div>
    );
  }
}

export default App;
