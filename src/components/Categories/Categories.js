import React, { Component } from 'react'
import styles from './Categories.module.css'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all', 
                    name: 'All'
                },
                {
                    key: 'chairs', 
                    name: 'Chairs'
                },
                {
                    key: 'tables', 
                    name: 'Tables'
                },
                {
                    key: 'sofa', 
                    name: 'Sofas'
                },
                {
                    key: 'beds', 
                    name: 'Beds'
                }
            ]
        }
    }
  render() {
    return (
      <div className={styles.categories}>
        {this.state.categories.map(category => (
            <div className={styles.categories__item} key={category.key} onClick={() => this.props.onChooseCategory(category.key)}>{category.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories