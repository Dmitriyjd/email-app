import React from 'react';
import PropTypes from 'prop-types';

const NewMailButton = ({onClick, text}) => {
  return (
    <button onClick={onClick} className='new-mail-button'>
      <span className='new-mail-button__text'>
        {text}
      </span>
      <div className='new-mail-button__icon'>

      </div>
    </button>
  )
};

NewMailButton.defaultProps = {
  text: 'Compose new mail'
};

NewMailButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default NewMailButton;
