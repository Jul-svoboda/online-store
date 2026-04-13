import React, { Component } from 'react'
import styles from './Footer.module.css'

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        All rights reserved &copy; 2026
      </footer>
    )
  }
}

export default Footer