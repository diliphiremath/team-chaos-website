(this.webpackJsonpteam_chaos_app=this.webpackJsonpteam_chaos_app||[]).push([[0],{23:function(a,e,n){},24:function(a,e,n){},26:function(a,e,n){},37:function(a,e,n){},38:function(a,e,n){"use strict";n.r(e);var t=n(1),c=n(0),s=n.n(c),i=n(10),r=n.n(i),o=(n(23),n(24),n(16)),l=n(8),d=(n(25),n(42)),j=n(43),m=n(41);n(26);var h=function(){var a=Object(c.useState)([]),e=Object(o.a)(a,2),n=e[0],s=e[1];Object(c.useEffect)((function(){r(l)}),[l]);var i=function(a,e){var n=null,c=function(a){if(a!==parseInt(a,10))return"strings.general_unknown";var e=parseInt(a,10),n="rank_tier_".concat(parseInt(e/10,10));return e>9&&80!==e&&(n+=" [".concat(parseInt(e%10,10),"]")),n}(a);if(a){var s;if(e)s="".concat(window.location.origin,e<=10?"/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8c.png":e<=100?"/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8b.png":"/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_8.png"),n=Object(t.jsx)("div",{className:"rankTierContainer",children:Object(t.jsxs)("div",{className:"rankMedal","data-hint":c,"data-hint-position":"top",children:[Object(t.jsx)("img",{className:"rankMedal-icon",width:"50",height:"50",src:s,alt:"icon"}),e&&Object(t.jsx)("span",{className:"rankMedal-board",children:e})]})});else{var i=parseInt(a,10),r=i%10;r<1?r=1:r>7&&(r=7);var o="".concat(window.location.origin,"/team-chaos-website/assets/images/dota2/rank_icons/rank_star_").concat(r,".png");s="".concat(window.location.origin,"/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_").concat(Math.floor(i/10),".png"),n=Object(t.jsx)("div",{className:"rankTierContainer",children:Object(t.jsxs)("div",{className:"rankMedal","data-hint":c,"data-hint-position":"top",children:[Object(t.jsx)("img",{className:"rankMedal-icon",src:s,alt:"icon"}),0!==r?Object(t.jsx)("img",{className:"rankMedal-star",src:o,alt:"star"}):""]})})}}else{var l="".concat(window.location.origin,"/team-chaos-website/assets/images/dota2/rank_icons/rank_icon_0.png");n=Object(t.jsx)("div",{className:"rankTierContainer",children:Object(t.jsx)("div",{className:"rankMedal","data-hint":c,"data-hint-position":"top",children:Object(t.jsx)("img",{className:"rankMedal-icon",src:l,alt:"icon"})})})}return n},r=function(a){var e=a.map((function(a){return fetch("https://api.opendota.com/api/players/".concat(a.account_id)).then((function(a){return a.json()}))}));Promise.all(e).then((function(a){s(a)}))};return Object(t.jsxs)("div",{className:"member-container",children:[Object(t.jsx)("div",{className:"header",children:Object(t.jsx)("span",{className:"name",children:"CHAOS"})}),Object(t.jsx)("div",{className:"title",children:"Members"}),Object(t.jsxs)(d.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(t.jsx)(j.a,{span:6,children:Object(t.jsx)("div",{className:"col-title",children:"Name"})}),Object(t.jsx)(j.a,{span:6,children:Object(t.jsx)("div",{className:"col-title",children:"Real Name"})}),Object(t.jsx)(j.a,{span:6,children:Object(t.jsx)("div",{className:"col-title",children:"Image"})}),Object(t.jsx)(j.a,{span:6,children:Object(t.jsx)("div",{className:"col-title",children:"Rank"})})]}),Object(t.jsx)(m.a,{orientation:"left"}),n.map((function(a,e){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(d.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(t.jsx)(j.a,{className:"col-title",span:6,children:a&&a.profile&&a.profile.personaname?a.profile.personaname:"Please share data"}),Object(t.jsx)(j.a,{className:"col-title",span:6,children:l[e].name}),Object(t.jsx)(j.a,{className:"col-title",span:6,children:Object(t.jsx)("img",{width:"50",height:"50",src:a&&a.profile&&a.profile.avatar?a.profile.avatar:null})}),Object(t.jsx)(j.a,{className:"col-title",span:6,children:i(a&&a.rank_tier?a.rank_tier:0,a&&a.leaderboard_rank?a.leaderboard_rank:0)})]}),Object(t.jsx)(m.a,{orientation:"left"})]})}))]})};var b=function(){return Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(h,{})})};n(37),n.p;var p=function(a){a&&a instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,t=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(a),t(a),c(a),s(a),i(a)}))};r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(b,{})}),document.getElementById("root")),p()},8:function(a){a.exports=JSON.parse('[{"name":"smokey","account_id":324541117},{"name":"shashank","account_id":113791201},{"name":"aman","account_id":177956334},{"name":"furious_danger","account_id":256823821},{"name":"baba","account_id":249964811},{"name":"chandru","account_id":112151278},{"name":"dilip","account_id":126429150},{"name":"karthik","account_id":1113464181},{"name":"Gundz","account_id":412986423},{"name":"gidda","account_id":1138702699},{"name":"little_spoon","account_id":858430752},{"name":"ranjit","account_id":115489170}]')}},[[38,1,2]]]);
//# sourceMappingURL=main.7a64720c.chunk.js.map