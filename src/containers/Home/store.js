import { autorun, observable } from 'mobx';

class HomeStore {
    @observable orderId = 'null';
}

var homeStore = new HomeStore;

export default homeStore;

autorun(() => {
    //console.log(store);
})