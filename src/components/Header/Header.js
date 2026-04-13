import React from 'react'
import styles from './Header.module.css'
import { RiShoppingCartLine } from "react-icons/ri";
import Cart from '../Cart/Cart';


export default function Header() {
    let [cartOpen, setCartOpen] = React.useState(false);
  return (
    <header>
        <div className={styles.header}>
            <span className={styles.logo}>House Staff</span>
            <div className={styles.header__actions}>
                <RiShoppingCartLine onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`${styles.header__cart} ${cartOpen ? styles["header__cart--active"] : ''}`} />
                <ul className={styles.header__nav}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            {cartOpen && (
                < Cart />
            )}
        </div>
        <div className={styles.presentation}>
            <h1 className={styles.presentation__title}>The Most Convenient Household Goods</h1>
            <h2 className={styles.presentation__subtitle}>Find everything you need for your home in one place</h2>
        </div>
    </header>
  )
}
