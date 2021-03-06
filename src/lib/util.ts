import {notUndefinedOrNull} from "@/store/util";
import jquery from "jquery";
import store from "@/store";
import { Vue } from "vue/types/vue";
import axios from "axios";
import { Cache } from "@/module/Decorator/method";

declare global {
    interface Window {
        [id: string]: any
    }
}

export interface IIPPayload {
    ip?: string,
    intranet_ip?: string,
    $this: Vue,
    place?: string,
    external_info?: string,
    toString: () => string
}

const $: any = jquery;
const jQuery = $;
window.jQuery = window.$ = $;
require("../../semantic/semantic-ui/semantic.min");

function generateAPIUrl(ip: string) {
    return `/geoip/json/${ip}?lang=zh-CN&fields=status,message,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,asname,proxy,hosting,query`;
}

function binding_method(homepage?: boolean, finished?: boolean) {
    // fix menu when passed
    const $fixedMenu = $(".fixed.menu");
    if ($fixedMenu.html()) {
        $(".masthead")
            .visibility({
                once: false,
                onBottomPassed: function () {
                    // $('.following.bar').addClass('light fixed');
                    $fixedMenu.transition("fade in");
                    //('.network.menu').addClass('secondary')
                    //$('.network.menu').removeClass('inverted');
                },
                onBottomPassedReverse: function () {
                    // $('.following.bar').removeClass('light fixed')
                    $fixedMenu.transition("fade out");
                    // $('.network.menu').removeClass('secondary');
                    // $('.network.menu').addClass('inverted');
                }
            })
        ;
    }

    const $sidebar = $(".ui.sidebar.mobile");

    // create sidebar and attach to menu open
    if ($sidebar.html()) {
        $sidebar
            .sidebar("attach events", ".toc.item")
        ;
    }

    function lightin() {
        $(".following.bar").addClass("light fixed");
        $fixedMenu.transition("fade in");
        //$('.network.menu').addClass('secondary')
        if (typeof homepage === "boolean" && homepage && finished && !store.getters.darkMode) {
            $(".network.menu").removeClass("inverted");
        }
    }

    function lightout() {
        $(".following.bar").removeClass("light fixed");
        $fixedMenu.transition("fade out");
        //('.network.menu').removeClass('secondary');
        if (typeof homepage === "boolean" && homepage && finished) {
            $(".network.menu").addClass("inverted");
        }
    }

    lightout();

    $("body")
        .visibility({
            once: false,
            offset: -10,
            observeChanges: false,
            continuous: false,
            refreshOnLoad: true,
            refreshOnResize: true,
            onTopPassedReverse: lightout,
            onTopPassed: lightin
        });
    $(".message .close")
        .off("click")
        .on("click", function (this: any) {
            $(this)
                .closest(".message")
                .transition("fade")
            ;
        });

}

class Util {

    private __cache: any = {};

    getExternalIPInfo (val: IIPPayload) {
        const ip = val.intranet_ip || val.ip;
        if (ip !== undefined && ip !== null) {
            if (this.__cache[ip]) {
                const data = this.__cache[ip];
                val.place = `${data.country} ${data.city}`;
                val.external_info = data;
            }
            else {
                axios.cacheGet(generateAPIUrl(ip!))
                    .then(({data}) => {
                        this.__cache[ip] = data;
                        val.place = `${data.country} ${data.city}`;
                        val.external_info = data;
                        val.$this.$forceUpdate();
                    })
            }
        }
    }

    splitIP(ip: string | undefined) {
        if (typeof ip === "string") {
            return ip.split(".").map(e => parseInt(e))
        }
        else {
            return [0,0,0,0];
        }
    }

