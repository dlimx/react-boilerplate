import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './NavbarStyles.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={classNames('row', styles.navbar)}>
        <Link to="/">
          <h1 className={styles.title}>Quartermaster</h1>
        </Link>
        <Link className={styles.link} to="/dashboard">
          Dashboard
        </Link>
        <Link className={styles.link} to="/discover">
          Discover
        </Link>
        <Link className={styles.link} to="/organize">
          Organize
        </Link>
        <Link className={styles.link} to="/connections">
          Connections
        </Link>
      </nav>
    );
  }
}
