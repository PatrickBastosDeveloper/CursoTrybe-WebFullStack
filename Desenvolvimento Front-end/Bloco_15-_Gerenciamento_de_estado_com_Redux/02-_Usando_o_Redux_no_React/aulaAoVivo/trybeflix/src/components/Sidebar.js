import React from 'react';
import { connect } from 'react-redux';
import selectMovie from '../redux/actions';

class Sidebar extends React.Component {
  render() {
    console.log(this.props);
    const { categories, addMovieToGlobalState } = this.props;
    return (
      <aside>
        {categories.map((category) => (
          <div key={ category.id }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  {movie.title}
                  {' '}
                  was released in
                  {' '}
                  {movie.released}
                  <button
                    type="button"
                    onClick={ () => {
                      addMovieToGlobalState(movie, category);
                    } }
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movie.categories,
});

const mapDispatchToProps = (dispatch) => ({
  addMovieToGlobalState: (selectedMovie, selectedCategory) => {
    dispatch(selectMovie(selectedMovie, selectedCategory));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
