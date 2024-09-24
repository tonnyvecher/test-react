import "./Skeleton.css";

export function Skeleton({ type = "gallery" }) {
  if (type === "gallery") {
    return (
      <div className="skeleton-gallery">
        {Array(12)
          .fill()
          .map((_, index) => (
            <div key={index} className="skeleton-gallery__skeleton-item">
              <div className="skeleton-gallery__skeleton-img"></div>
              <div className="skeleton-gallery__skeleton-title"></div>
            </div>
          ))}
      </div>
    );
  } else if (type === "detail") {
    return (
      <div className="skeleton-detail">
        <div className="skeleton-detail__skeleton-img-detail"></div>
        <div className="skeleton-detail__skeleton-title-detail"></div>
      </div>
    );
  }
}
