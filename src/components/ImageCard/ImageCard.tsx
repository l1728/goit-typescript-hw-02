// import PropTypes from 'prop-types';
import { Image } from '../App/App.types';
import style from './ImageCard.module.css';

// export interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular?: string;
//   };
//   alt_description?: string;
//   description?: string;
//   user?: {
//     name: string;
//   };
//   likes?: number;
// }

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
