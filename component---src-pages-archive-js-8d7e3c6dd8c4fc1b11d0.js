"use strict";(self.webpackChunkv1=self.webpackChunkv1||[]).push([[616],{4228:function(e,t,a){a.r(t);var l=a(1504),r=a(8236),n=a(2044),i=a(6600),d=a(5668),c=a(3436),m=a(6208),o=a(1792);const s=n.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-m3t4e8-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(e=>{let{theme:t}=e;return t.mixins.flexCenter}));t.default=e=>{let{location:t,data:a}=e;const n=a.allMarkdownRemark.edges,h=(0,l.useRef)(null),p=(0,l.useRef)(null),u=(0,l.useRef)([]),f=(0,o.CW)();return(0,l.useEffect)((()=>{f||(d.c.reveal(h.current,(0,i.srConfig)()),d.c.reveal(p.current,(0,i.srConfig)(200,0)),u.current.forEach(((e,t)=>d.c.reveal(e,(0,i.srConfig)(10*t)))))}),[]),l.createElement(c._W,{location:t},l.createElement(r.S,{title:"Archive"}),l.createElement("main",null,l.createElement("header",{ref:h},l.createElement("h1",{className:"big-heading"},"Archive"),l.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),l.createElement(s,{ref:p},l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Year"),l.createElement("th",null,"Title"),l.createElement("th",{className:"hide-on-mobile"},"Made at"),l.createElement("th",{className:"hide-on-mobile"},"Built with"),l.createElement("th",null,"Link"))),l.createElement("tbody",null,n.length>0&&n.map(((e,t)=>{let{node:a}=e;const{date:r,github:n,external:i,ios:d,android:c,title:o,tech:s,company:h}=a.frontmatter;return l.createElement("tr",{key:t,ref:e=>u.current[t]=e},l.createElement("td",{className:"overline year"},""+new Date(r).getFullYear()),l.createElement("td",{className:"title"},o),l.createElement("td",{className:"company hide-on-mobile"},h?l.createElement("span",null,h):l.createElement("span",null,"—")),l.createElement("td",{className:"tech hide-on-mobile"},(null==s?void 0:s.length)>0&&s.map(((e,t)=>l.createElement("span",{key:t},e,"",t!==s.length-1&&l.createElement("span",{className:"separator"},"·"))))),l.createElement("td",{className:"links"},l.createElement("div",null,i&&l.createElement("a",{href:i,"aria-label":"External Link"},l.createElement(m.GW,{name:"External"})),n&&l.createElement("a",{href:n,"aria-label":"GitHub Link"},l.createElement(m.GW,{name:"GitHub"})),d&&l.createElement("a",{href:d,"aria-label":"Apple App Store Link"},l.createElement(m.GW,{name:"AppStore"})),c&&l.createElement("a",{href:c,"aria-label":"Google Play Store Link"},l.createElement(m.GW,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-8d7e3c6dd8c4fc1b11d0.js.map