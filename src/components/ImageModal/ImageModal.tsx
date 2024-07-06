// import PropTypes from 'prop-types';
// import { number, string } from 'yup';
import { Image } from '../types';
import style from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// interface Image {
//   urls: {
//     regular: string;
//   };
//   alt_description: string;
//   description?: string;

//   user: {
//     name: string;
//   };
//   likes: number;
// }

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: Image | null;
}


const ImageModal:React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <button className={style.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      <img
        src={image?.urls?.regular}
        alt={image?.alt_description}
        className={style.image}
      />
      <div className={style.info}>
        <h2 className={style.descr}>{image?.description || 'Untitled'}</h2>
        <p className={style.text}>By: {image?.user?.name}</p>
        <p className={style.text}>Likes: {image?.likes}</p>
      </div>
    </Modal>
  );
};

// ImageModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onRequestClose: PropTypes.func.isRequired,
//   image: PropTypes.shape({
//     urls: PropTypes.shape({
//       regular: PropTypes.string.isRequired,
//     }).isRequired,
//     alt_description: PropTypes.string.isRequired,
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
export default ImageModal;
