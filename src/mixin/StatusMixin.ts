import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
import utils from "@/lib/util";
import _ from "lodash";

@Component
export class StatusMixin extends Vue {
    @Prop({ default: () => [] }) problem_list!: any[];
    @Prop({ default: () => [] }) answer_icon!: any[];
    @Prop({ default: () => [] }) answer_class!: any;
    @Prop({ default: () => { return {}; } }) target!: any;
    @Prop({ default: () => [] }) language_name!: any[];
    @Prop({ default: () => [] }) result!: any[];
    @Prop({ default: "" }) self!: string;
    @Prop({ default: false }) isadmin!: boolean;
    @Prop() end!: boolean;
    @Prop() finish!: boolean;
    user: any = {};
    dayjs = dayjs;
    memory_parse (_memory: string) {
        const unit = ["KB", "MB", "GB"];
        let cnt = 0;
        let memory = parseInt(_memory);
        if (isNaN(memory)) {
            return _memory;
        }
        while (memory > 1024) {
            memory /= 1024;
            ++cnt;
        }
        return memory.toString().substring(0, 5) + unit[cnt];
    }
    time_parse (_time: string) {
        const unit = ["ms", "s"];
        let cnt = 0;
        let time = parseInt(_time);
        if (isNaN(time)) {
            return _time;
        }
        while (time > 1000) {
            ++cnt;
            time /= 1000;
        }
        return time.toString().substring(0, 5) + unit[cnt];
    }
    detect_place (ip: string) {
        if (!ip) {
            return "未知";
        }
        const tmp = {
            intranet_ip: ip,
            place: ""
        };
        utils.detectIP(tmp);
        return tmp.place;
    }
    infoRoute (result: string) {
        if (parseInt(result) === 11) {
            return "compile";
        }
        return "runtime";
    }

    get problem_lists () {
        const that = this;
        _.forEach(this.problem_list, (i) => {
            this.user[i.user_id] = this.user[i.user_id] || i;
        });
        const doc = document.createElement("div");
        let temp;
        for (let i in this.problem_list) {
            doc.innerHTML = this.problem_list[i].nick;
            temp = this.problem_list[i];
            temp.nick = doc.innerText;
        }
        return this.problem_list;
    }
}
