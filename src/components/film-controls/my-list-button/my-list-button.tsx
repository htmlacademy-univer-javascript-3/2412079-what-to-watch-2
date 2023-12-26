import { AuthorizationStatus } from '../../../const/const.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setIsFavorite, loadFavouriteFilms } from '../../../store/api-actions.ts';

type MyListButtonProps = {
  listLength?: number;
}

export default function MyListButton({ listLength }: MyListButtonProps) {
  const { selectedFilm } = useAppSelector((state) => state.film);
  const { authorizationStatus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function handleStatusToggle() {
    dispatch(setIsFavorite({ filmId: selectedFilm?.id ?? '', status: Number(!selectedFilm?.isFavorite) }))
      .unwrap()
      .then(() => dispatch(loadFavouriteFilms()));
  }

  return authorizationStatus === AuthorizationStatus.Authorized ? (
    <button className="btn btn--list film-card__button" type="button" onClick={handleStatusToggle}>
      {selectedFilm?.isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{Number(listLength)}</span>
    </button>
  ) : null;
}