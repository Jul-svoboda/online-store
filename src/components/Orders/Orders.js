import React, { Component } from 'react'
import Order from '../Order/Order'
import styles from './Orders.module.css'

export class Orders extends Component {
  render() {
    if (this.props.orders.length === 0) {
            return (<p className={styles.empty}>Cart is empty</p>)
    }
    return (
      <div>
        {this.props.orders.map(order => (
            <div>
                <Order key={order.id} order={order} />
            </div>
        ))}
      </div>
    )
  }
}

export default Orders