import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [],
        orderItems: []
    },
    mutations: {
        fillItems(state, payload) {
            state.items = payload
        },
        fillOrderItems(state, payload) {
            state.orderItems = payload
        },
        addOrderItem(state, payload) {
            state.orderItems.push(payload)
        },
        addItem(state, payload) {
            state.items.push(payload)
        },
        removeOrderItem(state, payload) {
            state.orderItems.pop(payload)
        },
        removeItem(state, payload) {
            state.items.pop(payload)
        }
    },
    actions: {
        fetchItems({commit}) {
            axios.get('http://localhost:3000/posts/').then(result => commit('fillItems', result.data));
            axios.get('http://localhost:3000/posts/').then(result => commit('fillOrderItems', result.data));
        },
        addItem(store, payload) {
            store.commit({
                type: 'addItem',
                payload: payload
            })
        },
        addOrderItem(store, payload) {
            store.commit({
                type: 'addOrderItem',
                payload: payload
            })
        },
        removeItem(store, payload) {
            store.commit({
                type: 'removeItem',
                payload: payload
            })
        },
        removeOrderItem(store, payload) {
            store.commit({
                type: 'removeOrderItem',
                payload: payload
            })
        }
    }
});
