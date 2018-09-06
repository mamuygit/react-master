import { autorun, observable, trace } from 'mobx';

class HomeStore {
    @observable orderId = 'null';
    @observable kochava = null;

    getKochavaID() {
        return this.kochava ? this.kochava.kvID : '';  
    }
}

autorun(() => {
    console.log('Home Changed');
})
var homeStore = new HomeStore;

export default homeStore;
