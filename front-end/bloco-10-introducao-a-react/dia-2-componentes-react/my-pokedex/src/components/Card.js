import React from 'react';
import PropTypes from 'prop-types';
//QUERO RECEBER INFORMACOES


class Card extends React.Component {
  render(){
      //PROPS => OBJETO

      const {itemInfo : { name, type, averageWeight, image}} = this.props;
      return(
        <article>
          <img src={image}/>
          <h2>{name}</h2>
          <h3>{type}</h3>
          <h3>{averageWeight}</h3>
        </article>
      )
  }
}

Card.propTypes = {
  itemInfo: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      averageWeight: PropTypes.string,
      type: PropTypes.string
  })
}

export default Card;