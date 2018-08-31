import { autorun, observable } from 'mobx';

class CartStore {
    @observable cartId = '77777';
    @observable orderId = 'null';
}

var cartStore = new CartStore;

export default cartStore;

autorun(() => {
    //console.log(store);
})