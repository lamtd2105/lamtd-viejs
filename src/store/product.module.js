import ApiService from "./../services/api.service";
import {
    FETCH_LIST_PRODUCT,
    ADD_PRODUCT
} from "./../constant/actions-type";
import { SET_LIST_PRODUCT, SET_ITEM_INTO_LIST_PRODUCT } from "./../constant/mutations-type";

const state = {
    errors: {},
    products: {}
};

const getters = {
    profile(state) {
        return state.products;
    }
};

const actions = {
    [FETCH_LIST_PRODUCT](context) {
        return ApiService.get("products")
            .then(({ data }) => {
                context.commit(SET_LIST_PRODUCT, data.products);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    },
    [ADD_PRODUCT](context, product) {
        return ApiService.post(`products/add`, product)
            .then(({ data }) => {
                context.commit(SET_ITEM_INTO_LIST_PRODUCT, product);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    }
};

const mutations = {
    // [SET_ERROR] (state, error) {
    //   state.errors = error
    // },
    [SET_LIST_PRODUCT](state, products) {
        state.products = products;
        state.errors = {};
    },
    [SET_ITEM_INTO_LIST_PRODUCT](state, product) {
        state.products.push(product);
        state.errors = {};
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};