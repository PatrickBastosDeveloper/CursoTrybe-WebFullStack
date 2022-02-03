import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solution extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { solutionUrl } = params;

    return (
      <>
        <h1>
          Gabarito Individual de:
          {' '}
          {solutionUrl}
          {' '}
        </h1>

        <Link to="/solutions">Voltar</Link>
      </>
    );
  }
}

export default Solution;
