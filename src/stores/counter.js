import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
state: () =>({
    count: 0,
    storeName: 'counter',
    }),
    actions: {
        incrementCount(num){
            this.count += num;
        },
        decrementCount(num){
            this.count -= num;
        },
    },
    getters: {
    oddOrEven: (state) => {
        return state.count % 2 === 0 ? 'even' : 'odd';
    }
    }

})