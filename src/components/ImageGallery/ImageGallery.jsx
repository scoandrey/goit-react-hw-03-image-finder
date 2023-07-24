import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import React from 'react';

class ImageGallery extends React.Component {
  state = {
    src: '',
  };

  setSrc = src => this.setState({ src });

  render() {
    const { images } = this.props;
    return (
      <>
        <div>{this.state.src}</div>
        <ul className="ImageGallery">
          {images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onClick={this.setSrc}
              />
            );
          })}
        </ul>
        {this.state.src && <Modal src={this.state.src} onClick={this.setSrc}/>}
      </>
    );
  }
}

export default ImageGallery;
