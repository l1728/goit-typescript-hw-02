// import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../App/App.types';

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

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map(image => (
        <li key={image.id} className={style.item}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };

export default ImageGallery;
