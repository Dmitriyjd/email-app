import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Category = ({name, number}) => (
  <div className='menu-item'>
    <div className='menu-item__icon'>

    </div>
    <span className='menu-item__name'>
      {name}
    </span>
    <div className='menu-item__number-wrapper'>
      <span className='menu-item__number'>
        {number}
      </span>
    </div>
  </div>
);

Category.defaultProps = {
  name: 'Category',
  number: 0,
  selected: false,
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  selected: PropTypes.bool,
};

export default Category;
