(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179,457],{2327:function(t,n,e){var r={"./":[5228,9],"./en":[3005,9,5],"./en.ts":[3005,9,5],"./i18n.types":[3107,7,648],"./i18n.types.ts":[3107,7,648],"./index":[5228,9],"./index.tsx":[5228,9],"./pt":[7609,9,609],"./pt.ts":[7609,9,609],"./translate":[9457,9,457],"./translate.ts":[9457,9,457]};function u(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],u=n[0];return Promise.all(n.slice(2).map(e.e)).then((function(){return e.t(u,16|n[1])}))}u.keys=function(){return Object.keys(r)},u.id=2327,t.exports=u},9600:function(t,n,e){"use strict";var r,u;e.d(n,{d:function(){return r},l:function(){return u}}),function(t){t.Language="@epg-language"}(r||(r={})),function(t){t.English="en",t.Portuguese="pt"}(u||(u={}))},5228:function(t,n,e){"use strict";e.r(n),e.d(n,{selectPluralRule:function(){return i},defaultLanguage:function(){return s},I18nContext:function(){return l},I18n:function(){return f}});var r=e(5893),u=e(7294),o=e(6361),a=e(9600),c=(0,o.Z)(),i=function(t){return(new Intl.PluralRules).select(t)},s=a.l.English,l=(0,u.createContext)({});c.locale(s);var f=(0,u.forwardRef)((function(t,n){var e=t.children,o=t.language,a=t.langDictionary,i=(0,u.useRef)(o||s),f=(0,u.useState)(0)[1],g=(0,u.useRef)(!0),p={activeLanguage:i.current,t:function(){return c.t.apply(c,arguments)},locale:function(t,n){c.locale(t),i.current=t,n&&c.set(t,n),f((function(t){return t+1}))}};return o&&!0===g.current&&(g.current=!1,p.locale(o,a)),(0,u.useImperativeHandle)(n,(function(){return p})),(0,u.useEffect)((function(){o&&p.locale(o,a)}),[a,o]),(0,r.jsx)(l.Provider,{value:p,children:e})}))},9457:function(t,n,e){"use strict";e.r(n),e.d(n,{I18nRef:function(){return r},translate:function(){return u}});var r=(0,e(7294).createRef)(),u=function(){var t;return r.current?(t=r.current).t.apply(t,arguments):""}},334:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return E}});var r=e(809),u=e.n(r),o=e(2447),a=e(6265),c=e(5893),i=e(4047),s=e(2700),l=e(8127),f=e(8580),g=e(775),p=e(3403),d=e(8527),h=e(8016),v=e(7544),y=(e(7294),e(1163)),m={accent0:"#FFA801",accent:"crimson",light:"#ecf0f1",dark:{900:"#090909",850:"#0e0e10",800:"#121214",700:"#202024",600:"#29292E",500:"#323238"}},k={TradeGothic:"TradeGothic",Itim:"Itim"},x=(0,p.B1C)({colors:{accent:m.accent,light:m.light,dark:{900:m.dark[900],850:m.dark[850],800:m.dark[800],700:m.dark[700],600:m.dark[600],500:m.dark[500]}},fonts:{heading:k.Itim,body:k.Itim},styles:{global:{body:{bg:m.dark[800],color:m.light,fontSize:"16pt"},a:{_hover:{color:m.accent,textDecoration:"none"}}}}},(0,p.nsf)({variant:"ghost",components:["IconButton","Button"]})),b=e(5228),O=e(9457),P=(e(6677),e(7842));function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){(0,a.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function C(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=(0,g.Z)(t);if(n){var u=(0,g.Z)(this).constructor;e=Reflect.construct(r,arguments,u)}else e=r.apply(this,arguments);return(0,f.Z)(this,e)}}var E=function(t){(0,l.Z)(e,t);var n=C(e);function e(){return(0,i.Z)(this,e),n.apply(this,arguments)}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){var t=this,n=function(){return t.setState({loading:!1})};y.default.events.on("routeChangeStart",(function(){return t.setState({loading:!0})})),y.default.events.on("routeChangeComplete",n),y.default.events.on("routeChangeError",n)}},{key:"componentWillUnmount",value:function(){var t=this,n=function(){return t.setState({loading:!1})};y.default.events.off("routeChangeStart",(function(){return t.setState({loading:!0})})),y.default.events.off("routeChangeComplete",n),y.default.events.off("routeChangeError",n)}},{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps,r=t.langDictionary,u=t.language,o=t.loading;return(0,c.jsx)(b.I18n,{ref:O.I18nRef,langDictionary:r,language:u,children:(0,c.jsx)(p.xjn,{theme:x,children:o?(0,c.jsx)(d.M5,{h:"100vh",w:"full",children:(0,c.jsx)(h.$,{thickness:"4px",speed:"0.65s",emptyColor:"dark.800",color:"accent",size:"xl"})}):(0,c.jsx)(n,j({},e))})})}}],[{key:"getInitialProps",value:function(){var t=(0,o.Z)(u().mark((function t(n){var e,r,o,a,c,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,r=n.ctx,t.next=3,(0,P.R)(r);case 3:if(o=t.sent,a=o.language,c=o.langDictionary,!e.getInitialProps){t.next=12;break}return t.next=9,e.getInitialProps(r);case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0={};case 13:return i=t.t0,t.abrupt("return",{pageProps:i,langDictionary:c,language:a});case 15:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}]),e}(v.default)},7842:function(t,n,e){"use strict";e.d(n,{K:function(){return l},R:function(){return f}});var r=e(809),u=e.n(r),o=e(2447),a=e(2286),c=e.n(a),i=e(9600),s={maxAge:2592e3,sameSite:"Strict",path:"/"},l=function(t,n){n?c().set(n,i.d.Language,t,s):(0,a.setCookie)(null,i.d.Language,t,s)},f=function(){var t=(0,o.Z)(u().mark((function t(n){var r,o,a,s,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c().get(n),(!(o=r[i.d.Language])||o!==i.l.English&&o!==i.l.Portuguese)&&(o=i.l.English,l(i.l.English,n)),t.next=5,e(2327)("./".concat(o));case 5:return a=t.sent,s=a.langDictionary,f=void 0===s?{}:s,t.abrupt("return",{language:o,langDictionary:f});case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6363:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(334)}])},6677:function(){},4453:function(){}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,374,433,386,145],(function(){return n(6363),n(2441)}));var e=t.O();_N_E=e}]);