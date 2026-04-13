import React, { Component } from 'react'
import Order from '../Order/Order'
import styles from './Orders.module.css'

export class Orders extends Component {
  render() {
    if (this.props.orders.length === 0) {
            return (<p className={styles.orders__empty}>Cart is empty</p>)
    }
    const summa = this.props.orders.reduce((acc, order) => acc + (order.price * order.count || 0), 0);
    return (
      <div>
        {this.props.orders.map(order => (
            <Order key={order.id} order={order} onDeleteOrder={this.props.onDeleteOrder} /> 
        ))}
        <div className={styles.orders__total}>
            <p className={styles.orders__label}>Amount:</p> 
            <div className={styles.orders__summa}>{summa.toFixed(2)} $</div>
        </div>
      </div>
    )
  }
}

export default Orders