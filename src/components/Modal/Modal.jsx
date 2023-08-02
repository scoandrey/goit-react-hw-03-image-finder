import React from 'react';

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown = e => {
    const { onClick } = this.props;
    if (e.key === 'Escape') {
      onClick('');
    }
  };

  render() {
    const { src, onClick } = this.props;

    return (
      <div
        className="Overlay"
        onClick={e => {
          e.target === e.currentTarget && onClick('');
        }}
        onKeyDown={this.onKeyDown}
      >
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
