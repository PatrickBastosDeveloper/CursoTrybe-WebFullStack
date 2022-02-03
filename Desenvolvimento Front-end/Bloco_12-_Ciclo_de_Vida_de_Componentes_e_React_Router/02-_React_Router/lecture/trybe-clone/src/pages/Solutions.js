import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solutions extends Component {
  render() {
    const { arrayOfSolutions } = this.props;
    console.log(this.props);
    return (
      <>
        <h1>Gabarito</h1>
        <hr />
        <ul>
          {arrayOfSolutions.map((solution) => (
            <li key={ solution.url }>
              <Link to={ `/solutions/${solution.url}` }>
                {solution.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Solutions;
