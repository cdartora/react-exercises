import React from 'react';
import Card from './Card';
import './Content.css';

class Content extends React.Component {
  render() {

    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <div className='content-container'>
        {
          conteudos.map((conteudo) => {
            return (
              <Card content={conteudo} />
            );
          })
        }
      </div>
    )
  }
};

export default Content;