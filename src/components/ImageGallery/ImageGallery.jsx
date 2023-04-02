import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import LoadMoreButton from 'components/LoadMoreButton';
import { getSearchedPicturesApi } from 'services/PixabayAPI';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Title from 'components/Title';
import Section from 'components/Section';

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [querySaved, setQuerySaved] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalData, setModalData] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);

  //? ref for scrollIntoView
  // let imageItemRef = createRef(null);

  const changeImages = async () => {
    setIsLoading(true);
    setError(null);
    setIsLastPage(false);

    try {
      const data = await getSearchedPicturesApi(query, page);

      if (data.hits.length === 0) {
        throw new Error('OOPS... We found nothing... Sorry..');
      }

      const lastPage = Math.ceil(data.totalHits / 12);

      if (lastPage === page) {
        setIsLastPage(true);
      }

      page === 1 ? setImages(data.hits) : setImages([...images, ...data.hits]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (querySaved !== query) {
      setQuerySaved(query);
      setPage(1);
    }
  }, [querySaved, query]);

  useEffect(() => {
    if (query !== '' || page !== 1) {
      changeImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  //? scroll refs to pass to component
  // useEffect(() => {
  //   imageItemRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  //   }, [images, imageItemRef]);

  const changePage = () => {
    setPage(() => page + 1);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <Section>
      {isLoading && <Loader query={query} />}
      {error ? (
        <Title>{error}</Title>
      ) : (
        <>
          <Gallery images={images}>
            {images.map((image, i, arr) => (
              //? ref forwardRef??
              // <ImageGalleryItem key={image.id} ref={arr.length - 12 === i && i !== 0 ? imageItemRef : null} {...image} openModal={setModalData} />
              <ImageGalleryItem
                key={image.id}
                {...image}
                openModal={setModalData}
              />
            ))}
          </Gallery>
          {images.length > 0 && !isLastPage && (
            <LoadMoreButton onClick={changePage} />
          )}
          {modalData && <Modal {...modalData} closeModal={closeModal} />}
        </>
      )}
    </Section>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
