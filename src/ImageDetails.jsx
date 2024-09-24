import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetails.css";
import { Skeleton } from "./Skeleton";

export function ImageDetails() {
  const { photoId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        );
        const responseData = await response.json();
        setPicture(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchPictures();
  }, [photoId]);
  return (
    <div>
      {isLoading ? (
        <Skeleton type="detail" />
      ) : (
        <div className="image-detail-container">
          {picture && (
            <>
              <img
                src={picture.url}
                alt={picture.title}
                // style={{ width: "80%", height: "auto" }}
              />
              <h2>{picture.title}</h2>
            </>
          )}
        </div>
      )}
    </div>
  );
}
