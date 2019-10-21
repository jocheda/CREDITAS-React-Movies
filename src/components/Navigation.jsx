import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Navigation(props) {
  const path = props.location.pathname;
  const [title = '', subtitle = ''] = path.split('/').filter(item => !!item);

  return (
    <div className='navigation'>
      <ul className="goBack">
        <li>{title}</li>
        <li>{subtitle}</li>
      </ul>
      <div className='category'>
      <NavLink key='3' to='/category/top_rated' activeClassName='active'>
        <button>Top rated</button>
      </NavLink>
      <NavLink key='2' to='/category/upcoming' activeClassName='active'>
        <button>Upcoming</button>
      </NavLink>
      <NavLink key='1' to='/category/popular' activeClassName='active'>
        <button>Popular</button>
      </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Navigation);