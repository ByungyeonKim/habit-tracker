import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className='header'>
        <i className='header-logo fas fa-leaf'></i>
        <span>습관 만들기</span>
        <span className='header-count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
