import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Category = ({name, number}) => (
  <div className='category'>
    <div className='category__icon'>

    </div>
    <span className='category__name'>
      {name}
    </span>
    <span className='category__number'>
      {number}
    </span>
  </div>
);

Category.defaultProps = {
    name: 'Category',
    number: 0,
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number,
};
