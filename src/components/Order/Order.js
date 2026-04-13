import React, { Component } from 'react'
import styles from './Order.module.css'

export class Order extends Component {
  render() {
    return (
      <div className={styles.order}>
        <p>{this.props.order.title}</p>
        <p>{this.props.order.price}</p>
      </div>
    )
  }
}

export default Order