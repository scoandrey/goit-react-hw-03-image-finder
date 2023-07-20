import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Audio } from 'react-loader-spinner';
// import Modal from './Modal/Modal';
export const App = () => {
  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />
      <Audio />
      {/* <Modal /> */}
      <Button />
    </div>
  );
};
