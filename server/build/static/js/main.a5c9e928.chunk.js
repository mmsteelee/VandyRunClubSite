(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{202:function(e,t,n){},231:function(e,t,n){},232:function(e,t){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},245:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(53),i=n.n(r),s=n(15),o=n.n(s),l=n(27),u=n(11),j=n(17),d=n(294),b=(n(202),n(203),n(204),n(1)),h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"main-wrapper",children:Object(b.jsxs)("div",{className:"main-section",children:[Object(b.jsx)("h1",{className:"cover-heading",children:"Welcome to the Vandy Run Club!"}),Object(b.jsx)("div",{className:"calendar"})]})})})},p=n(282),O=Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),f=n(176),x="https://vurunclub.herokuapp.com",m=n.n(f).a.create({baseURL:x,withCredentials:!0});function g(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"GET",url:"/account/user"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"POST",url:"/account/login",data:{accessToken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"GET",url:"/account/exp"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N,S=n(131),T=n(284),E=n(286),R=n(295),D=n(249),M=n(293),P=n(178),F=n.n(P),G=n(177),B=n.n(G),I=function(){var e=O(),t=Object(a.useContext)(Le),n=t.user,c=t.setUser,r=Object(a.useContext)(Ve),i=(r.cookies,r.setCookie),s=Object(a.useState)("Sign in with your vanderbilt.edu Email"),d=Object(u.a)(s,2),h=d[0],p=d[1],f=Object(j.n)();function x(){return(x=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.access_token,p("Logging into Vandy Run Club!"),e.next=4,w(n).then((function(e){e.data.message?p(e.data.message+". Please try again with a valid vanderbilt.edu email"):(i("token",e.data.token,{path:"/"}),c(e.data.result),f(-1))})).catch((function(e){p("We ran into an issue logging you in. Try again later"),console.log("ERROR: ",e.json)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=Object(S.b)({onSuccess:function(e){return x.apply(this,arguments)}});return Object(b.jsx)("div",{children:Object(b.jsx)(T.a,{component:"main",maxwidth:"xs",children:Object(b.jsxs)(E.a,{className:e.paper,elevation:3,children:[Object(b.jsx)(R.a,{children:n?Object(b.jsx)(B.a,{}):Object(b.jsx)(F.a,{})}),Object(b.jsx)(D.a,{varient:"h5",children:h}),Object(b.jsx)(M.a,{fullWidth:!0,variant:"contained",className:e.googleButton,color:"primary",onClick:function(){return m()},children:"Google Sign In"})]})})})},A=(n(231),function(e){var t=e.handleClick,n=Object(a.useState)(!1),c=Object(u.a)(n,2),r=c[0],i=c[1];return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{className:"left-side",children:Object(b.jsx)("a",{href:"/",children:"VANDERBILT RUN CLUB"})}),Object(b.jsxs)("div",{className:"right-side",children:[Object(b.jsxs)("div",{className:"text",id:r?"hidden":"",children:[Object(b.jsx)("a",{href:"/calendar",children:"SCHEDULE"}),Object(b.jsx)("a",{href:"/meettheteam",children:"MEET THE TEAM"}),Object(b.jsx)("a",{href:"/findyourrun",children:"FIND YOUR RUN"}),Object(b.jsx)("a",{href:"/links",children:"LINKS"}),Object(b.jsx)(M.a,{onClick:t,children:"Logout"})]}),Object(b.jsx)("div",{className:"dropdown-button",children:Object(b.jsx)(M.a,{onClick:function(){return i(!r)},children:"Open"})})]})]})}),Y=(n(232),n(233),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"main-wrapper",children:Object(b.jsx)("div",{className:"links",children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:" Want to further connect with us? Click on the links below!"}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("a",{href:"https://groupme.com/join_group/88408537/MKZan3OD",children:" GROUPME "}),Object(b.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1EDIrVz3ZESnqif_Kfs86KTd_whF9-cg_210EIRAJ2dU/edit",children:" PRACTICE SIGNUPS "}),Object(b.jsx)("a",{href:"https://www.instagram.com/vandyrunclub/?hl=en",children:" INSTAGRAM "}),Object(b.jsx)("a",{href:"https://anchorlink.vanderbilt.edu/organization/runningclub",children:" ANCHORLINK "})]})})]})})})})}),U=n(32),L=(n(234),new Array(0,0,0,0,0,0)),V=Object(a.forwardRef)((function(e,t){var n=e.updateTags,c="black",r="DarkGoldenRod",i=Object(a.useState)(c),s=Object(u.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)(c),d=Object(u.a)(j,2),h=d[0],p=d[1],O=Object(a.useState)(c),f=Object(u.a)(O,2),x=f[0],m=f[1],g=Object(a.useState)(c),v=Object(u.a)(g,2),w=v[0],y=v[1],k=Object(a.useState)(c),C=Object(u.a)(k,2),N=C[0],S=C[1],T=Object(a.useState)(c),E=Object(u.a)(T,2),R=E[0],D=E[1],M=Object(a.useState)([]),P=Object(u.a)(M,2),F=P[0],G=P[1];Object(a.useImperativeHandle)(t,(function(){return{submit:function(){n(F)},clear:function(){B()}}}));var B=function(){l(c),p(c),m(c),y(c),S(c),D(c),G([]),console.info(F);for(var e=0;e<L.length;++e)L[e]=0;console.log("clear tag pressed")};return Object(b.jsxs)("div",{className:"tag-wrapper",children:[Object(b.jsx)("button",{id:"shady",onClick:function(){0===L[0]&&(l(r),G((function(e){return[].concat(Object(U.a)(e),["shady"])})),L[0]=1,console.info(F)),console.log("shady tag pressed")},style:{background:o},value:"Update",children:"Shady"}),Object(b.jsx)("button",{id:"hills",onClick:function(){console.log("hills tag pressed"),0===L[1]&&(p(r),G((function(e){return[].concat(Object(U.a)(e),["hills"])})),L[1]=1,console.info(F))},style:{background:h},children:"Hills"}),Object(b.jsx)("button",{id:"pedestrian",onClick:function(){console.log("pedestrian tag pressed"),0===L[2]&&(m(r),G((function(e){return[].concat(Object(U.a)(e),["pedestrian"])})),L[2]=1,console.info(F))},style:{background:x},children:"Pedestrian Friendly"}),Object(b.jsx)("button",{id:"short",onClick:function(){0===L[3]&&(y(r),G((function(e){return[].concat(Object(U.a)(e),["short"])})),L[3]=1,console.info(F))},style:{background:w},children:"Short"}),Object(b.jsx)("button",{id:"medium",onClick:function(){0===L[4]&&(S(r),G((function(e){return[].concat(Object(U.a)(e),["medium"])})),L[4]=1,console.info(F))},style:{background:N},children:"Medium"}),Object(b.jsx)("button",{id:"long",onClick:function(){0===L[5]&&(D(r),G((function(e){return[].concat(Object(U.a)(e),["long"])})),L[5]=1,console.info(F))},style:{background:R},children:"Long"}),Object(b.jsx)("button",{id:"clear",onClick:B,children:"Clear Selection"})]})})),Z=n(181),W=n(83),_=n(184),z=n(10),H=n(296),X=n(80),J=n(77),K=n(183),q=n(292),Q=n(182),$=n(185),ee=n(84),te=n(85),ne=n(90),ae=n(99),ce=n(120),re=n(179),ie=n(134),se=new te.c({fill:new ne.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ae.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new ce.a({radius:5,stroke:new ae.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new ne.a({color:"rgba(255, 255, 255, 0.2)"})})}),oe=new te.c({fill:new ne.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ae.a({color:"rgba(189, 150, 23, 1.0)",width:4}),image:new ce.a({radius:5,stroke:new ae.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new ne.a({color:"rgba(255, 255, 255, 0.2)"})})}),le=new te.c({text:new re.a({font:"14px Calibri,sans-serif",fill:new ne.a({color:"rgba(255, 255, 255, 1)"}),backgroundFill:new ne.a({color:"rgba(0, 0, 0, 0.7)"}),padding:[3,3,3,3],textBaseline:"bottom",offsetY:-15}),image:new ie.a({radius:8,points:3,angle:Math.PI,displacement:[0,10],fill:new ne.a({color:"rgba(0, 0, 0, 0.7)"})})}),ue=new te.c({text:new re.a({font:"12px Calibri,sans-serif",fill:new ne.a({color:"rgba(255, 255, 255, 1)"}),backgroundFill:new ne.a({color:"rgba(0, 0, 0, 0.4)"}),padding:[2,2,2,2],textAlign:"left",offsetX:15})}),je=new te.c({image:new ce.a({radius:5,stroke:new ae.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new ne.a({color:"rgba(0, 0, 0, 0.4)"})}),text:new re.a({text:"Drag to modify",font:"12px Calibri,sans-serif",fill:new ne.a({color:"rgba(255, 255, 255, 1)"}),backgroundFill:new ne.a({color:"rgba(0, 0, 0, 0.7)"}),padding:[2,2,2,2],textAlign:"left",offsetX:15})}),de=(new te.c({text:new re.a({font:"12px Calibri,sans-serif",fill:new ne.a({color:"rgba(255, 255, 255, 1)"}),backgroundFill:new ne.a({color:"rgba(0, 0, 0, 0.4)"}),padding:[2,2,2,2],textBaseline:"bottom",offsetY:-12}),image:new ie.a({radius:6,points:3,angle:Math.PI,displacement:[0,8],fill:new ne.a({color:"rgba(0, 0, 0, 0.4)"})})}),n(93)),be=0,he=function(e,t,n,a){var c=[se],r=[oe];if(t);var i,s,o=e.getGeometry(),l=o.getType();return n&&n!==l||("Polygon"===l?(i=o.getInteriorPoint(),s=function(e){var t,n,a=Object(ee.a)(e);return a>1e4?(t=Math.round(a/1e6*100)/100,n=Math.round(t/.609)+" mi\xb2"):n=Math.round(100*a)/100+" m\xb2",n}(o),new X.a(o.getCoordinates()[0])):"LineString"===l&&(i=new J.a(o.getLastCoordinate()),s=function(e){var t,n,a,c=Object(ee.c)(e);return c>100?(t=c/1e3,a=Math.round(t/1.609*100)/100+" mi"):(n=c,a=Math.round(3.281*n*100)/100+" ft"),a}(o),be=function(e){var t;return t=Object(ee.c)(e)/1e3,Math.round(t/1.609*100)/100}(o),o)),s&&(le.setGeometry(i),le.getText().setText(s),c.push(le),r.push(le)),a&&"Point"===l&&(N=o,ue.getText().setText(a),c.push(ue)),t?r:c},pe=Object(a.forwardRef)((function(e,t){var n=e.updateMap,c=e.editable,r=void 0===c||c,i=e.points,s=void 0===i?[]:i,o=Object(a.useState)(),l=Object(u.a)(o,2),j=(l[0],l[1]),d=Object(a.useRef)(),h=Object(a.useState)(new K.a({format:new $.a})),p=Object(u.a)(h,2),O=p[0];p[1];Object(a.useImperativeHandle)(t,(function(){return{reset:function(){O.clear()}}}));return Object(a.useEffect)((function(){var e=new X.a(s.map((function(e){return Object(z.e)(e)}))),t=new de.a({name:"Line",geometry:e}),a=new _.a({source:new q.a});O.addFeature(t);var c=new Q.a({source:O,style:function(e){return he(e,!0)}}),i=function(){if(0===s.length)return Object(z.e)([-86.8027,36.1447]);var e=0,t=0;for(var n in s)e+=s[n][0],t+=s[n][1];return Object(z.e)([e/s.length,t/s.length])}(),o=new Z.a({target:d.current,layers:[a,c],view:new W.a({center:i,zoom:15})});o.getView().fit(O.getExtent(),o.getSize()),o.getView().setZoom(o.getView().getZoom()-.5);var l;r?function(){var e="LineString",t="Click to start measuring",a=t;(l=new H.a({source:O,type:e,style:function(t){return he(t,!1,e,a)}})).on("drawstart",(function(){O.clear(),a="Double click to stop drawing the run"})),l.on("drawend",(function(e){je.setGeometry(N),o.once("pointermove",(function(){je.setGeometry()})),function(e){e=e.map((function(e){return Object(z.n)(e)})),n(e,be)}(e.feature.getGeometry().getCoordinates()),a=t})),o.addInteraction(l)}():o.getInteractions().forEach((function(e){return e.setActive(!1)})),j(o)}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{ref:d,className:"map-container"})})})),Oe=(n(235),function(){var e=Object(a.useState)("Fill all required fields before submitting"),t=Object(u.a)(e,2),n=(t[0],t[1],Object(j.n)());return Object(b.jsx)("div",{className:"main-wrapper",children:Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("button",{id:"create",onClick:function(){n("/create")},children:"Create A Run"}),Object(b.jsx)("button",{id:"find",onClick:function(){n("/find")},children:"Find A Run"})]})})}),fe=n(23),xe=n(68);function me(e,t){return ge.apply(this,arguments)}function ge(){return(ge=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"POST",url:"/bio/update/".concat(n),data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){return(ve=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"GET",url:"/bio/"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return(we=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"POST",url:"/bio/new",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(){return(ye=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"DELETE",url:"/bio/delete/".concat(t._id)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(236);var ke=function(e){var t=e.bio,n=Object(a.useContext)(Le).user,c=Object(a.useState)(!1),r=Object(u.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(!1),d=Object(u.a)(j,2),h=d[0],p=d[1],O=Object(a.useState)(!1),f=Object(u.a)(O,2),m=f[0],g=f[1],v=Object(a.useState)("".concat(x,"/image/").concat(t.picture)),w=Object(u.a)(v,2),y=w[0],k=w[1],C=Object(a.useState)({name:t.name,title:t.title,email:t.email,text:t.text,photo:"",_id:t._id}),N=Object(u.a)(C,2),S=N[0],T=N[1];t.email;Object(a.useEffect)((function(){t.name="Matt",p("admin"===n.role)}),[]);Object(a.useEffect)((function(){var e=S.name&&S.title&&S.email&&S.text;g(e)}),[S]);var E=function(){var e=Object(l.a)(o.a.mark((function e(n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(a=new FormData).append("name",S.name),a.append("title",S.title),a.append("email",S.email),a.append("text",S.text),S.photo&&(c=S.photo,a.append("photo",c)),e.next=9,me(a,t._id).then((function(e){t=e.data,k("".concat(x,"/image/").concat(t.picture)),T(t),s(!1)})).catch((function(e){return console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){T(Object(xe.a)(Object(xe.a)({},S),{},Object(fe.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"tasks-container",children:i?Object(b.jsxs)("form",{onSubmit:E,encType:"multipart/form-data",children:[Object(b.jsx)("input",{type:"text",name:"name",defaultValue:t.name,placeholder:"Name",onChange:R}),Object(b.jsx)("input",{type:"text",name:"title",defaultValue:t.title,placeholder:"Exec Title",onChange:R}),Object(b.jsx)("input",{type:"text",name:"text",defaultValue:t.text,placeholder:"Bio",onChange:R}),Object(b.jsx)("input",{type:"text",name:"email",defaultValue:t.email,placeholder:"Email",onChange:R}),Object(b.jsx)("input",{type:"file",name:"photo",accept:".png, .jpg, .jpeg",onChange:function(e){T(Object(xe.a)(Object(xe.a)({},S),{},{photo:e.target.files[0]}))}}),Object(b.jsx)("button",{type:"submit",disabled:!m,children:"Update Bio"}),Object(b.jsx)("button",{type:"button",onClick:function(e){(function(e){return ye.apply(this,arguments)})(t).catch((function(e){return console.log(e)})),window.location.reload()},children:"Delete Bio"}),Object(b.jsx)("button",{type:"button",onClick:function(){return s(!1)},children:"Cancel Edit"})]}):Object(b.jsxs)("div",{className:"bioView",onDoubleClick:function(){h&&s(!0)},children:[Object(b.jsx)("img",{src:y}),Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{className:"bioInfo",children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsx)("div",{className:"exec-title",children:Object(b.jsx)("h1",{children:t.title})}),Object(b.jsx)("div",{className:"email",children:Object(b.jsxs)("a",{href:t.email,children:[" email: ",t.name," "]})}),Object(b.jsx)("p",{children:t.text})]})})})})]})})},Ce=n(291),Ne=n(288),Se=n(287),Te=function(e){var t=e.message,n=e.open,c=e.handleClose,r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(""),j=Object(u.a)(l,2),d=j[0],h=j[1],p=Object(a.useState)(""),O=Object(u.a)(p,2),f=O[0],x=O[1],m=Object(a.useState)(""),g=Object(u.a)(m,2),v=g[0],w=g[1],y=Object(a.useState)(!1),k=Object(u.a)(y,2),C=k[0],N=k[1];Object(a.useEffect)((function(){var e=s.length&&d.length&&f.length&&v.length;N(e)}),[s,d,f,v]);return Object(b.jsx)("div",{className:"new-bio-popup",children:Object(b.jsxs)(Ce.a,{open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(Se.a,{id:"alert-dialog-title",children:t}),Object(b.jsxs)(Ne.a,{children:[Object(b.jsxs)("form",{onSubmit:function(){(function(e){return we.apply(this,arguments)})({name:s,email:d,title:f,text:v,picture:"logo.jpeg"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:[Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("input",{type:"text",name:"title",placeholder:"Exec Title",onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("input",{type:"text",name:"text",placeholder:"Bio",onChange:function(e){return w(e.target.value)}}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"Email",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)(M.a,{type:"Submit",disabled:!C,children:"Submit"})]}),Object(b.jsx)(M.a,{onClick:c,children:"Close"})]})]})})},Ee=(n(237),function(){return Object(b.jsx)("div",{className:"animation-container",children:Object(b.jsx)("div",{id:"preloader",children:Object(b.jsx)("div",{id:"loader"})})})}),Re=(n(238),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(!0),j=Object(u.a)(l,2),d=j[0],h=j[1],p=Object(a.useContext)(Le).user;return Object(a.useEffect)((function(){(function(){return ve.apply(this,arguments)})().then((function(e){c(e.data),h(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsx)("div",{className:"main-wrapper",children:d?Object(b.jsx)(Ee,{}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"pageCover",children:Object(b.jsx)("h1",{children:"MEET THE TEAM!"})}),n.map((function(e){return Object(b.jsx)(ke,{bio:e},e)})),"admin"===p.role&&Object(b.jsx)("button",{onClick:function(){return o(!0)},children:"Add New Bio"}),Object(b.jsx)(Te,{message:"Add Executive Team Bio",open:s,handleClose:function(){o(!1)}})]})})});n(239),n(240);function De(){return(De=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"GET",url:"/runs/".concat(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"GET",url:"/runs/find",params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return(Fe=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({method:"POST",url:"/runs/new",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ge=[[-86.81009726157794,36.146299217317576],[-86.80131438406454,36.15044574144105],[-86.7992112393866,36.14801580890686],[-86.80075254366587,36.13742787171793],[-86.81087733379613,36.13868784177623],[-86.8098680396668,36.14635011068731]],Be=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useState)("Fill all required fields before submitting"),c=Object(u.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(!0),o=Object(u.a)(s,2),l=o[0],j=o[1],d=Object(a.useState)({name:"",distance:0,tags:[],coordinates:[]}),h=Object(u.a)(d,2),p=h[0],O=h[1];return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"main-wrapper-create",children:Object(b.jsxs)("div",{className:"createFeatures",children:[Object(b.jsxs)("div",{className:"tagButtons",children:[Object(b.jsx)("h1",{id:"tagsText",children:"Select the tags that apply to your run"}),Object(b.jsx)(V,{ref:t,updateTags:function(e){console.log(p.name);var t=p;t.tags=e,O(t),console.log("updateTags")}})]}),Object(b.jsxs)("div",{className:"map",children:[Object(b.jsx)("div",{className:"mapBox",children:Object(b.jsx)(pe,{ref:e,updateMap:function(e,t){j(!0),console.log(p.name);var n=p;n.name=p.name,n.coordinates=e,n.distance=t,O(n),console.log("updateMap")},points:Ge})}),Object(b.jsx)("div",{className:"name",children:Object(b.jsx)("input",{id:"namebox",type:"text",name:"name",placeholder:"Name Your Run",value:p.name,onChange:function(e){l?O(Object(xe.a)(Object(xe.a)({},p),{},Object(fe.a)({},e.target.name,e.target.value))):(console.log("draw route first"),O(Object(xe.a)(Object(xe.a)({},p),{},Object(fe.a)({},e.target.name,"Please Draw a Route"))))}})}),Object(b.jsxs)("div",{className:"measuring-tool",children:[Object(b.jsx)("button",{className:"reset-button",onClick:function(){console.log(p.name),e.current.reset(),t.current.clear(),j(!1),O({name:"Please Draw a Route",distance:0,tags:[],coordinates:[]})},children:"Start Over"}),Object(b.jsx)("button",{className:"upload-button",onClick:function(){e.current.reset(),t.current.submit();var n={meta:{name:p.name,distance:p.distance,tags:p.tags},data:{coordinates:p.coordinates.map(String)}};p.coordinates.length||i("Please draw a map before attempting to upload"),p.tags.length||i("Please select tags before uploading a map"),p.name.length||i("Please name your route before uploading"),function(e){return Fe.apply(this,arguments)}(n).then(console.log("Successfull upload"),i("Successfully uploaded run!")).catch((function(e){return console.log(e)})),console.log(p),O({name:"Please Draw a Route",distance:0,tags:[],coordinates:[]}),j(!1)},children:"Upload Route"}),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{id:"routeErrText",children:r})})]})]})]})})})},Ie=(n(241),function(e){var t=e.description,n=Object(a.useState)([]),c=Object(u.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(!0),o=Object(u.a)(s,2),l=o[0],j=o[1],d=t.tags.join(",           ");return Object(a.useEffect)((function(){(function(e){return De.apply(this,arguments)})(t.data_id).then((function(e){var t=e.data;t=t.map((function(e){var t=e.split(",");return[parseFloat(t[0]),parseFloat(t[1])]})),i(t),j(!1)}))}),[]),Object(b.jsxs)("div",{className:"run-returns",children:[Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsxs)("p",{children:["Distance: ",t.distance]}),Object(b.jsx)("div",{className:"array",children:Object(b.jsxs)("p",{children:["Tags: ",d]})})]}),Object(b.jsx)("div",{className:"map-picture",children:l?Object(b.jsx)(Ee,{}):Object(b.jsx)(pe,{points:r,editable:!1})})]})}),Ae=(n(242),function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),c=Object(u.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(!1),j=Object(u.a)(s,2),d=j[0],h=j[1],p=Object(a.useState)({minDistance:0,maxDistance:100,tags:[]}),O=Object(u.a)(p,2),f=O[0],x=O[1],m=Object(a.useRef)();function g(){return(g=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(f),h(!0),m.current.submit(),!(0!==f.maxDistance&&!isNaN(f.maxDistance)&&!isNaN(f.minDistance)&&f.tags.length>0)){e.next=9;break}return e.next=7,Me(f).then((function(e){i(e.data),h(!1)})).catch((function(e){return console.log(e)}));case 7:e.next=9;break;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"main-wrapper-find",children:[Object(b.jsx)("h1",{id:"title",children:"Find a run "}),Object(b.jsx)("div",{className:"tags-find",children:Object(b.jsx)(V,{ref:m,updateTags:function(e){var t=f;t.tags=e,x(t)}})}),Object(b.jsxs)("div",{className:"distance-range",children:["Min Distance:",Object(b.jsx)("input",{type:"text",placeholder:f.minDistance,onChange:function(e){var t=e.target.value;if(!t||t.match(/^\d{1,}(\.\d{0,4})?$/)){var n=f;n.minDistance=parseFloat(t),x(n)}}}),"Max Distance:",Object(b.jsx)("input",{type:"text",placeholder:f.maxDistance,onChange:function(e){var t=e.target.value;if(!t||t.match(/^\d{1,}(\.\d{0,4})?$/)){var n=f;n.maxDistance=parseFloat(t),x(n)}}}),Object(b.jsx)("button",{onClick:function(){return g.apply(this,arguments)},children:"Search"})]}),Object(b.jsx)("div",{children:d?Object(b.jsx)(Ee,{}):r.map((function(e){return Object(b.jsx)(Ie,{description:e},e.name)}))})]})})}),Ye=(n(243),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"calendar",children:Object(b.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showDate=1&showNav=1&title=Run%20Club%20Events&src=dnVydW5jbHViYXBwbGljYXRpb25AZ21haWwuY29t&src=MjY0MGJlOWJjZDM5YmRjYjgxNDZhMTUwOGEyZDFmNGY3MGQxYzgxMzQ1ZDBkZDlhOTkzOWRmMmRjYmZmNTg2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%230B8043",width:"900",height:"500",frameborder:"0",scrolling:"no"})})})}),Ue=function(e){var t=e.message,n=e.open,a=e.handleClose;return Object(b.jsx)("div",{className:"yes-no-dialog",children:Object(b.jsxs)(Ce.a,{open:n,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(Se.a,{id:"alert-dialog-title",children:t}),Object(b.jsx)(Ne.a,{children:Object(b.jsx)(M.a,{onClick:a,color:"primary",children:"Take Me There!"})})]})})},Le=Object(a.createContext)(null),Ve=Object(a.createContext)(null);function Ze(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(d.a)(["name"]),i=Object(u.a)(r,3),s=i[0],p=i[1],O=i[2],f=Object(a.useState)(!1),x=Object(u.a)(f,2),m=x[0],v=x[1],w=Object(a.useState)(!0),y=Object(u.a)(w,2),C=y[0],N=y[1];function S(){O("token"),c(null),v(!1)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){return c(e.data)})).catch((function(e){return console.log("ERROR: ",e.json)}));case 2:N(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){console.log(e.data),setTimeout((function(){return v(!0)}),1e3*e.data.exp+1e3)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(Ve.Provider,{value:{cookies:s,setCookie:p},children:Object(b.jsxs)(Le.Provider,{value:{user:n,setUser:c},children:[C?Object(b.jsx)(Ee,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"main-wrapper",children:n&&Object(b.jsx)(A,{handleClick:S})}),Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/auth",element:Object(b.jsx)(I,{})}),Object(b.jsx)(j.b,{exact:!0,path:"/",element:n?Object(b.jsx)(h,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/links",element:n?Object(b.jsx)(Y,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/findyourrun",element:n?Object(b.jsx)(Oe,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/meettheteam",element:n?Object(b.jsx)(Re,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/createarun",element:n?Object(b.jsx)(Be,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/findarun",element:n?Object(b.jsx)(Ae,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/calendar",element:n?Object(b.jsx)(Ye,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/create",element:n?Object(b.jsx)(Be,{}):Object(b.jsx)(j.a,{to:"/auth"})}),Object(b.jsx)(j.b,{exact:!0,path:"/find",element:n?Object(b.jsx)(Ae,{}):Object(b.jsx)(j.a,{to:"/auth"})})]})]}),Object(b.jsx)(Ue,{message:"Session Expired. Please log back in.",open:m,handleClose:S})]})})})}var We=n(289),_e=n(290),ze=(n(244),n(245),n(102));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ze.a,{children:Object(b.jsx)(S.a,{clientId:"573133251068-e1fd6sb5g36l0ktfd5t8ok00kremvo9i.apps.googleusercontent.com",children:Object(b.jsxs)(We.a,{children:[Object(b.jsx)(_e.a,{}),Object(b.jsx)(Ze,{})]})})})}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.a5c9e928.chunk.js.map