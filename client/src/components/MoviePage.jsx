import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { moviesPageStyles } from "../assets/dummyStyles";
import MOVIES from "../assets/dummymdata";

const categories = [
  { id: 'all', name: 'All Movies' },
  { id: 'action', name: 'Action' },
  { id: 'horror', name: 'Horror' },
  { id: 'comedy', name: 'Comedy' },
  { id: 'adventure', name: 'Adventure' },
];

// Helper to shuffle an array (Fisher-Yates)
const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Arrange movie data in cross-random order so categories are mixed randomly
// across columns rather than forming single-category vertical columns
const buildCrossRandomMovies = (rawMovies) => {
  const action = shuffle(rawMovies.filter((m) => m.category?.toLowerCase() === 'action'));
  const horror = shuffle(rawMovies.filter((m) => m.category?.toLowerCase() === 'horror'));
  const comedy = shuffle(rawMovies.filter((m) => m.category?.toLowerCase() === 'comedy'));
  const adventure = shuffle(rawMovies.filter((m) => m.category?.toLowerCase() === 'adventure'));

  const maxLen = Math.max(action.length, horror.length, comedy.length, adventure.length);
  const result = [];

  for (let i = 0; i < maxLen; i++) {
    const round = [];
    if (action[i]) round.push(action[i]);
    if (horror[i]) round.push(horror[i]);
    if (comedy[i]) round.push(comedy[i]);
    if (adventure[i]) round.push(adventure[i]);

    // Shuffle each round so categories cross randomly and columns don't align to one category
    const crossedRound = shuffle(round);

    // Prevent immediate category repetition across row boundaries
    if (
      result.length > 0 &&
      crossedRound.length > 1 &&
      crossedRound[0].category === result[result.length - 1].category
    ) {
      [crossedRound[0], crossedRound[1]] = [crossedRound[1], crossedRound[0]];
    }

    result.push(...crossedRound);
  }

  return result;
};

const MoviePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Maintain cross-randomized list stably during interactions
  const movies = useMemo(() => buildCrossRandomMovies(MOVIES || []), []);

  const filteredMovies =
    activeCategory === 'all'
      ? movies
      : movies.filter(
          (movie) => movie.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const COLLAPSE_COUNT = 12;

  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const visibleMOVIES = showAll ? filteredMovies : filteredMovies.slice(0, COLLAPSE_COUNT);

  return (
    <div className={moviesPageStyles.container}>
      {/* Category Filter Bar */}
      <section className={moviesPageStyles.categorySection}>
        <div className={moviesPageStyles.categoriesContainer}>
          <div className={moviesPageStyles.categoriesFlex}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${moviesPageStyles.categoryButton.base} ${
                  activeCategory === category.id
                    ? moviesPageStyles.categoryButton.active
                    : moviesPageStyles.categoryButton.inactive
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Grid Section */}
      <section className={moviesPageStyles.moviesSection}>
        <div className={moviesPageStyles.moviesContainer}>
          <div className={moviesPageStyles.moviesGrid}>
            {visibleMOVIES.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                className={moviesPageStyles.movieCard}
              >
                <div className={moviesPageStyles.movieImageContainer}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className={moviesPageStyles.movieImage}
                    loading="lazy"
                  />
                </div>
                <div className={moviesPageStyles.movieInfo}>
                  <h3 className={moviesPageStyles.movieTitle}>{movie.title}</h3>
                  <div className={moviesPageStyles.movieCategory}>
                    <span className={moviesPageStyles.movieCategoryText}>
                      {movie.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className={moviesPageStyles.emptyState}>
              No movies found in this category.
            </div>
          )}

          {filteredMovies.length > COLLAPSE_COUNT && (
            <div className={moviesPageStyles.showMoreContainer}>
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className={moviesPageStyles.showMoreButton}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MoviePage;