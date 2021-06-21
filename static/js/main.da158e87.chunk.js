(this["webpackJsonprick-manager"]=this["webpackJsonprick-manager"]||[]).push([[0],{902:function(e,t,n){},904:function(e,t,n){},905:function(e,t,n){"use strict";n.r(t);var c,a=n(954),r=n(1),i=n.n(r),o=n(52),s=n.n(o),l=n(112),u=n(134),d=n.n(u),j=n(959),b=n(7),O=n(376),h=n(926),f=n(927),x=n(357),p=n(924),m=n(218),v=n(928),g=n(374),w=n(929),k=n(271),y=n(17),C=n(270),S=n(4),A=function(e){var t=Object(O.c)().toggleColorMode,n=Object(O.d)("dark","light"),c=Object(O.d)(C.a,C.b);return Object(S.jsx)(p.a,Object(y.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(S.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))};!function(e){e.Calendar="calendar",e.List="list"}(c||(c={}));var z="rick-manager-view-mode",D=function(e){var t=e.viewMode,n=e.onChangeViewMode,a=e.onAddNote,r=Object(O.d)("primary.500","primary.300"),i=Object(O.d)("white","gray.800");return Object(S.jsxs)(h.a,{as:"nav",p:2,justify:"space-between",bg:r,color:i,position:"fixed",top:"0",left:"0",right:"0",zIndex:"1",boxShadow:"sm",children:[Object(S.jsx)(f.a,{children:Object(S.jsxs)(x.a,{isAttached:!0,variant:"solid",colorScheme:"accent",children:[Object(S.jsx)(p.a,{borderRadius:"md",isActive:t===c.Calendar,"aria-label":"Show calendar",icon:Object(S.jsx)(m.a,{as:k.a}),onClick:function(){return n(c.Calendar)}}),Object(S.jsx)(p.a,{borderRadius:"md",isActive:t===c.List,"aria-label":"Show list",icon:Object(S.jsx)(m.a,{as:k.b}),onClick:function(){return n(c.List)}})]})}),Object(S.jsx)(f.a,{p:"2",children:Object(S.jsx)(v.a,{size:"md",children:"Rick Manager"})}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(A,{mr:"2"}),Object(S.jsx)(g.a,{leftIcon:Object(S.jsx)(w.a,{}),colorScheme:"accent",onClick:a,children:"Tarea"})]})]})};function I(){return Object(S.jsx)(f.a,{textAlign:"center",fontSize:"xl",pt:"56px",children:"TODO: Calendario"})}var R=n(32),T=n(19),F=n.n(T),E=n(97),B=n(33),L=n(950),M=n(947),q=n(956),P=n(930);var N,W,V=n(98),Y=n(214),H=n(210),J=new(function(e){Object(Y.a)(n,e);var t=Object(H.a)(n);function n(){var e;return Object(V.a)(this,n),(e=t.call(this,"RickManagerDatabase")).subjects=void 0,e.tasks=void 0,e.version(2).stores({subjects:"++id, name",tasks:"++id, subjectId, dueDate"}),e.subjects=e.table("subjects"),e.tasks=e.table("tasks"),e}return n}(n(358).a));!function(e){e.Idle="idle",e.Loading="loading",e.Error="error"}(N||(N={})),function(e){e.Begin="begin",e.Commit="commit",e.Error="error"}(W||(W={}));var U={state:N.Idle,error:void 0},_=function(e,t){switch(t.type){case W.Begin:return Object(y.a)(Object(y.a)({},e),{},{state:N.Loading,error:void 0});case W.Commit:return Object(y.a)(Object(y.a)({},e),{},{state:N.Idle,error:void 0});case W.Error:return Object(y.a)(Object(y.a)({},e),{},{state:N.Error,error:t.payload})}};function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=Object(r.useReducer)(_,U),a=Object(b.a)(c,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){J.transaction("r",t,Object(B.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:W.Begin}),t.next=3,e(J);case 3:o({type:W.Commit});case 4:case"end":return t.stop()}}),t)})))).catch((function(e){o({type:W.Error,payload:e})}))}),n),[i.state,i.error]}function $(){return{bg:Object(O.d)("primary.200","primary.500"),color:Object(O.d)("gray.800","white")}}var K=function(e){return[Object(O.d)(e?"gray.100":"white",e?"gray.800":"gray.700"),Object(O.d)("gray.50","gray.800")]},Q=function(e){var t=e.name,n=e.color,c=e.count,a=void 0===c?0:c,r=e.isActive,i=void 0!==r&&r,o=e.onClick,s=K(i),l=Object(b.a)(s,2),u=l[0],d=l[1];return Object(S.jsx)(f.a,{py:3,borderBottomWidth:"1px",bg:u,borderLeft:"8px solid ".concat(n),borderRadius:"none",as:"button",display:"block",w:"100%",onClick:o,textAlign:"left",whiteSpace:"normal",_hover:{bg:d},children:Object(S.jsxs)(v.a,{fontSize:"lg",px:2,children:[t,a>0&&Object(S.jsx)(P.a,{colorScheme:"accent",ml:"1",borderRadius:"full",py:1,px:2,float:"right",children:a})]})})},X=n(158),Z=n(931),ee=n(932),te=n(371),ne=function(e){var t=e.onSubmit,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useState)(e),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useCallback)((function(e){return a(e.target.value)}),[]);return[c,i,a]}(""),c=Object(b.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(),s=Object(b.a)(o,2),l=s[0],u=s[1],d=Object(r.useCallback)((function(e){return u(e.hex)}),[]);return Object(S.jsxs)(f.a,{p:3,borderBottomWidth:"1px",children:[Object(S.jsxs)(X.a,{id:"form-name",isRequired:!0,mb:3,children:[Object(S.jsx)(Z.a,{children:"Nombre"}),Object(S.jsx)(ee.a,{placeholder:"Nombre de la materia",value:a,onChange:i})]}),Object(S.jsx)(Z.a,{children:"Color"}),Object(S.jsx)(f.a,{py:1,mb:4,children:Object(S.jsx)(te.a,{color:l,onChange:d,width:"100%"})}),Object(S.jsx)(g.a,{colorScheme:"primary",type:"button",disabled:!l||!a,onClick:function(){return t({name:a,color:l||"white"})},children:"Agregar"})]})},ce=n(84),ae=n(961),re=n(88),ie=n(130),oe=n.n(ie),se=n(198),le=n.n(se),ue=n(933),de=n(934),je=n(936),be=n(937),Oe=n(963),he=n(938),fe=n(960),xe=n(940),pe=n(362),me=n.n(pe),ve=n(958),ge=n(935);function we(e){return e["data-sourcepos"]?{"data-sourcepos":e["data-sourcepos"]}:{}}var ke={p:function(e){var t=e.children;return Object(S.jsx)(ue.a,{mb:2,children:t})},em:function(e){var t=e.children;return Object(S.jsx)(ue.a,{as:"em",children:t})},blockquote:function(e){var t=e.children;return Object(S.jsx)(de.a,{as:"blockquote",p:2,children:t})},code:function(e){var t=e.inline,n=e.children,c=e.className;if(t)return Object(S.jsx)(de.a,{p:2,children:n});var a=null===c||void 0===c?void 0:c.replace("language-","");return Object(S.jsx)(ve.a,{style:ge.a,language:a,showLineNumbers:!0,children:n})},del:function(e){var t=e.children;return Object(S.jsx)(ue.a,{as:"del",children:t})},hr:function(e){return Object(S.jsx)(je.a,{})},a:be.a,img:Oe.a,text:function(e){var t=e.children;return Object(S.jsx)(ue.a,{as:"span",children:t})},ul:function(e){var t=e.ordered,n=e.children,c=e.depth,a=we(e),r=he.c,i="disc";return t&&(r=he.b,i="decimal"),1===c&&(i="circle"),Object(S.jsx)(r,Object(y.a)(Object(y.a)({spacing:2,as:t?"ol":"ul",styleType:i,pl:4},a),{},{children:n}))},ol:function(e){var t=e.ordered,n=e.children,c=e.depth,a=we(e),r=he.c,i="disc";return t&&(r=he.b,i="decimal"),1===c&&(i="circle"),Object(S.jsx)(r,Object(y.a)(Object(y.a)({spacing:2,as:t?"ol":"ul",styleType:i,pl:4},a),{},{children:n}))},li:function(e){var t=e.children,n=e.checked,c=null;return null!==n&&void 0!==n&&(c=Object(S.jsx)(fe.a,{isChecked:n,isReadOnly:!0,children:t})),Object(S.jsx)(he.a,Object(y.a)(Object(y.a)({},we(e)),{},{listStyleType:null!==n?"none":"inherit",children:c||t}))},heading:function(e){var t=e.level,n=e.children;return Object(S.jsx)(v.a,Object(y.a)(Object(y.a)({my:4,as:"h".concat(t),size:["2xl","xl","lg","md","sm","xs"]["".concat(t-1)]},we(e)),{},{children:n}))},pre:function(e){var t=e.children;return Object(S.jsx)(de.a,Object(y.a)(Object(y.a)({},we(e)),{},{children:t}))},table:xe.a,thead:xe.e,tbody:xe.b,tr:xe.f,td:xe.c,th:xe.d};function ye(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n={p:ke.p,em:ke.em,blockquote:ke.blockquote,code:ke.code,del:ke.del,hr:ke.hr,a:ke.a,img:ke.img,text:ke.text,ul:ke.ul,ol:ke.ol,li:ke.li,h1:ke.heading,h2:ke.heading,h3:ke.heading,h4:ke.heading,h5:ke.heading,h6:ke.heading,pre:ke.pre,table:ke.table,thead:ke.thead,tbody:ke.tbody,tr:ke.tr,td:ke.td,th:ke.th};return e&&t?me()(n,e):n}var Ce=ye(),Se=n(941),Ae=i.a.forwardRef((function(e,t){var n=e.value,c=e.onChange,a=Object(O.d)("gray.50","gray.900");return Object(S.jsx)(Se.a,{placeholder:"Comienza a escribir",ref:t,isRequired:!0,focusBorderColor:"none",rows:10,onChange:function(e){return c(e.target.value)},value:n,fontFamily:"monospace",bgColor:a,onInput:function(){(null===t||void 0===t?void 0:t.current)&&(t.current.style.height="",t.current.style.height=Math.max(t.current.scrollHeight,160)+8+"px")}})})),ze=i.a.forwardRef((function(e,t){var n=e.value,c=e.onChange;return Object(S.jsxs)(ae.a,{spacing:4,align:"top",mb:4,children:[Object(S.jsx)(f.a,{flex:"1",children:Object(S.jsx)(Ae,{value:n,onChange:c,ref:t})}),Object(S.jsx)(f.a,{flex:"1",children:Object(S.jsx)(oe.a,{plugins:[le.a],children:n,components:Ce})})]})})),De=i.a.forwardRef((function(e,t){var n=Object(re.c)("content"),c=Object(b.a)(n,3),a=c[0],r=c[2];return Object(S.jsx)(ze,{value:a.value,onChange:r.setValue,ref:t})})),Ie=n(942),Re=function(){var e=Object(re.c)("subjectId"),t=Object(b.a)(e,3),n=t[0],c=t[2],a=Object(r.useState)([]),i=Object(b.a)(a,2),o=i[0],s=i[1];G(function(){var e=Object(B.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.subjects.orderBy("id").toArray();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[J.subjects],[]);return Object(S.jsxs)(X.a,{id:"form-subject",flex:"1",children:[Object(S.jsx)(Z.a,{children:"Materia"}),Object(S.jsx)(Ie.a,Object(y.a)(Object(y.a)({placeholder:"Selecciona la materia",required:!0},n),{},{onChange:function(e){return c.setValue(+e.target.value)},children:o.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))}))]})},Te=function(){var e=Object(re.c)("dueDate"),t=Object(b.a)(e,3),n=t[0],c=t[2];return Object(S.jsxs)(X.a,{flex:"1",children:[Object(S.jsx)(Z.a,{htmlFor:"form-due-date",children:"Fecha de entrega"}),Object(S.jsx)(d.a,{id:"form-due-date",selected:n.value,onChange:c.setValue,showPopperArrow:!0,locale:"es",showTimeSelect:!0,timeFormat:"p",timeIntervals:15,dateFormat:"Pp"})]})},Fe={content:"",dueDate:new Date,subjectId:0},Ee=function(e){var t=e.onClose,n=e.isOpen,c=e.onTaskAdded,a=Object(r.useRef)(),i=function(){var e=Object(B.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.transaction("rw",J.tasks,Object(B.a)(F.a.mark((function e(){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(y.a)(Object(y.a)({},t),{},{createdAt:new Date,finished:!1}),e.next=3,J.tasks.add(n);case 3:a=e.sent,c(Object(y.a)({id:a},n));case 5:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(ce.a,{onClose:t,size:"xl",isOpen:n,closeOnOverlayClick:!1,initialFocusRef:a,scrollBehavior:"outside",children:[Object(S.jsx)(ce.g,{}),Object(S.jsxs)(ce.d,{maxW:"72rem",children:[Object(S.jsx)(ce.f,{children:"Nueva Tarea"}),Object(S.jsx)(ce.c,{}),Object(S.jsx)(re.b,{initialValues:Fe,onSubmit:i,children:function(){return Object(S.jsxs)(re.a,{children:[Object(S.jsxs)(ce.b,{children:[Object(S.jsx)(De,{ref:a}),Object(S.jsxs)(ae.b,{direction:["column","row"],spacing:4,children:[Object(S.jsx)(Re,{}),Object(S.jsx)(Te,{})]})]}),Object(S.jsx)(ce.e,{children:Object(S.jsx)(g.a,{colorScheme:"primary",type:"submit",children:"Guardar"})})]})}})]})]})},Be=n(957),Le=n(944),Me=n(945),qe=n(946),Pe=function(e){var t=e.content,n=e.dueDate,c=e.finished,a=e.onClick,r=e.isActive,i=K(r),o=Object(b.a)(i,2),s=o[0],u=o[1];return Object(S.jsxs)(f.a,{py:3,borderBottomWidth:"1px",bg:s,borderRadius:"none",as:"button",display:"block",w:"100%",p:4,onClick:a,textAlign:"left",whiteSpace:"normal",_hover:{bg:u},children:[Object(S.jsx)(f.a,{maxH:"8rem",overflow:"hidden",mb:2,children:Object(S.jsx)(oe.a,{children:t})}),Object(S.jsxs)(ue.a,{fontStyle:"italic",color:"accent.400",fontSize:"sm",mb:1,children:[Object(S.jsx)(Le.a,{})," Entrega"," ",Object(Be.a)(n,{locale:l.a,addSuffix:!0})]}),Object(S.jsxs)(ue.a,{fontStyle:"italic",color:c?"green.600":"gray.600",fontSize:"sm",children:[c?Object(S.jsx)(Me.a,{}):Object(S.jsx)(qe.a,{})," ",c?"Finalizado":"Pendiente"]})]})},Ne=n(948),We=n(949),Ve=function(e){var t=e.title,n=e.text,c=e.onClick,a=Object(M.a)(),o=a.isOpen,s=a.onOpen,l=a.onClose,u=i.a.useRef(),d=Object(r.useCallback)((function(){l(),c()}),[l,c]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a,{"aria-label":"Delete task",icon:Object(S.jsx)(Ne.a,{}),colorScheme:"red",variant:"outline",onClick:s}),Object(S.jsx)(We.a,{isOpen:o,leastDestructiveRef:u,onClose:l,children:Object(S.jsx)(ce.g,{children:Object(S.jsxs)(We.b,{children:[Object(S.jsx)(ce.f,{fontSize:"lg",fontWeight:"bold",children:t}),Object(S.jsx)(ce.b,{children:n}),Object(S.jsxs)(ce.e,{children:[Object(S.jsx)(g.a,{ref:u,onClick:l,children:"Cancelar"}),Object(S.jsx)(g.a,{colorScheme:"red",onClick:d,ml:3,children:"Eliminar"})]})]})})})]})},Ye=function(e){var t=e.selectedId,n=e.onSelect,c=Object(r.useState)([]),a=Object(b.a)(c,2),i=a[0],o=a[1],s=Object(r.useState)(!1),l=Object(b.a)(s,2),u=l[0],d=l[1],j=Object(M.a)(),O=j.isOpen,x=j.onToggle,m=j.onClose,g=$(),k=g.bg,C=g.color,A=Object(q.a)(),z=G(function(){var e=Object(B.a)(F.a.mark((function e(t){var n,c,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.subjects.orderBy("id").toArray();case 2:n=e.sent,c=Object(E.a)(n),e.prev=4,c.s();case 6:if((a=c.n()).done){e.next=13;break}return r=a.value,e.next=10,t.tasks.where("subjectId").equals(r.id).and((function(e){return e.dueDate>new Date&&!e.finished})).count();case 10:r.count=e.sent;case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),c.e(e.t0);case 18:return e.prev=18,c.f(),e.finish(18);case 21:o(n);case 22:case"end":return e.stop()}}),e,null,[[4,15,18,21]])})));return function(t){return e.apply(this,arguments)}}(),[J.subjects,J.tasks],[u]),D=Object(b.a)(z,2),I=D[0],T=D[1];!function(e,t){Object(r.useEffect)((function(){if(t)return e()}),[t])}((function(){A({title:"Ocurri\xf3 un error.",description:null===T||void 0===T?void 0:T.message,status:"error",duration:5e3,isClosable:!0})}),T);var P=function(){var e=Object(B.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.transaction("rw",J.subjects,Object(B.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.subjects.add(t);case 2:n=e.sent,o((function(e){return[].concat(Object(R.a)(e),[Object(y.a)({id:n},t)])})),m();case 5:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(f.a,{overflowY:"scroll",height:"100%",children:[Object(S.jsxs)(h.a,{justify:"space-between",p:3,position:"sticky",top:"0",bg:k,color:C,shadow:"sm",zIndex:"2",align:"center",children:[Object(S.jsx)(v.a,{size:"sm",children:"Materias"}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(p.a,{variant:"solid",colorScheme:"accent",size:"sm",mr:2,"aria-label":"Reload subjects",disabled:I===N.Loading,onClick:function(){return d((function(e){return!e}))},icon:Object(S.jsx)(L.a,{})}),Object(S.jsx)(p.a,{variant:"solid",colorScheme:"accent","aria-label":"Add subject",size:"sm",isActive:O,onClick:x,icon:Object(S.jsx)(w.a,{})})]})]}),O&&Object(S.jsx)(ne,{onSubmit:P}),i.map((function(e){return Object(S.jsx)(Q,{name:e.name,color:e.color,count:e.count,isActive:e.id===t,onClick:function(){return n(e)}},e.id)}))]})},He=n(951),Je=function(e){var t=e.subject,n=e.selectedTask,c=e.onSelect,a=$(),i=a.bg,o=a.color,s=Object(r.useState)([]),l=Object(b.a)(s,2),u=l[0],d=l[1],j=Object(r.useState)([]),O=Object(b.a)(j,2),x=O[0],p=O[1],m=Object(r.useState)([]),g=Object(b.a)(m,2),w=g[0],k=g[1];return G(function(){var e=Object(B.a)(F.a.mark((function e(n){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.tasks.where("subjectId").equals(t.id).sortBy("dueDate");case 4:c=e.sent,d(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[J.tasks],[t]),Object(r.useEffect)((function(){n&&(-1===u.indexOf(n)&&d((function(e){return e.map((function(e){return e.id===n.id?n:e}))})))}),[n]),Object(r.useEffect)((function(){var e,t=[],n=[],c=Object(E.a)(u);try{for(c.s();!(e=c.n()).done;){var a=e.value;Object(He.a)(a.dueDate)?t.push(a):n.push(a)}}catch(r){c.e(r)}finally{c.f()}p(t),k(n)}),[u]),t?Object(S.jsxs)(f.a,{overflowY:"scroll",height:"100%",children:[Object(S.jsx)(h.a,{justify:"space-between",p:3,position:"sticky",top:"0",bg:i,color:o,shadow:"sm",zIndex:"2",align:"center",children:Object(S.jsxs)(v.a,{size:"sm",children:["Tareas de ",t.name]})}),x.map((function(e){return Object(S.jsx)(Pe,{content:e.content,dueDate:e.dueDate,finished:e.finished,onClick:function(){return c(e)},isActive:(null===n||void 0===n?void 0:n.id)===e.id},e.id)})),w.length>0&&Object(S.jsx)(h.a,{justify:"space-between",p:3,position:"sticky",top:"0",bg:i,color:o,shadow:"sm",zIndex:"2",align:"center",children:Object(S.jsx)(v.a,{size:"sm",children:"Tareas pasadas"})}),w.map((function(e){return Object(S.jsx)(Pe,{content:e.content,dueDate:e.dueDate,finished:e.finished,onClick:function(){return c(e)},isActive:(null===n||void 0===n?void 0:n.id)===e.id},e.id)}))]}):Object(S.jsx)(ue.a,{children:"Selecciona una materia"})},Ue=n(908),_e=n(952),Ge=n(370),$e=function(e){var t=e.task,n=e.onUpdate,c=e.onDelete,a=Object(r.useState)(!1),i=Object(b.a)(a,2),o=i[0],s=i[1],u=Object(r.useState)(""),j=Object(b.a)(u,2),O=j[0],h=j[1],x=Object(r.useState)(),v=Object(b.a)(x,2),g=v[0],w=v[1],k=Object(r.useRef)(),C=function(){var e=Object(B.a)(F.a.mark((function e(c){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.transaction("rw",J.tasks,Object(B.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.tasks.update(t.id,c);case 2:n(Object(y.a)(Object(y.a)({},t),c));case 3:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(B.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.transaction("rw",J.tasks,Object(B.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.tasks.delete(t.id);case 2:c(t.id);case 3:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(B.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({content:O,dueDate:g});case 2:s(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(S.jsxs)(f.a,{p:6,overflowY:"scroll",height:"100%",position:"relative",children:[Object(S.jsxs)(ae.a,{position:"absolute",top:"1rem",right:"1rem",spacing:2,zIndex:"2",children:[Object(S.jsx)(p.a,{"aria-label":"Turn edit mode",icon:o?Object(S.jsx)(m.a,{as:Ge.a}):Object(S.jsx)(_e.a,{}),colorScheme:o?"accent":"primary",variant:"outline",onClick:o?z:function(){h(t.content),w(t.dueDate),s(!0)}}),Object(S.jsx)(Ve,{title:"Eliminar tarea",text:"\xbfEst\xe1 seguro de querer eliminar la tarea? Esta acci\xf3n no se puede deshacer.",onClick:A})]}),o?Object(S.jsx)(Ae,{value:O,onChange:h,ref:k}):Object(S.jsx)(oe.a,{plugins:[le.a],children:t.content,components:Ce}),o?Object(S.jsxs)(X.a,{mt:4,mb:2,children:[Object(S.jsx)(Z.a,{htmlFor:"form-due-date",children:"Fecha de entrega"}),Object(S.jsx)(d.a,{id:"form-due-date",selected:g,onChange:w,showPopperArrow:!0,locale:"es",showTimeSelect:!0,timeFormat:"p",timeIntervals:15,dateFormat:"Pp"})]}):Object(S.jsxs)(ue.a,{mt:4,mb:2,children:[Object(S.jsx)("strong",{children:"Fecha de entrega:"})," ",Object(Ue.default)(t.dueDate,"iiii Pp",{locale:l.a})]}),Object(S.jsxs)(ue.a,{mb:4,children:[Object(S.jsx)("strong",{children:"Anotado:"})," ",Object(Ue.default)(t.createdAt,"iiii Pp",{locale:l.a})]}),Object(S.jsx)(fe.a,{size:"lg",colorScheme:"green",isChecked:t.finished,onChange:function(e){return C({finished:e.target.checked})},children:"Finalizado"})]}):Object(S.jsx)(ue.a,{children:"Selecciona una tarea"})},Ke=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),i=Object(b.a)(a,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){s(void 0)}),[n]),Object(S.jsxs)(h.a,{h:"100vh",paddingTop:"56px",children:[Object(S.jsx)(f.a,{flex:"2",children:Object(S.jsx)(Ye,{onSelect:c,selectedId:null===n||void 0===n?void 0:n.id})}),Object(S.jsx)(f.a,{flex:"2",children:Object(S.jsx)(Je,{subject:n,onSelect:s,selectedTask:o})}),Object(S.jsx)(f.a,{flex:"5",children:Object(S.jsx)($e,{task:o,onUpdate:s,onDelete:function(){return c((function(e){return e?Object(y.a)({},e):e}))}})})]})},Qe=function(){return localStorage.getItem(z)||c.List},Xe=function(){var e=Object(r.useState)(Qe),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(M.a)(),o=i.isOpen,s=i.onOpen,l=i.onClose,u=Object(r.useState)(!1),d=Object(b.a)(u,2),j=d[0],O=d[1];!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(r.useRef)(!0);Object(r.useEffect)((function(){n.current?n.current=!1:e()}),t)}((function(){localStorage.setItem(z,n)}),[n]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(D,{viewMode:n,onAddNote:s,onChangeViewMode:a}),!j&&n===c.Calendar&&Object(S.jsx)(I,{}),!j&&n===c.List&&Object(S.jsx)(Ke,{}),Object(S.jsx)(Ee,{isOpen:o,onClose:l,onTaskAdded:function(){l(),O(!0),setTimeout((function(){O(!1)}),100)}})]})},Ze=n(953),et=n(220),tt=Object(Ze.a)({styles:{global:function(e){return{body:{bg:Object(et.a)("#f7f9f9","#1e1e24")(e)}}}},colors:{primary:{50:"#b8d0e0",100:"#aac7da",200:"#8eb5cd",300:"#71a2c1",400:"#5590b4",500:"#457b9d",600:"#386480",700:"#2c4e63",800:"#1f3847",900:"#13212b"},accent:{50:"#fee0d8",100:"#fdd0c4",200:"#fbb09d",300:"#fa9075",400:"#f9704e",500:"#f75026",600:"#ec3609",700:"#c52d07",800:"#9d2406",900:"#761b04"}}}),nt=function(){return Object(S.jsx)(j.a,{theme:tt,children:Object(S.jsx)(Xe,{})})},ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,964)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(902),n(903),n(904);Object(u.registerLocale)("es",l.a),s.a.render(Object(S.jsxs)(r.StrictMode,{children:[Object(S.jsx)(a.a,{}),Object(S.jsx)(nt,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ct()}},[[905,1,2]]]);
//# sourceMappingURL=main.da158e87.chunk.js.map