import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const { conteudo, bloco, status } = this.props.content;

    return (
      <div className='card-container'>
        <p>{conteudo}</p>
        <p>{`Bloco: ${bloco}`}</p>
        <p>{`Status: ${status}`}</p>
      </div>
    )
  }
}

export default Card;