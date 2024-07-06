import { useState, useEffect, useCallback } from 'react';
import style from './App.module.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

const ACCESS_KEY = '5jOTyfTQTdUdZH7uunAK7km41pZDP7lSpdm5ob9thZQ';

type Image = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
};


const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Функція для отримання зображень з сервера за допомогою API Unsplash
  const fetchImages = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<{ results: Image[] }>(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            query,
            page,
            per_page: 12,
          },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      );
      setImages(prevImages => [...prevImages, ...response.data.results]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      } finally {
      setLoading(false);
    }
  }, [query, page]);

  // Ефект для виклику функції fetchImages при зміні query або page
  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page, fetchImages]);

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }

    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
      setError(null);
      setSelectedImage(null);
    }
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <div className={style.app}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      {!error && images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {!error && images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}

      <ImageModal
        isOpen={Boolean(selectedImage)}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;