import { autorun, observable } from 'mobx';

class CartStore {
    @observable cartId = '77777';
    @observable orderId;
}

var cartStore = new CartStore;

export default cartStore;

autorun(() => {
    //console.log(store);
})