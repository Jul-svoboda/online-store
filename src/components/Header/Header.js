import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <div>
            <span className={styles.logo}>House Staff</span>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
