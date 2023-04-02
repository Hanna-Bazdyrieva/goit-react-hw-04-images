import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, largeImageURL, openModal}) => {
  return (
    <GalleryItem onClick={() => openModal({ url: largeImageURL, id })}>
      <ItemImage src={webformatURL} alt={id} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
