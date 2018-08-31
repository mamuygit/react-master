import { autorun, observable } from 'mobx';

class HomeStore {
    @observable orderId = '0';
    @observable name = '';
}

var store = window.store = new HomeStore;

export default store;

autorun(() => {
    //console.log(store);
})