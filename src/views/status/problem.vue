<template>
    <div class="ui container padding" v-cloak>
        <h1 class="ui dividing header">
            {{$t("problem")}}
            <router-link :to="`/problem/submit/${pid}`">{{pid}}</router-link> {{$t("status")}}
        </h1>
        <div class="ui stacked segment">
            <div class="ui statistics">
                <div class="black statistic">
                    <div class="value">
                        {{submitStatus.total_status.total_submit}}
                    </div>
                    <div class="label">
                        总提交
                    </div>
                </div>
                <div class="black statistic">
                    <div class="value">
                        {{submitStatus.total_status.total_solved_submit}}
                    </div>
                    <div class="label">
                        已提交用户
                    </div>
                </div>
                <div class="black statistic">
                    <div class="value">
                        {{submitStatus.total_status.total_solved_user}}
                    </div>
                    <div class="label">
                        已通过用户
                    </div>
                </div>
                <div :class="submitStatus.color[index-1]+' statistic'" :key="row"
                     v-for="(row,index) in submitStatus.problem_status">
                    <div class="value">
                        {{row}}
                    </div>
                    <div class="label">
                        <router-link :to="`/status?problem_id=${pid}&jresult=${index}`">
                            {{submitStatus.statistic_name[index]}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui piled segment">
            <div align="center" id="pie_chart_language_legend">
            </div>
            <div align="center" id="canvas-holder" style="width:100%">
                <canvas id="chart-area"/>
            </div>
        </div>
        <div class="ui piled segment">
            <div align="center" id="bar_chart_language_legend">
            </div>
            <div align="center" id="bar-holder" style="width:100%">
                <canvas id="bar-area"/>
            </div>
        </div>
        <div class="ui piled segment">
            <div align="center" id="memory_bar_chart_language_legend">

            </div>
            <div align="center" id="memory_bar_holder" style="width:100%">
                <canvas id="memory_bar_area"/>
            </div>
        </div>
        <div class="ui piled segment">
            <h2 class="ui dividing header">代码长度</h2>
            <div class="amcharts" id="problem_code_length"></div>
        </div>
        <div class="ui piled segment">
            <h2 class="ui dividing header">做题人员流向</h2>
            <div class="amcharts" id="chord_graph" v-observe-visibility="initSolveMap">加载中</div>
        </div>
        <div class="ui grid">
            <div class="eight wide column">

            </div>

            <div class="seven wide column">

            </div>
        </div>

        <h1 class="ui dividing header">Submissions</h1>
        <table class="ui table" id=problemstatus>
            <thead>
            <tr class=toprow>
                <th style="cursor:hand">名次
                <th>RunID</th>
                <th>用户</th>
                <th>内存</th>
                <th>耗时</th>
                <th>语言</th>
                <th>代码长度</th>
                <th>提交时间</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="index" v-for="(row,index) in submitStatus.solution_status">
                <td>{{current_page * 20 + index + 1}}</td>
                <td>{{row.solution_id}}</td>
                <td>
                    <router-link :to="`/user/${row.user_id}`">
                        {{row.user_id}}
                    </router-link>
                </td>
                <td>{{row.memory}}KB</td>
                <td>{{row.time}}ms</td>
                <td>
                    <router-link :to="`/usercode/local/${row.solution_id}`" v-if="isadmin||row.user_id == owner">
                        {{submitStatus.language_name[row.language]}}
                    </router-link>
                    <span v-else>{{submitStatus.language_name[row.language]}}</span>
                </td>
                <td>{{row.code_length}}B</td>
                <td>{{new Date(row.in_date).toLocaleString()}}</td>
            </tr>
            </tbody></table>
        <br>
        <router-link :to="`/status?problem_id=${this.pid}`" class="ui button">
            Status
        </router-link>
        <a :class="'ui button '+(current_page == 0?'disabled':'')"
           @click="current_page != 0 && page(-current_page,$event)"
           v-cloak>Top</a>
        <div class="ui buttons">
            <button :class="'ui left labeled icon button '+(current_page == 0?'disabled':'')"
                    @click="current_page!=0&&page(-1,$event)"
                    v-cloak>
                <i class="left arrow icon"></i>
                Prev
            </button>
            <div class="or" v-cloak></div>
            <button :class="'ui right labeled icon button '+(submit_stat.length < 20?'disabled':'')"
                    @click="submit_stat.length == 20 && page(1,$event)"
                    v-cloak>
                <i class="right arrow icon"></i>
                Next
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import mixins from "../../mixin/init";
import { Mixins, Component } from "vue-property-decorator";
import _ from "lodash";
import jquery from "jquery";
import Chart from "chart.js";
const am4themes_animated = require("@amcharts/amcharts4/themes/animated").default;
const $: any = jquery;
const hasDrawLineChart: any = {};
const hasRendered: any = {};

function drawLineChart (data: any, target = "default") {
    const data_array: any = [];

    if (!hasDrawLineChart[target]) {
        hasDrawLineChart[target] = true;
        _.forEach(data, function (val) {
            data_array.push({ date: new Date(val.in_date), value: val.code_length });
        });
    }
    else {
        return;
    }
    am4core.useTheme(am4themes_animated);
    const chart: any = am4core.create("problem_code_length", am4charts.XYChart);

    chart.data = data_array;

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series: any = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    series.tooltip.pointerOrientation = "vertical";
    // Make bullets grow on hover
    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    const bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;
}

function drawChordGraph (data: any, pid: any, prefix = "chord_graph") {
    if (hasRendered[prefix]) {
        return;
    }
    hasRendered[prefix] = true;
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    const chart = am4core.create("chord_graph", am4charts.ChordDiagram);

    _.forEach(data, function (el) {
        if (el.from != pid) {
            const tmp = el.from;
            el.from = el.to;
            el.to = tmp;
        }
        el.from = "本题";
        el.to += "";
    });

    data.sort(function (a: any, b: any) {
        return b.value - a.value;
    });

    while (data.length > 30) {
        data.pop();
    }
    chart.data = data;

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    const nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "点击块可显示或隐藏";
    nodeTemplate.showSystemTooltip = true;

    const nodeLink = chart.links.template;
    const bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
    bullet.fillOpacity = 1;
    bullet.circle.radius = 5;
    bullet.locationX = 0.5;

    // create animations
    chart.events.on("ready", function () {
        for (let i = 0; i < chart.links.length; i++) {
            const link: any = chart.links.getIndex(i);
            const bullet = link.bullets.getIndex(0);

            animateBullet(bullet);
        }
    });

    function animateBullet (bullet: any) {
        const duration = 3000 * Math.random() + 2000;
        const animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration);
        animation.events.on("animationended", function (event: any) {
            animateBullet(event.target.object);
        });
    }
}