    detectIP(tmp: IIPPayload, offline: boolean = true) {
        let ip;
        if (tmp.ip && !tmp.intranet_ip) {
            tmp.intranet_ip = tmp.ip;
        }
        if (tmp.intranet_ip) {
            const ipClip = this.splitIP(tmp.intranet_ip);
            if (tmp.intranet_ip.trim().match(/202\.204\.193\.[0-9]{1,3}/)) {
                let temp = tmp.intranet_ip;
                tmp.intranet_ip = tmp.ip || "";
                if (tmp.intranet_ip.match(/10\.10\.[0-9]{2}\.[0-9]{1,3}/)) {
                    tmp.place = "润杰有线";
                } else if (tmp.intranet_ip === "10.200.25.101" && tmp.intranet_ip.match(/10\.200\.25\.1[0-9]{2}/) || tmp.intranet_ip === "10.200.25.200") {
                    tmp.place = "403机房";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 32 && (ipClip[3] >= 1 && ipClip[3] <= 158)) {
                    tmp.place = "润杰5层";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 33 && (ipClip[3] >= 1 && ipClip[3] <= 150)) {
                    tmp.place = "润杰6层";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 32 && ipClip[3] === 75) {
                    tmp.place = "润杰5层教师机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 33 && ipClip[3] === 75) {
                    tmp.place = "润杰6层教师机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 25 && (ipClip[3] >= 1 && ipClip[3] <= 99)) {
                    tmp.place = "402学生机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 25 && ipClip[3] === 202) {
                    tmp.place = "402教师机";
                }
                else if (tmp.intranet_ip.match(/10\.200\.26\./)) {
                    let ip = tmp.intranet_ip.substring(tmp.intranet_ip.lastIndexOf(".") + 1);
                    if (parseInt(ip) <= 100) {
                        tmp.place = "404机房";
                    } else {
                        tmp.place = "405机房";
                    }
                } else if (tmp.intranet_ip.match(/10\.200\.28\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.200\.26\.[0-9]{1,3}/)
                    || tmp.intranet_ip.match(/10\.200\.25\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.200\.27\.[0-9]{1,3}/)) {
                    if (tmp.intranet_ip.match(/10\.200\.26\.[0-9]{1,3}/)) {
                        tmp.place = "405机房";
                    } else if (tmp.intranet_ip.match(/10\.200\.28\.[0-9]{1,3}/)) {
                        ip = tmp.intranet_ip.substring(tmp.intranet_ip.lastIndexOf(".") + 1);
                        if (parseInt(ip) <= 80) {
                            tmp.place = "502机房";
                        } else if (parseInt(ip) === 81) {
                            tmp.place = "502教师机";
                        } else if (parseInt(ip) < 172 && parseInt(ip) >= 101) {
                            tmp.place = "503机房";
                        } else {
                            tmp.place = "机房";
                        }
                    } else if (tmp.intranet_ip.match(/10\.200\.27\.[0-9]{1,3}/)) {
                        ip = tmp.intranet_ip.substring(tmp.intranet_ip.lastIndexOf(".") + 1);
                        ip = parseInt(ip);
                        if (ip >= 1 && ip <= 102) {
                            tmp.place = "504机房";
                        } else if (ip === 217) {
                            tmp.place = "504机房教师机";
                        } else {
                            tmp.place = "机房";
                        }
                    } else {
                        tmp.place = "机房";
                    }
                } else if (tmp.intranet_ip.match(/10\.1[1-2]{1}0\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.102\.[0-9]{1,3}\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.120\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.105\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.103\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.116\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.1[0-9]{2}\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/172\.16\.[\s\S]+/)) {
                    tmp.place = "VPN";
                } else if (tmp.intranet_ip.match(/2001:[\s\S]+/)) {
                    tmp.place = "IPv6";
                } else if (tmp.intranet_ip.match(/10\.3\.[\s\S]+/)) {
                    tmp.place = "地质楼";
                } else if (tmp.intranet_ip.match(/10\.200\.32\.[0-9]{1,3}/)) {
                    tmp.place = "润杰机房五楼";
                } else if (tmp.intranet_ip.match(/10\.200\.33\.[0-9]{1,3}/)) {
                    tmp.place = "润杰机房六楼";
                } else if (!offline) {
                    this.getExternalIPInfo(tmp);
                } else {
                    tmp.place = "未知";
                }
                tmp.intranet_ip = temp;
            } else {
                if (tmp.intranet_ip.match(/10\.10\.[0-9]{2}\.[0-9]{1,3}/)) {
                    tmp.place = "润杰有线";
                } else if (tmp.intranet_ip.match(/10\.200\.28\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.200\.26\.[0-9]{1,3}/)
                    || tmp.intranet_ip.match(/10\.200\.25\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.200\.27\.[0-9]{1,3}/)) {
                    if (tmp.intranet_ip.match(/10\.200\.26\.[0-9]{1,3}/)) {
                        tmp.place = "405机房";
                    } else if (tmp.intranet_ip.match(/10\.200\.28\.[0-9]{1,3}/)) {
                        ip = tmp.intranet_ip.substring(tmp.intranet_ip.lastIndexOf(".") + 1);
                        if (parseInt(ip) <= 80) {
                            tmp.place = "502机房";
                        } else if (parseInt(ip) < 172 && parseInt(ip) >= 101) {
                            tmp.place = "503机房";
                        } else {
                            tmp.place = "机房";
                        }
                    } else if (tmp.intranet_ip.match(/10\.200\.27\.[0-9]{1,3}/)) {
                        ip = tmp.intranet_ip.substring(tmp.intranet_ip.lastIndexOf(".") + 1);
                        ip = parseInt(ip);
                        if (ip >= 1 && ip <= 102) {
                            tmp.place = "504机房";
                        } else if (ip === 217) {
                            tmp.place = "504机房教师机";
                        } else {
                            tmp.place = "机房";
                        }
                    } else {
                        tmp.place = "机房";
                    }
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 32 && (ipClip[3] >= 1 && ipClip[3] <= 158)) {
                    tmp.place = "润杰5层";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 33 && (ipClip[3] >= 1 && ipClip[3] <= 150)) {
                    tmp.place = "润杰6层";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 32 && ipClip[3] === 75) {
                    tmp.place = "润杰5层教师机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 33 && ipClip[3] === 75) {
                    tmp.place = "润杰6层教师机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 25 && (ipClip[3] >= 1 && ipClip[3] <= 99)) {
                    tmp.place = "402学生机";
                } else if (ipClip[0] === 10 && ipClip[1] === 200 && ipClip[2] === 25 && ipClip[3] === 202) {
                    tmp.place = "402教师机";
                } else if (tmp.intranet_ip.match(/10\.1[1-2]{1}0\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.116\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.102\.[0-9]{1,3}\.[0-9]{1,3}/) || tmp.intranet_ip.match(/10\.120\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.105\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.103\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/10\.1[0-9]{2}\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "Wi-Fi";
                } else if (tmp.intranet_ip.match(/172\.16\.[\s\S]+/)) {
                    tmp.place = "VPN";
                } else if (tmp.intranet_ip.match(/10\.200\.32\.[0-9]{1,3}/)) {
                    tmp.place = "润杰机房五楼";
                } else if (tmp.intranet_ip.match(/10\.200\.33\.[0-9]{1,3}/)) {
                    tmp.place = "润杰机房六楼";
                } else if (tmp.intranet_ip.match(/2001:[\s\S]+/) && tmp.ip && !tmp.ip.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/)) {
                    tmp.place = "IPv6";
                } else if (tmp.intranet_ip && tmp.ip && tmp.intranet_ip != tmp.ip) {
                    tmp.place = "外网";
                } else if (tmp.intranet_ip.match(/10\.3\.[\s\S]+/)) {
                    tmp.place = "地质楼";
                } else if (!offline) {
                    this.getExternalIPInfo(tmp);
                    // tmp.place = "未知";
                } else {
                    tmp.place = "未知";
                }
            }
        } else if (!offline) {
            this.getExternalIPInfo(tmp);
        } else {
            tmp.place = "未知";
        }
        return tmp.place;
    }

