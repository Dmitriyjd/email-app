import React, {PureComponent} from 'react';
import Category from './partials/Category';
import NewMailButton from './partials/NewMailButton';
import './styles.scss';

class LeftMenu extends PureComponent {
  render() {
    return (
      <div className='left-menu'>
        <div className='left-menu__new-mail-button'>
          <NewMailButton/>
        </div>
        <div className='left-menu__divider'/>
        <div className='left-menu__categories'>
          <Category text='Inbox' number={8} />
          <Category text='Starred' />
          <Category text='Sent Emails' />
          <Category text='Drafts' number={3} />
          <Category text='Trash' number={48} />
        </div>
        <div className='left-menu__divider'/>
        <div className='left-menu__add-more'>
          <Category text='Add More' />
        </div>
        <div className='left-menu__divider'/>
        <div className='left-menu__marked-categories'>
          <span className='marked-categories__title'>Marked</span>
          <div className='marked-categories__categories-list'>
            <Category text='Personal' />
            <Category text='Work' />
            <Category text='Social' />
            <Category text='Family' />
          </div>
        </div>
      </div>
    )
  }
}

export default LeftMenu;
