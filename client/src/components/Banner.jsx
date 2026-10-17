import React from 'react'
import { Info, Star, Tickets } from 'lucide-react'
import { bannerStyles } from '../assets/dummyStyles'
import Video from '../assets/MovieBannerVideo.mp4'

const Banner = () => {
  return (
    <div className={bannerStyles.container}>
      <div className={bannerStyles.videoContainer}>
        <video className={bannerStyles.video} autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
          {/* fallback content */}
          Your browser does not support the video tag.
        </video>

        <div className={bannerStyles.overlay}></div>
      </div>
      {/* {Content} */}
      <div className={bannerStyles.content}>
        <div className={bannerStyles.contentInner}>
          <h1
            className={bannerStyles.title}
            style={{ color: 'white', fontFamily: "'Dancing Script' ,cursive" }}
          >
            Welcome to CineVerse
          </h1>
          <p className={bannerStyles.description}>
            An epic adventure awaits you in the world of movies. Explore, book, and enjoy your
            favorite films with ease.
          </p>

          <div className={bannerStyles.ratingGenreContainer}>
            <div className={bannerStyles.ratingContainer}>
              <div className={bannerStyles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={bannerStyles.star}
                    aria-label={`Rating: ${star} stars`}
                  />
                ))}
              </div>
              <span className={bannerStyles.ratingText}>4.5/5</span>
            </div>
            <div className={bannerStyles.genreContainer}>
              <span className={bannerStyles.genre}>Action</span>
              <span className={bannerStyles.genrePoint}>•</span>
              <span className={bannerStyles.genre}>Adventure</span>
              <span className={bannerStyles.genrePoint}>•</span>
              <span className={bannerStyles.genre}>Sci-Fi</span>
            </div>
          </div>

          <div className={bannerStyles.buttonsContainer}>
                <a href="/movies" className={bannerStyles.bookButton}>
                  <Tickets className={bannerStyles.icon} fill="white" />
                  Book Movies
                </a>
                <a href="/contact" className={bannerStyles.infoButton}>
                  <Info className={bannerStyles.icon} fill="white" />
                  More Info
                </a>
          </div>
        </div>
      </div>
      <style>{bannerStyles.customCSS}</style>
    </div>
  )
}

export default Banner
