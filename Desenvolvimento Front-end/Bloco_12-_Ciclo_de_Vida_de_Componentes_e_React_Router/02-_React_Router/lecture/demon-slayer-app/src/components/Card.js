import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { 
      infos: { name, image, description, skills },
      onClick,
    } = this.props;

    return (
      <div className='card' onClick={onClick} >
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
        <div>
          <h3>Habilidades</h3>
          <ul>
            {
              skills.map((skill) => (
                <li key={skill} >{skill}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Card;
