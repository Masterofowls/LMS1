(()=>{var e={};e.id=636,e.ids=[636],e.modules={4753:e=>{e.exports={footer:"Footer_footer__JrJN9"}},6411:e=>{e.exports={header:"Header_header__b6rsY",shrink:"Header_shrink__48enU",nav:"Header_nav__P64p0",link:"Header_link__LSoJl",activeLink:"Header_activeLink__Cn61O",linkHover:"Header_linkHover__AapGR"}},251:(e,r,t)=>{"use strict";t.d(r,{A:()=>n});var i=t(8732),a=t(4753),s=t.n(a);let n=()=>(0,i.jsx)("footer",{className:s().footer,children:(0,i.jsx)("p",{children:"\xa9 2024 My Web App IDE"})})},7529:(e,r,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.d(r,{A:()=>p});var a=t(8732),s=t(2015),n=t(6715),o=t(3220),c=t(1106),l=t.n(c),d=t(6411),u=t.n(d),x=e([o]);o=(x.then?(await x)():x)[0];let p=({onPageChange:e})=>{let[r,t]=(0,s.useState)(!1),i=(0,n.useRouter)(),c=i.pathname;(0,s.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let d=r=>{e(r),i.push(r)};return(0,a.jsx)("header",{className:`${u().header} ${r?u().shrink:""}`,children:(0,a.jsx)("nav",{className:u().nav,role:"navigation",children:["/dashboard","/courses","/chat","/login"].map(e=>(0,a.jsx)(o.motion.div,{whileHover:{scale:1.1,color:"#32a852"},whileTap:{scale:.95},children:(0,a.jsx)(l(),{href:e,className:`${u().link} ${c===e?u().activeLink:""}`,onClick:()=>d(e),children:e.replace("/","").toUpperCase()||"HOME"})},e))})})};i()}catch(e){i(e)}})},3200:(e,r,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.r(r),t.d(r,{default:()=>u});var a=t(8732),s=t(3220);t(9361);var n=t(7529),o=t(251),c=e([s,n]);[s,n]=c.then?(await c)():c;let l={initial:{opacity:0,x:"-50%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"50%"}},d={duration:.3,ease:"easeOut"},u=function({Component:e,pageProps:r,router:t}){return(0,a.jsxs)("div",{className:"layout",children:[(0,a.jsx)(n.A,{onPageChange:e=>{console.log(`Navigating to ${e}`)}})," ",(0,a.jsx)(s.AnimatePresence,{mode:"wait",initial:!1,children:(0,a.jsx)(s.motion.div,{initial:"initial",animate:"animate",exit:"exit",variants:l,transition:d,className:"content",children:(0,a.jsx)(e,{...r})},t.route)}),(0,a.jsx)(o.A,{})]})};i()}catch(e){i(e)}})},9361:()=>{},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},9021:e=>{"use strict";e.exports=require("fs")},7910:e=>{"use strict";e.exports=require("stream")},4075:e=>{"use strict";e.exports=require("zlib")},3220:e=>{"use strict";e.exports=import("framer-motion")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[585,392],()=>t(3200));module.exports=i})();