import React from "react";
import PropTypes from 'prop-types'

class Card extends React.Component {
  render() {

    const {module} = this.props

    function isThisLarge() {
      if(module.isLarge) {
        return 'large'
      }
    }

    return (
      <article className={isThisLarge()}>
        <img
          src={module.imageUrl}
          alt={module.name}
        />
        <h3>{module.name}</h3>
        <h2>{module.title}</h2>
      </article>
    );
  }
}


Card.propTypes = {
  module: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isLarge: PropTypes.bool.isRequired
  }).isRequired
}


export default Card;
