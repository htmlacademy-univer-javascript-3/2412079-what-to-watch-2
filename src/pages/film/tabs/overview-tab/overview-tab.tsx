import { useMemo } from 'react';
import { getRatingDescription } from '../../../../components/rating-description/rating-description';
import { Film } from '../../../../types/types';

export default function OverviewTab ({rating, description, scoresCount, director, starring}:Film) {
  const ratingDescription = useMemo(() => getRatingDescription(rating), [rating]);
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating} </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingDescription}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring?.join(', ')}</strong></p>
      </div>
    </>
  );
}