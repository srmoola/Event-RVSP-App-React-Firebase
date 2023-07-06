import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { useDispatch } from "react-redux";
import { setImageUrl } from "../features/image.ts";

type Photo = {
  query?: string;
};

type Url = {
  urls: { large: string; regular: string; raw: string; small: string };
};

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

const PhotoComp: React.FC<{ photo: Url }> = ({ photo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (photo && photo.urls) {
      dispatch(setImageUrl(photo.urls.small));
    }
  }, [dispatch, photo]);

  if (!photo || !photo.urls) {
    return null;
  }

  const { urls } = photo;

  return (
    <>
      <img className="img" src={urls.small} alt="Unsplash" />
    </>
  );
};

const UnsplashImage = ({ query = "" }: Photo) => {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: query, orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("Oops, something went wrong!");
      });
  }, [query]);

  if (data === null && query.length < 10) {
    return null;
  }

  if (data != null && query.length > 0) {
    const randomIndex = Math.floor(
      Math.random() * data.response.results.length
    );
    const randomPhoto = data.response.results[randomIndex];

    return (
      <div className="feed">
        <PhotoComp photo={randomPhoto} />
      </div>
    );
  }
};

export default UnsplashImage;
