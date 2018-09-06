import { observable } from 'mobx';
import PropTypes from 'prop-types'
const appearances = {
    create: 'create',
    navigating: 'navigating',
    navigated: 'navigated',
    loading: 'loading',
    loaded: 'loaded'
}
class SiteStateStore {
    @observable state;
}

SiteStateStore.propTypes = {
    /** additional alert classes */
    state: PropTypes.oneOf(Object.keys(appearances))
};
export default new SiteStateStore;