    init(homepage?: boolean, finished?: boolean) {
        $("body, html").animate({scrollTop: 0}, 0);
        jQuery.event.special.touchstart = {
            setup: function (_: any, ns: string | string[], handle: any) {
                if (ns.includes("noPreventDefault")) {
                    this.addEventListener("touchstart", handle, {passive: false});
                } else {
                    this.addEventListener("touchstart", handle, {passive: true});
                }
            }
        };
        window.chartColors = {
            red: "rgb(255, 99, 132)",
            orange: "rgb(255, 159, 64)",
            yellow: "rgb(255, 205, 86)",
            green: "rgb(75, 192, 192)",
            blue: "rgb(54, 162, 235)",
            purple: "rgb(153, 102, 255)",
            grey: "rgb(201, 203, 207)"
        };

        (function (global) {
            let Months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            let COLORS = [
                "#4dc9f6",
                "#f67019",
                "#f53794",
                "#537bc4",
                "#acc236",
                "#166a8f",
                "#00a950",
                "#58595b",
                "#8549ba"
            ];

            let Samples = global.Samples || (global.Samples = {});
            let Color = global.Color;

            Samples.utils = {
                // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
                srand: function (seed: any) {
                    this._seed = seed;
                },

                rand: function (min: any, max: any) {
                    let seed = this._seed;
                    min = min === undefined ? 0 : min;
                    max = max === undefined ? 1 : max;
                    this._seed = (seed * 9301 + 49297) % 233280;
                    return min + (this._seed / 233280) * (max - min);
                },

                numbers: function (config: any) {
                    let cfg = config || {};
                    let min = cfg.min || 0;
                    let max = cfg.max || 1;
                    let from = cfg.from || [];
                    let count = cfg.count || 8;
                    let decimals = cfg.decimals || 8;
                    let continuity = cfg.continuity || 1;
                    let dfactor = Math.pow(10, decimals) || 0;
                    let data = [];
                    let i, value;

                    for (i = 0; i < count; ++i) {
                        value = (from[i] || 0) + this.rand(min, max);
                        if (this.rand() <= continuity) {
                            data.push(Math.round(dfactor * value) / dfactor);
                        } else {
                            data.push(null);
                        }
                    }

                    return data;
                },

                labels: function (config: any) {
                    let cfg = config || {};
                    let min = cfg.min || 0;
                    let max = cfg.max || 100;
                    let count = cfg.count || 8;
                    let step = (max - min) / count;
                    let decimals = cfg.decimals || 8;
                    let dfactor = Math.pow(10, decimals) || 0;
                    let prefix = cfg.prefix || "";
                    let values = [];
                    let i;

                    for (i = min; i < max; i += step) {
                        values.push(prefix + Math.round(dfactor * i) / dfactor);
                    }

                    return values;
                },

                months: function (config: any) {
                    let cfg = config || {};
                    let count = cfg.count || 12;
                    let section = cfg.section;
                    let values = [];
                    let i, value;

                    for (i = 0; i < count; ++i) {
                        value = Months[Math.ceil(i) % 12];
                        values.push(value.substring(0, section));
                    }

                    return values;
                },

                color: function (index: any) {
                    return COLORS[index % COLORS.length];
                },

                transparentize: function (color: any, opacity: any) {
                    let alpha = opacity === undefined ? 0.5 : 1 - opacity;
                    return Color(color).alpha(alpha).rgbString();
                }
            };

            // DEPRECATED
            window.randomScalingFactor = function () {
                return Math.round(Samples.utils.rand(-100, 100));
            };
            // INITIALIZATION
            Samples.utils.srand(Date.now());

        }(window));
        // TODO: modify notie
        if (navigator.userAgent.indexOf("MSIE") !== -1) {
            location.href = "notie.php";
        }
        binding_method(homepage, finished);
        this.bindDropdown();
        if (!homepage) {
            if (store.getters.darkMode) {
                $("*:not(.not.theme)").addClass("inverted");
                $(".dimmer.inverted").removeClass("inverted");
            } else {
                $("*:not(.not.theme)").removeClass("inverted");
                $(".dimmer").addClass("inverted");
            }
        }
        $(document).on("click", function () {
            if (!homepage) {
                if (store.getters.darkMode) {
                    $("*:not(.not.theme)").addClass("inverted");
                    $(".dimmer.inverted").removeClass("inverted");
                } else {
                    $("*:not(.not.theme)").removeClass("inverted");
                    $(".dimmer").addClass("inverted");
                }
            }
        });
    }

