import React, { Component } from 'react'
import style from './Item.module.css'

export class Item extends Component {
  render() {
    return (
      <div className={style.item}>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        <div className={style.item__text}>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price.toFixed(2)}$</b>
        </div>
        <button className={style.item__button}>Add to Cart</button>
      </div>
    )
  }
}

export default Item