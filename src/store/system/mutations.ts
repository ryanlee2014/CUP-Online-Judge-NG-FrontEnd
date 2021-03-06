import { ISystemState } from "@/store/system/system";
import { MutationTree } from "vuex";

const mutations: MutationTree<ISystemState> = {
    setContestMode (state, contestMode) {
        state.contestMode = contestMode;
    },
    setInitState (state, initState) {
        state.init = initState;
    },
    setDarkMode (state, mode) {
        state.darkMode = mode;
    },
    setLanguageServerUrl (state, languageServerUrl) {
        state.languageServerUrl = languageServerUrl;
        localStorage.setItem("languageServerUrl", languageServerUrl);
    },
    setGravatarCDN (state, gravatarCDNUrl) {
        console.log("gravatarCDN", gravatarCDNUrl);
        state.gravatarCDN = gravatarCDNUrl;
        localStorage.setItem("gravatarCDN", gravatarCDNUrl);
    }
};

export default mutations;
