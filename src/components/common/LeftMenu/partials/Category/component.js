import React from 'react';
import PropTypes from 'prop-types';
import MailIcon from '../../../Icons/Mail';
import './styles.scss';

const Category = ({text, number, icon}) => (
  <div className='menu-item'>
    <div className='menu-item__content-wrapper'>
      <div className='menu-item__icon'>
        {
          icon === 'mail' &&
            <MailIcon />
        }
      </div>
      <span className='menu-item__name'>
        {text}
      </span>
    </div>
    {
      number > 0 &&
        <div className='menu-item__number-wrapper'>
          <span className='menu-item__number'>
            {number}
          </span>
        </div>
    }
  </div>
);

Category.defaultProps = {
  text: 'Category',
  number: 0,
  selected: false,
  icon: 'mail'
};

Category.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number,
  selected: PropTypes.bool,
};

export default Category;
