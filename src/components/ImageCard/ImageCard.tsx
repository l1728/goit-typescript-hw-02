// import PropTypes from 'prop-types';
import style from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
  }

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
  }

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={style.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={style.image}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

// ImageCard.propTypes = {
//   image: PropTypes.shape({
//     urls: PropTypes.shape({
//       small: PropTypes.string.isRequired,
//     }).isRequired,
//     alt_description: PropTypes.string,
//   }).isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };
export default ImageCard;
