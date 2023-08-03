import { Audio } from 'react-loader-spinner';

const Button = ({ onClick, loading }) => {
  return loading ? (
    <Audio />
  ) : (
    <button className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
