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
  };

  onSubmit = q => this.setState({ q, page: 1, images: [] });

  incPage = () => this.setState(prevState => ({ page: prevState.page + 1 }));

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.setState({ isLoading: true });
      try {
        this.setState({ images: await getImage(1, this.state.q) });
      } catch (error) {
      } finally {
        this.setState({ isLoading: false, page: 1 });
      }
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true });
      try {
        this.setState({
          images: [
            ...this.state.images,
            ...(await getImage(this.state.page, this.state.q)),
          ],
        });
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading ? (
          <Audio />
        ) : (
          <Button onClick={this.incPage} disabled={!this.state.images.length} />
        )}
      </div>
    );
  }
}

export default App;
