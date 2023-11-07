import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Film, FilmCard } from "../../components/types";
import MovieList from "../../components/movie-list/movie-list";

type MoviePageProps = FilmCard & {
    filmInfo: FilmCard,
    film: Film,
    filmProps: FilmCard[]
}

function MoviePage({film, filmInfo, filmProps}:MoviePageProps): JSX.Element {
    return (
        <><section className="film-card film-card--full">
            <div className="film-card__hero">
                <div className="film-card__bg">
                    <img src={filmInfo.posterImage} alt={filmInfo.name} />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <Header/>

                <div className="film-card__wrap">
                    <div className="film-card__desc">
                        <h2 className="film-card__title">{filmInfo.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{filmInfo.genre}</span>
                            <span className="film-card__year">{filmInfo.releaseDate}</span>
                        </p>

                        <div className="film-card__buttons">
                            <button className="btn btn--play film-card__button" type="button">
                                <svg viewBox="0 0 19 19" width="19" height="19">
                                    <use xlink: href="#play-s"></use>
                                </svg>
                                <span>Play</span>
                            </button>
                            <button className="btn btn--list film-card__button" type="button">
                                <svg viewBox="0 0 19 20" width="19" height="20">
                                    <use xlink: href="#add"></use>
                                </svg>
                                <span>My list</span>
                                <span className="film-card__count">9</span>
                            </button>
                            <a href="add-review.html" className="btn film-card__button">Add review</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
                <div className="film-card__info">
                    <div className="film-card__poster film-card__poster--big">
                        <img src={filmInfo.posterImage} alt={filmInfo.name} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <nav className="film-nav film-card__nav">
                            <ul className="film-nav__list">
                                <li className="film-nav__item film-nav__item--active">
                                    <a href="#" className="film-nav__link">Overview</a>
                                </li>
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Details</a>
                                </li>
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="film-rating">
                            <div className="film-rating__score">{film.rating} </div>
                            <p className="film-rating__meta">
                                <span className="film-rating__level">Very good</span>
                                <span className="film-rating__count">{film.scoresCount}</span>
                            </p>
                        </div>

                        <div className="film-card__text">
                            <p>{film.description}</p>

                            <p className="film-card__director"><strong>Director: {film.director}</strong></p>

                            <p className="film-card__starring"><strong>Starring: {film.starring}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section><div className="page-content">
                <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>

                    <MovieList filmProps={filmProps}/>

                </section>

                <Footer/>
                
            </div></>
    )
};

export default MoviePage;