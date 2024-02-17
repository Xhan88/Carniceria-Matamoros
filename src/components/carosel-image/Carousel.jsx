import React from 'react';

import './Carousel.css'; // You can import your custom styles if needed

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/charlie-solorzano-utTJUcvNXXo-unsplash.jpg?alt=media&token=61bbc301-8e99-418a-8e9e-78e983c410b3"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/eiliv-aceron-AQ_BdsvLgqA-unsplash.jpg?alt=media&token=2f3d4cd1-9aac-499c-b6f8-abf1084e2856"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/kyle-mackie-QH8SHBARVVk-unsplash.jpg?alt=media&token=c00820d6-2170-4364-adce-84792c101e66"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