@Component
export default class ProblemStatus extends Mixins(mixins) {
    pid!: any;
    problem_stat= [];
    submit_stat= [];
    problem_submit_stat= {};
    stat_name= [];
    current_page: any = 0;
    language_name= [];
    isadmin= false;
    self= "";
    time_range= {};
    owner: any = "";
    memory_range= {};
    initedSolveMap= false;
    $route: any;

    created () {
        this.pid = this.$route.params.id;
        this.current_page = parseInt(this.$route.query.page || 0);
    }

    get submitStatus () {
        const prob_stat: any = {};
        _.forEach(this.problem_stat, function (val: any) {
            prob_stat[val.result] = val.total;
        });
        return {
            problem_status: prob_stat,
            solution_status: this.submit_stat,
            total_status: this.problem_submit_stat,
            color: ["black", "black", "black", "green", "red", "red", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "", "", ""],
            statistic_name: this.stat_name,
            language_name: this.language_name,
            time_range: this.time_range,
            memory_range: this.memory_range
        };
    }

    set submitStatus (val: any) {
        const stat = val.data.problem_status;
        this.problem_stat = stat;
        this.submit_stat = val.data.solution_status;
        this.problem_submit_stat = val.data.submit_status;
        this.stat_name = val.data.statistic_name;
        this.language_name = val.data.language_name;
        this.isadmin = val.data.isadmin;
        this.owner = val.data.self;
        this.time_range = val.data.time_range;
        this.memory_range = val.data.memory_range;
    }