    bindDropdown() {
        const $accordion = $(".ui.accordion");
        if ($accordion.html()) {
            $accordion
                .accordion({
                    "exclusive": false
                })
            ;
        }
        const $menuDropdown = $(".ui.menu .ui.dropdown");
        if ($menuDropdown.html()) {
            $menuDropdown.dropdown({
                on: "hover",
                onShow: function () {
                    if ($(".following.bar").length > 1) {
                        $(".topmenu").css({
                            zIndex: 999
                        });
                    }
                },
                onHide: function () {
                    if ($(".following.bar").length > 1) {
                        $(".topmenu").css({
                            zIndex: 99
                        });
                    }
                }
            });
        }

        const $searchDropdown = $(".ui.search.dropdown");

        if ($searchDropdown.html()) {
            $searchDropdown.dropdown({
                on: "hover"
            });
        }

        const $dropdownSelection = $(".ui.dropdown.selection");

        if ($dropdownSelection) {
            $dropdownSelection.dropdown({
                on: "hover"
            });
        }
        $(".message .close")
            .off("click")
            .on("click", function (this: any) {
                $(this)
                    .closest(".message")
                    .transition("fade")
                ;
            });
        $(".detail").popup({
            exclusive: true
            , hoverable: true,
            popup: ".flowing.popup.dropdown_menu_group"
        });
    }

