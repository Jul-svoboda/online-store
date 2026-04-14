import React, { Component } from 'react'
import styles from './ShowFullItem.module.css'
import { RxCross2 } from "react-icons/rx";


export class ShowFullItem extends Component {
  render() {
    return (
      <div className={styles['full-item']}>
        <div className={styles['full-item__wrapper']}>
            <RxCross2 className={styles['full-item__cross']} onClick={this.props.onCloseFullItem} />
            <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
            <div className={styles['full-item__text']}>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price.toFixed(2)}$</b>
            </div>
            <button onClick={() => this.props.onAddToOrder(this.props.item)} className={styles['full-item__button']}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default ShowFullItem