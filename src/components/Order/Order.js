import React, { Component } from 'react'
import styles from './Order.module.css'
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineTableBar,  MdOutlineKingBed } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { PiDresserBold, PiChairBold } from "react-icons/pi";

export class Order extends Component {
  render() {
    const categoryIcons = {
      chairs: <PiChairBold className={styles.order__icon} />,
      tables: <MdOutlineTableBar className={styles.order__icon} />,
      sofa: <LuSofa className={styles.order__icon} />,
      storage: <PiDresserBold className={styles.order__icon} />,
      beds: <MdOutlineKingBed className={styles.order__icon} />
    };
    return (
      <div className={styles.order}>
        {categoryIcons[this.props.order.category]}
        <p className={styles.order__title}>{this.props.order.title}</p>
        <div className={styles.order__price}>
            <div className={styles.order__count}>
                <p>x</p><p> {this.props.order.count}</p>
            </div>
            <p>{(this.props.order.price * this.props.order.count).toFixed(2)}&nbsp;$</p>
        </div>
        <HiOutlineTrash className={styles.order__trash} onClick={() => this.props.onDeleteOrder(this.props.order.id)}/>
      </div>
    )
  }
}

export default Order