    initToTopButton() {
        (function (a) {
            a.fn.scrollToTop = function (c: any) {
                let d = {speed: 800};
                c && a.extend(d, {speed: c});
                return this.each(function (this: any) {
                    let b = a(this);
                    a(window).on("scroll", function (this: any) {
                        100 < a(this).scrollTop() ? b.fadeIn() : b.fadeOut();
                    });
                    b.on("click", function (b: { preventDefault: () => void; }) {
                        b.preventDefault();
                        a("body, html").animate({scrollTop: 0}, d.speed);
                    });
                });
            };
        })(jQuery);
        $(function () {
            if (document.getElementById("toTop") === null) {
                $("body").prepend("<a href=\"#top\" id=\"toTop\" style=\"z-index:999\"><i class=\"arrow alternate huge circle up icon\"></i></a>");
                $("#toTop").scrollToTop();
            }
        });
    }

    getAvatarURL(state: any) {
        const hasAvatar = !!state.avatar;
        const avatarUrl = typeof state.avatarUrl === "string" ? state.avatarUrl.trim() : "";
        if (hasAvatar && avatarUrl.length === 0) {
            return `/avatar/${state.user_id}.jpg`;
        } else if (avatarUrl.length > 0) {
            return avatarUrl;
        } else {
            return require("@/static/image/default-user.png");
        }
    }

    hasAvatarURL(state: any) {
        const hasAvatar = !!state.avatar;
        const avatarUrl = typeof state.avatarUrl === "string" ? state.avatarUrl.trim() : "";
        if (hasAvatar && avatarUrl.length === 0) {
            return true;
        } else {
            return avatarUrl.length > 0;
        }
    }

    stringify(target: any) {
        if (notUndefinedOrNull(target)) {
            return target + "";
        } else {
            return "";
        }
    }
}

export default new Util();
