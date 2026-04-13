import React, { Component } from 'react'
import Item from '../Item/Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(item => (
            <Item key={item.id} item={item} onAddToOrder={this.props.onAddToOrder} />
        ))}
      </main>
    )
  }
}

export default Items