(this["webpackJsonpinstagram-clone-webmaster"]=this["webpackJsonpinstagram-clone-webmaster"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),o=n(15),i=n.n(o),s=(n(20),n(10)),r=(n(21),n(9)),l=(r.a.initializeApp({apiKey:"AIzaSyCuRo6FyNV1Ixp9Y8Nlpjt4mmg2SnAQvWs",authDomain:"instagram-clone-webmaster.firebaseapp.com",projectId:"instagram-clone-webmaster",storageBucket:"instagram-clone-webmaster.appspot.com",messagingSenderId:"397079541895",appId:"1:397079541895:web:260c12c49f6a6948f9a022",measurementId:"G-1JPRCJ8HGX"}),r.a.firestore()),u=r.a.auth(),d=r.a.storage(),m=(r.a.functions(),n(3));var j=function(e){var t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(null),j=Object(s.a)(i,2),p=j[0],f=j[1];function b(){document.querySelector(".modalUpload").style.display="none"}return Object(a.useEffect)((function(){}),[]),Object(m.jsx)("div",{className:"header",children:Object(m.jsxs)("div",{className:"center",children:[Object(m.jsx)("div",{className:"modalCriarConta",children:Object(m.jsxs)("div",{className:"formCriarConta",children:[Object(m.jsx)("div",{onClick:function(){document.querySelector(".modalCriarConta").style.display="none"},className:"close-modal-criar",children:"X"}),Object(m.jsx)("h2",{children:"Criar Conta"}),Object(m.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("email-cadastro").value,n=document.getElementById("username-cadastro").value,a=document.getElementById("senha-cadastro").value;u.createUserWithEmailAndPassword(t,a).then((function(e){e.user.updateProfile({displayName:n}),alert("Conta Criada"),document.querySelector(".modalCriarConta").style.display="none"})).catch((function(e){alert(e.message)}))}(e)},action:"",children:[Object(m.jsx)("input",{id:"email-cadastro",type:"text",placeholder:"Seu e-mail..."}),Object(m.jsx)("input",{id:"username-cadastro",type:"text",placeholder:"Seu username..."}),Object(m.jsx)("input",{id:"senha-cadastro",type:"password",placeholder:"Sua senha..."}),Object(m.jsx)("input",{type:"submit",value:"Criar Conta!"})]})]})}),Object(m.jsx)("div",{className:"modalUpload",children:Object(m.jsxs)("div",{className:"formUpload",children:[Object(m.jsx)("div",{onClick:function(){return b()},className:"close-modal-criar",children:"X"}),Object(m.jsx)("h2",{children:"Fazer Upload"}),Object(m.jsxs)("form",{id:"form-upload",onSubmit:function(t){return function(t){t.preventDefault();var n=document.getElementById("titulo-upload").value;d.ref("images/".concat(p.name)).put(p).on("state_changed",(function(e){var t=100*Math.round(e.bytesTransferred/e.totalBytes);o(t)}),(function(e){}),(function(){d.ref("images").child(p.name).getDownloadURL().then((function(t){l.collection("posts").add({titulo:n,image:t,userName:e.user,timestamp:r.a.firestore.FieldValue.serverTimestamp()}),o(0),f(null),alert("upload Realizado"),document.getElementById("form-upload").reset(),b()}))}))}(t)},action:"",children:[Object(m.jsx)("progress",{id:"progress-upload",value:c}),Object(m.jsx)("input",{id:"titulo-upload",type:"text",placeholder:"Nome da sua foto..."}),Object(m.jsx)("input",{onChange:function(e){return f(e.target.files[0])},type:"file",name:"file"}),Object(m.jsx)("input",{type:"submit",value:"Postar!"})]})]})}),Object(m.jsx)("div",{className:"header__logo",children:Object(m.jsx)("a",{href:"",children:Object(m.jsx)("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})})}),e.user?Object(m.jsxs)("div",{className:"header__logadoInfo",children:[Object(m.jsxs)("span",{children:["Ol\xe1 ",Object(m.jsx)("b",{children:e.user})]}),Object(m.jsx)("a",{onClick:function(e){return function(e){e.preventDefault(),document.querySelector(".modalUpload").style.display="block"}(e)},href:"#",children:"Postar!"}),Object(m.jsx)("a",{onClick:function(t){return function(t){t.preventDefault(),u.signOut().then((function(t){e.setUser(null),window.location.href="/"}))}(t)},children:"Deslogar"})]}):Object(m.jsxs)("div",{className:"header__loginForm",children:[Object(m.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=document.getElementById("email-login").value,a=document.getElementById("senha-login").value;u.signInWithEmailAndPassword(n,a).then((function(t){e.setUser(t.user.displayName),alert("logado com sucesso!"),window.location.href="/"})).catch((function(e){alert(e.message)}))}(t)},action:"",children:[Object(m.jsx)("input",{id:"email-login",type:"text",placeholder:"Login..."}),Object(m.jsx)("input",{id:"senha-login",type:"password",placeholder:"Senha..."}),Object(m.jsx)("input",{type:"submit",value:"Logar!",name:"acao"})]}),Object(m.jsx)("div",{className:"btn__criarConta",children:Object(m.jsx)("a",{onClick:function(e){return function(e){e.preventDefault(),document.querySelector(".modalCriarConta").style.display="block"}(e)},href:"#",children:"Criar Conta!"})})]})]})})};var p=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){l.collection("posts").doc(e.id).collection("comentarios").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,info:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"postSingle",children:[Object(m.jsx)("img",{src:e.info.image}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:e.info.userName}),": ",e.info.titulo]}),Object(m.jsxs)("div",{className:"coments",children:[Object(m.jsx)("h2",{children:"\xdaltimos Coment\xe1rios"}),c.map((function(e){return Object(m.jsx)("div",{className:"coment-single",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:e.info.nome}),": ",e.info.comentario]})})}))]}),e.user?Object(m.jsxs)("form",{onSubmit:function(t){return function(t,n){n.preventDefault();var a=document.querySelector("#comentario-"+t).value;l.collection("posts").doc(t).collection("comentarios").add({nome:e.user,comentario:a,timestamp:r.a.firestore.FieldValue.serverTimestamp()}),alert("comentario feito com sucesso"),document.querySelector("#comentario-"+t).value=""}(e.id,t)},children:[Object(m.jsx)("textarea",{id:"comentario-"+e.id}),Object(m.jsx)("input",{type:"submit",value:"Comentar!"})]}):Object(m.jsx)("div",{})]})};var f=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(s.a)(o,2),r=i[0],d=i[1];return Object(a.useEffect)((function(){u.onAuthStateChanged((function(e){null!=e&&c(e.displayName)})),l.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){d(e.docs.map((function(e){return{id:e.id,info:e.data()}})))}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{setUser:c,user:n}),r.map((function(e){return Object(m.jsx)(p,{user:n,info:e.info,id:e.id})}))]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),b()}},[[27,1,2]]]);
//# sourceMappingURL=main.7d2daacd.chunk.js.map