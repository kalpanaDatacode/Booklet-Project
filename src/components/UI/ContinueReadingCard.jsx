import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ContinueReadingCard = ({ baseImage, title, progress }) => {
  return (
    <div className="continue-reading-card d-flex flex-column align-items-center h-100">
      <h5 className="mb-3 text-center">Continue Reading</h5>
      <div className="image-wrapper position-relative d-inline-block">
        <img className="card-image img-fluid rounded" src={baseImage} alt={title} />
        <div className="progress-wrapper position-absolute top-50 start-50 translate-middle">
          <CircularProgressbar
            value={Math.round(progress)}
            text={`${Math.round(progress)}%`}
            styles={buildStyles({
              textSize: "16px",
              pathColor: "#007bff",
              textColor: "#007bff",
              trailColor: "#d6d6d6",
            })}
          />
        </div>

      </div>
      <h6 className="mt-2 text-center">{title}</h6>
    </div>
  );
};

export default ContinueReadingCard;
