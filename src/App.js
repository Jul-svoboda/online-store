import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                        {
                        id: 1,
                        title: 'Grey Chair',
                        img: 'chair-grey.jpeg',
                        desc: 'Comfortable upholstered chair for your living room.',
                        category: 'chairs',
                        price: 49.99
                        },
                        {
                        id: 2,
                        title: 'Wooden Dining Table',
                        img: 'table-wood.jpg',
                        desc: 'Solid wood dining table perfect for family meals.',
                        category: 'tables',
                        price: 149.00
                        },
                        {
                        id: 3,
                        title: 'Corner Sofa',
                        img: 'sofa-corner.jpg',
                        desc: 'Spacious corner sofa with modern design.',
                        category: 'sofa',
                        price: 499.99
                        },
                        {
                        id: 4,
                        title: 'Soft Armchair',
                        img: 'armchair.jpg',
                        desc: 'Cozy armchair ideal for relaxing and reading.',
                        category: 'chairs',
                        price: 89.99
                        },
                        {
                        id: 5,
                        title: 'Coffee Table',
                        img: 'coffee-table.jpg',
                        desc: 'Compact coffee table for your living space.',
                        category: 'tables',
                        price: 79.99
                        },
                        {
                        id: 6,
                        title: 'Double Bed',
                        img: 'bed.jpg',
                        desc: 'Comfortable double bed with soft headboard.',
                        category: 'beds',
                        price: 399.99
                        },
                        {
                        id: 7,
                        title: 'Wardrobe',
                        img: 'wardrobe.jpg',
                        desc: 'Spacious wardrobe with mirror doors.',
                        category: 'storage',
                        price: 299.99
                        },
                        {
                        id: 8,
                        title: 'Dresser',
                        img: 'dresser.jpg',
                        desc: 'Practical dresser with multiple drawers.',
                        category: 'storage',
                        price: 199.99
                        },
                        {
                        id: 9,
                        title: 'Bar Chair',
                        img: 'bar-chair.jpg',
                        desc: 'Stylish bar chair for kitchen or bar area.',
                        category: 'chairs',
                        price: 59.99
                        },
                        {
                        id: 10,
                        title: 'Computer Desk',
                        img: 'desk.jpg',
                        desc: 'Functional desk designed for work and study.',
                        category: 'tables',
                        price: 129.99
                        },
                        {
                        id: 11,
                        title: 'Wall Shelf',
                        img: 'shelf.jpg',
                        desc: 'Minimalist wall shelf for decor and storage.',
                        category: 'storage',
                        price: 39.99
                        },
                        {
                        id: 12,
                        title: 'Bedside Table',
                        img: 'bedside-table.jpg',
                        desc: 'Compact bedside table for your bedroom.',
                        category: 'tables',
                        price: 69.99
                        },
                        {
                        id: 13,
                        title: 'Office Chair',
                        img: 'office-chair.jpg',
                        desc: 'Ergonomic office chair for long working hours.',
                        category: 'chairs',
                        price: 119.99
                        },
                        {
                        id: 14,
                        title: 'Two-Seater Sofa',
                        img: 'sofa-small.jpg',
                        desc: 'Modern compact sofa for small spaces.',
                        category: 'sofa',
                        price: 349.99
                        },
                        {
                        id: 15,
                        title: 'Glass Table',
                        img: 'glass-table.jpg',
                        desc: 'Elegant table with tempered glass top.',
                        category: 'tables',
                        price: 179.99
                        }
            ]
        }
        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDeleteOrder={this.deleteOrder} />
                <Categories onChooseCategory={this.chooseCategory} />
                <Items items={this.state.currentItems} onAddToOrder={this.addToOrder} />
                <Footer />
            </div>
        );
    }

    chooseCategory(category) {
        category === 'all'
        ? this.setState({currentItems: this.state.items})
        : this.setState({currentItems: this.state.items.filter(el => el.category === category)})
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        this.setState(prevState => {
            const existingItem = prevState.orders.find(el => el.id === item.id);
            if (existingItem) {
                return {
                    orders: prevState.orders.map(el =>
                        el.id ===item.id
                        ? {...el, count: (el.count || 1) + 1}
                        : el
                    )}
            }
            return {
                orders:[...prevState.orders, {...item, count: 1}]
            } 
        })
    }
}

export default App;
