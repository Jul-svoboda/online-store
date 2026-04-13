import React, { Component } from 'react'
import styles from './Cart.module.css'
import Orders from '../Orders/Orders'


export class Cart extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <Orders orders={this.props.orders} onDeleteOrder={this.props.onDeleteOrder} />
      </div>
    )
  }
}

export default Cart