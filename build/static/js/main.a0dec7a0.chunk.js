(this.webpackJsonpjchemi=this.webpackJsonpjchemi||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),i=(a(103),a(104),a(39)),j=a(70),o=a(176),d=a(175),l=a(180),b=a(181),h=a(178),x=a(167),O=a(168),m=a(170),u=a(89),p=a.n(u),f=a(90),g=a.n(f),v=a(177),y=a(65),k=a(153),w=a(22),C=a(169),B=a(173),N=a(174),S=a(86),F=a.n(S),I=a(87),W=a.n(I),L=a(64),P=a.n(L),H=a(88),M=a.n(H),_=a(171),E=a(172),R=a(4);function T(){return Object(R.jsx)(R.Fragment,{children:"this is home page"})}function z(){return Object(R.jsx)("div",{children:"this is about page"})}var A=a(156),D=a(157),Y=a(158),G=a(159),J=a(160),q=a(73);q.a.initializeApp({apiKey:"AIzaSyB-7LeElka_nAHqWkB_PNVWhZ3gBYTrx5Y",authDomain:"jchemi-11e8d.firebaseapp.com",projectId:"jchemi-11e8d",storageBucket:"jchemi-11e8d.appspot.com",messagingSenderId:"898389540363",appId:"1:898389540363:web:bdc3b642fe430e6dedd10e"});var K=q.a.firestore(),U=a(15),V=a(32),Z=Object(k.a)((function(e){return{cardRoot:{maxWidth:345}}}));function Q(e){var t=n.a.useState(""),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(U.f)().course;n.a.useEffect((function(){K.collection("courses").doc(r).collection("chapter").get().then((function(e){var t=[];e.docs.map((function(e){var a={year:e.data().year,id:e.id,no:e.data().no,chapter:e.data().chapter,class_started:e.data().class_started,name:e.data().name,total:e.data().total,running:e.data().running,tags:e.data().tags};t.push(a)})),s(t)}))}),Object(U.f)().course);var j=function(e){var t=[];return c.map((function(a){a.year===e&&t.push(a)})),t},o=function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(y.a,{variant:"h4",gutterBottom:!0,children:"primary"===e.data[0].year?"1st Year":"2nd Year"}),Object(R.jsxs)(A.a,{container:!0,spacing:4,children:[Object(R.jsx)(A.a,{item:!0,xs:0,md:1}),Object(R.jsx)(A.a,{item:!0,container:!0,spacing:3,xs:12,md:10,children:(t=e.data,t.sort((function(e,t){return e.no-t.no})),t).map((function(e){return Object(R.jsx)(A.a,{item:!0,xs:10,md:4,lg:3,children:Object(R.jsx)(D.a,{className:Z.cardRoot,children:Object(R.jsx)(Y.a,{children:Object(R.jsx)(V.b,{to:"/classes/".concat(r,"/").concat(e.id),children:Object(R.jsxs)(G.a,{children:[Object(R.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.chapter+" - "+e.name}),Object(R.jsxs)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:["Class Started: ",e.class_started,Object(R.jsx)("br",{}),"Total Class: ",e.total,Object(R.jsx)("br",{}),"Status: ",e.running?"Running":"Finished",Object(R.jsx)("br",{})]})]})})})})},e.id)}))}),Object(R.jsx)(A.a,{item:!0,xs:0,md:1})]})]});var t};return Object(R.jsx)(R.Fragment,{children:""!==c?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(o,{data:j("primary")}),j("secondary")?Object(R.jsx)(o,{data:j("secondary")}):""]}):Object(R.jsx)("div",{style:{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(R.jsx)(J.a,{style:{}})})})}var X=a(96),$=a(162),ee=a(166),te=a(165),ae=a(161),ce=a(163),ne=a(164),se=[{id:"no",label:"No.",minWidth:50},{id:"name",label:"Topics",minWidth:150},{id:"date",label:"Date",minWidth:60},{id:"link",label:"Links",minWidth:50}],re=Object(k.a)({root:{width:"100%"},container:{maxHeight:440}});function ie(){var e=n.a.useState(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(U.f)(),r=s.course,j=s.id;return n.a.useEffect((function(){K.collection("courses").doc(r).collection("chapter").doc(j).collection("classes").get().then((function(e){var t=[];e.docs.map((function(e){var a={type:e.data().type,id:e.id,no:e.data().no,date:e.data().date,link:e.data().link,name:e.data().name};t.push(a)})),c(t)}))}),[]),Object(R.jsx)(R.Fragment,{children:""!==a?Object(R.jsx)(X.a,{className:re.root,children:Object(R.jsx)(ae.a,{className:re.container,children:Object(R.jsxs)($.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(R.jsx)(ce.a,{children:Object(R.jsx)(ne.a,{children:se.map((function(e){return Object(R.jsx)(te.a,{align:"center",style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(R.jsx)(ee.a,{children:a.map((function(e){return Object(R.jsx)(ne.a,{hover:!0,role:"checkbox",tabIndex:-1,children:se.map((function(t){var a=e[t.id];return Object(R.jsx)(te.a,{align:"center",children:"link"===t.id?Object(R.jsx)("a",{target:"_blank",href:a,children:"Class Link"}):a},t.id)}))},e.no)}))})]})})}):Object(R.jsx)("div",{style:{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(R.jsx)(J.a,{style:{}})})})}var je=Object(k.a)((function(e){return{root:{display:"flex"},drawer:Object(j.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:{zIndex:e.zIndex.drawer+1},menuButton:Object(j.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},closeMenuButton:{marginRight:"auto",marginLeft:0}}}));var oe=function(){var e=n.a.useState(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=je(),r=Object(w.a)(),j=n.a.useState(!1),u=Object(i.a)(j,2),f=u[0],k=u[1];function S(){k(!f)}var I=Object(R.jsx)("div",{children:Object(R.jsxs)(x.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(R.jsxs)(O.a,{button:!0,divider:!0,component:V.c,to:"/",children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(F.a,{})}),Object(R.jsx)(m.a,{primary:"Home"})]},"home"),Object(R.jsxs)(O.a,{button:!0,onClick:function(){c(!a)},children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(W.a,{})}),Object(R.jsx)(m.a,{primary:"Courses"}),a?Object(R.jsx)(_.a,{}):Object(R.jsx)(E.a,{})]}),Object(R.jsx)(B.a,{}),Object(R.jsxs)(N.a,{in:a,timeout:"auto",unmountOnExit:!0,children:[Object(R.jsxs)(x.a,{children:[Object(R.jsxs)(O.a,{button:!0,component:V.c,to:"/chapter/hsc21",children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(P.a,{})}),Object(R.jsx)(m.a,{primary:"HSC 21"})]},"hsc21"),Object(R.jsxs)(O.a,{button:!0,component:V.c,to:"/chapter/hsc22",children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(P.a,{})}),Object(R.jsx)(m.a,{primary:"HSC 22"})]},"hsc22"),Object(R.jsxs)(O.a,{button:!0,component:V.c,to:"/chapter/master",children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(P.a,{})}),Object(R.jsx)(m.a,{primary:"Master Group"})]},"master")]}),Object(R.jsx)(B.a,{})]}),Object(R.jsxs)(O.a,{button:!0,component:V.c,to:"/about",children:[Object(R.jsx)(C.a,{children:Object(R.jsx)(M.a,{})}),Object(R.jsx)(m.a,{primary:"About"})]},"about")]})});return Object(R.jsx)(V.a,{children:Object(R.jsxs)("div",{className:s.root,children:[Object(R.jsx)(d.a,{}),Object(R.jsx)(o.a,{position:"fixed",color:"secondary",className:s.appBar,children:Object(R.jsxs)(v.a,{children:[Object(R.jsx)(h.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:S,className:s.menuButton,children:Object(R.jsx)(p.a,{})}),Object(R.jsx)(y.a,{variant:"h6",noWrap:!0,children:"Logo"})]})}),Object(R.jsxs)("nav",{className:s.drawer,children:[Object(R.jsx)(b.a,{smUp:!0,implementation:"css",children:Object(R.jsxs)(l.a,{variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:f,onClose:S,classes:{paper:s.drawerPaper},ModalProps:{keepMounted:!0},children:[Object(R.jsx)(h.a,{onClick:S,className:s.closeMenuButton,children:Object(R.jsx)(g.a,{})}),I]})}),Object(R.jsx)(b.a,{xsDown:!0,implementation:"css",children:Object(R.jsxs)(l.a,{className:s.drawer,variant:"permanent",classes:{paper:s.drawerPaper},children:[Object(R.jsx)("div",{className:s.toolbar}),I]})})]}),Object(R.jsxs)("div",{className:s.content,children:[Object(R.jsx)("div",{className:s.toolbar}),Object(R.jsxs)(U.c,{children:[Object(R.jsx)(U.a,{exact:!0,path:"/",children:Object(R.jsx)(T,{})}),Object(R.jsx)(U.a,{path:"/about",children:Object(R.jsx)(z,{})}),Object(R.jsx)(U.a,{path:"/chapter/:course",children:Object(R.jsx)(Q,{})}),Object(R.jsx)(U.a,{path:"/classes/:course/:id",children:Object(R.jsx)(ie,{})}),Object(R.jsx)(U.a,{children:Object(R.jsx)(R.Fragment,{children:"oops page not found"})})]})]})]})})},de=a(93),le=a(179),be=a(91),he=a.n(be),xe=a(92),Oe=a.n(xe),me=Object(de.a)({palette:{primary:{main:he.a[500]},secondary:{main:Oe.a[500]}}});var ue=function(){return Object(R.jsx)(le.a,{theme:me,children:Object(R.jsx)(oe,{})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,182)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(ue,{})}),document.getElementById("root")),pe()}},[[115,1,2]]]);
//# sourceMappingURL=main.a0dec7a0.chunk.js.map