    initSolveMap () {
        if (this.initedSolveMap) {
            return;
        }
        this.initedSolveMap = true;
        this.axios.get(`/api/status/problem/solve_map/${this.pid}`)
            .then(({ data }) => {
                if (data.status === "OK") {
                    _.delay(drawChordGraph, 0, data.data, this.pid);
                }
            });
    }

    page (num: any) {
        this.current_page += num;
        const that = this;
        this.axios.get(`/api/problemstatus/${this.pid}?page=${this.current_page}`)
            .then(({ data }) => {
                this.submitStatus = data;
                this.setQuery();
            });
    }

    setQuery () {
        const queryObject: any = {};
        if (this.current_page !== 0) { queryObject.page = this.current_page + 1; }
        else {
            delete queryObject.page;
        }
        this.$router.push({ path: this.$route.path, query: queryObject });
    }

    mounted () {
        document.title = `Problem ${this.pid} Statistics -- ${document.title}`;
        const current_title = $("title").text();
        $("title").text("Status:Problem " + this.pid + " - " + current_title);
        this.current_page = Math.max(0, this.current_page - 1);
        this.axios.get(`/api/status/problem/code_length/problem/${this.pid}`)
            .then(({ data }) => {
                drawLineChart(data.data);
            });
        this.axios.get(`/api/problemstatus/${this.pid}?page=${this.current_page}`)
            .then(({ data }) => {
                this.submitStatus = data;
                this.initGraph();
            });
    }

