<template>
    <div class="ui flowing popup hidden dropdown_menu_group">
        <div class='ui two column grid'>
            <div class='row'>
                <div class='column'>
                    <v-gravatar :hostname="$store.getters.gravatarCDN" class="ui small image" :size="200" :email="email"></v-gravatar>
                    <h4 class='ui header'>{{user_id}}
                        <div class='sub header'>{{nick}}</div>
                    </h4>
                    <p><i class='yen sign icon'></i>0</p>
                    <div class="ui toggle checkbox" id="show_tag">
                        <input type="checkbox" v-model="dark">
                        <label>{{$t("dark mode")}}</label>
                    </div>
                </div>
                <div class='column'>
                    <div class='ui link list'>
                        <router-link class="item" to="/user/self/info/modify">
                            <i class='edit icon'></i>{{$t("modify account")}}
                        </router-link>
                        <br>
                        <router-link to="/myinfo" class="item">
                            <i class='archive icon'></i>{{$t("personal information")}}
                        </router-link>
                        <br>
                        <router-link :to="`/status/?user_id=${user_id}`" class="item">
                            <i class='send icon'></i>{{$t("my submission")}}
                        </router-link>
                        <br>
                        <router-link class="item" to="/contest?myContest">
                            <i class='book icon'></i>{{$t("my contest&homework")}}
                        </router-link>
                        <br>
                        <a @click.prevent="logout" class='logout item'><i
                            class='remove user icon'></i>{{$t("logout")}}</a>&nbsp;<br>
                        <router-link class="item" to="/admin">
                            <i class='write icon'></i>{{$t("admin panel")}}
                        </router-link>
                        &nbsp;<br>
                        <router-link class="item" to="/extra/broadcast" v-if="admin"><i
                            class='send outline icon'></i>{{$t("online push")}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import store from "../../../store";
import util from "../../../lib/util";
import { Prop, Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import { mapGetters } from "vuex";
@Component({
    computed: mapGetters(["darkMode"])
})
export default class ProfileCard extends Vue {
    @Prop({ default: "" }) user_id!: string;
    @Prop({ default: "" }) nick!: string;
    @Prop({ default: false }) avatar!: boolean;
    @Prop({ default: false }) admin!: boolean;
    @Prop({ default: "" }) email!: string;
    $socket: any;

    dark = false;

    get img_url () {
        return util.getAvatarURL({ user_id: this.user_id, avatar: this.avatar, avatarUrl: this.$store.getters.avatarUrl });
    }

    logout () {
        this.axios.get("/api/logout")
            .then(response => {
                if (response.data.status === "OK") {
                    sessionStorage.isLogined = false;
                    this.$socket.close();
                    store.commit("loginMutate", { login: false });
                    location.reload();
                }
            });
    }

    mounted () {
        this.dark = this.$store.getters.darkMode;
    }

    @Watch("dark")
    onDarkChanged (val: boolean) {
        this.darkmodeSwitch(val);
    }

    darkmodeSwitch (val: boolean) {
        this.$store.commit("setDarkMode", val);
        if (this.$store.getters.darkMode) {
            $("*:not(.not.theme)").addClass("inverted");
            $(".dimmer.inverted").removeClass("inverted");
        }
        else {
            $("*:not(.not.theme)").removeClass("inverted");
            $(".dimmer").addClass("inverted");
        }
    }

    updated () {
        util.bindDropdown();
    }
}
</script>

<style scoped>

</style>
