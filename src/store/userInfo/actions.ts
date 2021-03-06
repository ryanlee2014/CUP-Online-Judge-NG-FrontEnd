import axios from "axios";
import { IUserInfoState } from "@/store/userInfo/userInfo";
import { ActionTree, Commit } from "vuex";
import { IRootState } from "@/store/root";
import store from "@/store";
function getInfo (commit: Commit, tryTime: number) {
    if (tryTime <= 0 || !store.getters.init) {
        return;
    }
    axios.get("/api/user/self")
        .then(response => {
            const data = response.data;
            if (data.status === "OK") {
                commit("setUserData", data.data.userInfo);
                store.commit("setContestMode", data.data.contest_mode);
                store.commit("setGravatarCDN", data.data.gravatar);
                commit("loginMutate", { login: true });
            }
            else {
                getInfo(commit, tryTime - 1);
            }
        })
        .catch(e => e);
}

const actions: ActionTree<IUserInfoState, IRootState> = {
    NavStatus ({ commit }) {
        getInfo(commit, 3);
    }
};

export default actions;
