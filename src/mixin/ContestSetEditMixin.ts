import Vue from "vue";
import { IContestSetEditDTO, IContestSetRequestDTO, IContestSetResponseDTO } from "@/types/contestset";
import { Component } from "vue-property-decorator";
@Component
export default class ContestSetEditMixin extends Vue {
    contestSetId = "0";
    contestSetInfo: IContestSetResponseDTO = {} as IContestSetEditDTO;
    contestSetList: any[] = [];

    created () {
        this.contestSetId = this.$route.params.contestSetId;
    }

    mounted () {
        this.initData();
    }

    initData () {
        this.axios.get(`/api/contestset/set/${this.contestSetId}`)
            .then(({ data }) => {
                this.contestSetInfo = data.data;
            });

        this.axios.get(`/api/contestset/list/${this.contestSetId}`)
            .then(({ data }) => {
                this.contestSetList = data.data;
            });
    }

    get contestSetEditInfo () {
        if (this.contestSetInfo) {
            const payload: IContestSetEditDTO = {
                contestIdList: this.contestSetList.map(e => e.contest_id + ""),
                contestset_id: parseInt(this.contestSetId),
                defunct: this.contestSetInfo!.defunct,
                description: this.contestSetInfo!.description,
                title: this.contestSetInfo!.title,
                visible: this.contestSetInfo!.visible,
                create_time: this.contestSetInfo!.create_time
            };
            return payload;
        }
        else {
            return {} as IContestSetEditDTO;
        }
    }

    add (payload: IContestSetRequestDTO) {
        this.axios.post("/api/admin/contestset/add", payload)
            .then(({ data }) => {
                alert("添加成功");
            })
            .catch(reason => {
                alert("添加失败, 错误信息将在Console输出");
                console.error(reason);
            });
    }
}
