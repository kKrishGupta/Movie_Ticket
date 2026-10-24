import React from 'react';
import { releasesStyles } from '../assets/dummyStyles';
import movies from '../assets/dummyrdata';

const ReleasesPage = () => {
  return (
    <div className={releasesStyles.pageContainer}>
      <div className={releasesStyles.headerContainer}>
        <h1 className={releasesStyles.headerTitle}>RELEASES SOON</h1>
        <p className={releasesStyles.headerSubtitle}>
          Latest Movies • Now Showing
        </p>
      </div>
      <div className = {releasesStyles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.id} className={releasesStyles.movieCard}>
            <div className ={releasesStyles.imageContainer}>
              <img src ={movie.image} alt={movie.title} className={releasesStyles.movieImage}/>
            </div>
            <h2 className={releasesStyles.movieTitle}>{movie.title}</h2>
            <p className={releasesStyles.movieCategory}>{movie.category}</p>
          </div>
        ))}
        </div>
      </div>
  );
};

export default ReleasesPage;
