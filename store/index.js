import axios from 'axios';

const store = {
    state: {
        items: [],
        orderItems: [],
    },
    async fetchItems() {
        this.items = await axios.get('http://localhost:3000/posts').then(result => result.data);
        this.orderItems = await axios.get('http://localhost:3000/posts').then(result => result.data);
    },
    addItem(item) {
        this.state.items.push(item);
    },
    addOrderItem(item) {
        this.state.orderItems.push(item);
    }
};

export default store;