    initGraph () {
        const colors: any = _.values(window.chartColors);
        colors.push("#af63f4");
        colors.push("#00b5ad");
        colors.push("#350ae8");
        colors.push("#E2EAE9");
        const ncolor = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#3B3EAC"];
        _.forEach(ncolor, function (val) {
            colors.push(val);
        });
        const config = {
            type: "pie",
            data: {
                datasets: [{
                    data: _.map(this.submitStatus.problem_status, (val) => {
                        return val;
                    }),
                    backgroundColor: colors,
                    label: "Status"
                }],
                labels: _.map(this.submitStatus.problem_status, (val, index) => {
                    return this.submitStatus.statistic_name[index];
                })
            },
            options: {
                responsive: true
            }
        };
        const lang: any = {};
        let labels: any = {};
        _.forEach(this.submitStatus.time_range, function (val) {
            labels[val.diff] = true;
            lang[val.language] = {};
        });
        labels = _.map(labels, function (val, index) {
            const arr = index.split("-");
            let str = arr[0] + "ms";
            if (arr.length > 1) { str += " - " + arr[1] + "ms"; }
            return str;
        });
        labels.sort(function (a: any, b: any) {
            if (a.indexOf(">") !== -1) {
                const s = parseFloat(a.substring(1, a.length));
                const t = parseFloat(b.split("-")[0]);
                return s - t;
            }
            else if (b.indexOf(">") !== -1) {
                const s = parseFloat(a.split("-")[0]);
                const t = parseFloat(b.substring(1, b.length));
                return s - t;
            }
            else {
                const s = parseFloat(a.split("-")[0]);
                const t = parseFloat(b.split("-")[0]);
                return s - t;
            }
        });
        _.forEach(lang, function (val, index) {
            _.forEach(labels, function (v) {
                lang[index][v] = 0;
            });
        });

        _.forEach(this.submitStatus.time_range, (val) => {
            const arr = val.diff.split("-");
            let diffstr = arr[0] + "ms";
            if (arr.length > 1) {
                diffstr += " - " + arr[1] + "ms";
            }
            lang[val.language][diffstr] = val.total;
        });
        let _colors = _.map(colors, function (val) {
            return val;
        });
        const config2 = {
            type: "bar",
            labels: labels,
            datasets: _.map(lang, (val, index) => {
                return {
                    label: this.submitStatus.language_name[index],
                    backgroundColor: _colors.shift(),
                    data: _.values(val)
                };
            })
        };
        let mlabels: any = {};
        const mlang: any = {};
        _colors = _.map(colors, (val) => {
            return val;
        });
        _.forEach(this.submitStatus.memory_range, (val) => {
            mlabels[val.diff] = true;
            mlang[val.language] = {};
        });
        mlabels = _.map(mlabels, (val, index) => {
            if (index.indexOf("-") !== -1) {
                const arr = index.split("-");
                arr[0] = (parseFloat(arr[0]) / 1024).toFixed(2);
                if (arr.length > 1) { arr[1] = (parseFloat(arr[1]) / 1024).toFixed(2); }
                let str = arr[0] + "MB";
                if (arr.length > 1) { str += " - " + arr[1] + "MB"; }
                return str;
            }
            else {
                let str = index.substring(1, index.length);
                str = (parseFloat(str) / 1024).toFixed(2);
                return ">" + str + "MB";
            }
        });
        mlabels.sort((a: any, b: any) => {
            if (a.charAt(0) === ">") {
                const s = parseFloat(a.substring(1, a.length));
                const t = parseFloat(b.split("-")[0]);
                return s - t;
            }
            else if (b.charAt(0) === ">") {
                const s = parseFloat(a.split("-")[0]);
                const t = parseFloat(b.substring(1, b.length));
                return s - t;
            }
            else {
                const s = parseFloat(a.split("-")[0]);
                const t = parseFloat(b.split("-")[0]);
                return s - t;
            }
        });
        _.forEach(mlang, (val: any, index: any) => {
            _.forEach(mlabels, (v: any) => {
                mlang[index][v] = 0;
            });
        });

        _.forEach(this.submitStatus.memory_range, (val: any) => {
            if (val.diff.indexOf("-") !== -1) {
                const arr = val.diff.split("-");
                arr[0] = (parseFloat(arr[0]) / 1024).toFixed(2);
                if (arr.length > 1) { arr[1] = (parseFloat(arr[1]) / 1024).toFixed(2); }
                let diffstr = arr[0] + "MB";
                if (arr.length > 1) { diffstr += " - " + arr[1] + "MB"; }
                mlang[val.language][diffstr] = val.total;
            }
            else {
                let str = val.diff.substring(1, val.diff.length);
                str = (parseFloat(str) / 1024).toFixed(2);
                mlang[val.language][">" + str + "MB"] = val.total;
            }
        });
        const config3 = {
            type: "bar",
            labels: mlabels,
            datasets: _.map(mlang, (val: any, index: any) => {
                return {
                    label: this.submitStatus.language_name[index],
                    backgroundColor: _colors.shift(),
                    data: _.values(val)
                };
            })
        };
        const ctx = (document.getElementById!("chart-area")! as any).getContext("2d");
        window.myPie = new Chart(ctx, config);
        const btx = (document.getElementById!("bar-area")! as any).getContext("2d");
        const mtx = (document.getElementById!("memory_bar_area")! as any).getContext("2d");
        window.myBar = new Chart(btx, {
            type: "bar",
            data: config2,
            options: {
                title: {
                    display: true,
                    text: "AC代码运行用时"
                },
                tooltips: {
                    mode: "index",
                    intersect: true
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
        window.myMemory = new Chart(mtx, {
            type: "bar",
            data: config3,
            options: {
                title: {
                    display: true,
                    text: "AC代码内存使用"
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }
}
</script>

<style scoped>

</style>
