import Vue from "vue";
import Vuex from "vuex";
import userInfo from "./store/userInfo";
import socket from "./store/socket";
import routeInfo from "./store/routeInfo";
import code from "./store/code";
import system from "./store/system";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInfo,
        socket,
        routeInfo,
        code,
        system
    }
});
