(this.webpackJsonpverissa=this.webpackJsonpverissa||[]).push([[0],{105:function(e,t,c){},125:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(24),n=c.n(i),r=(c(105),c(7)),o=c(9),l=c(53),j=c(54),d=c(69),b=c(68),x=c(22),O=c.n(x),h=(c(125),c(1)),m={title:{display:"flex",justifyContent:"center"},image:{width:"300px",borderRadius:"4px",margin:"10px"}};function u(e){var t=e.img,c=e.name;return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("img",{className:"card__image",style:m.image,src:t,alt:c}),c&&Object(h.jsx)("h3",{style:m.title,children:c})]})}c(127);var g={image:{width:"150px"},title:{marginTop:"0",textAlign:"center",color:"#75787B"}};function p(e){var t=e.img,c=e.name;return Object(h.jsxs)("div",{className:"destacadoContainer",style:{margin:"10px"},children:[Object(h.jsx)("div",{style:{display:"grid",placeItems:"center",overflow:"hidden"},children:Object(h.jsx)("img",{className:"destacadoContainer_img",style:g.image,src:t,alt:c})}),Object(h.jsx)("h3",{style:g.title,children:c})]})}var f=c.p+"static/media/face.c719a013.svg",v=c.p+"static/media/insta.90a80cd5.svg",y=c.p+"static/media/linkedin.8fb0cfb6.svg";c(128);function N(){return Object(h.jsxs)("div",{className:"footer_container",children:[Object(h.jsxs)("div",{className:"footer_box description",children:[Object(h.jsx)("img",{style:{width:"150px"},src:"/img/assets/logo_verissa_2.png",alt:"Logo Verissa"}),Object(h.jsx)("p",{style:{margin:"5px 0",color:"#555",width:"330px",maxWidth:"600px"},children:"Nuestra experiencia nos ha permitido cubrir las m\xe1s altas expectativas de nuestros clientes. Cada proyecto a contribuido a crecimiento y consolidaci\xf3n de nuetra empresa."})]}),Object(h.jsxs)("div",{className:"footer_box contact",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{style:{color:"#555"},children:"TEL\xc9FONO: "}),Object(h.jsx)("a",{style:{color:"#555",textDecoration:"none"},href:"tel:8112312523",children:"(81) 1231-2523"})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{style:{color:"#555"},children:"TEL\xc9FONO: "}),Object(h.jsx)("a",{style:{color:"#555",textDecoration:"none"},href:"tel:8113587217",children:"(81) 1358-7217"})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{style:{color:"#555"},children:"EMAIL: "}),Object(h.jsx)("a",{style:{color:"#555",textDecoration:"none"},href:"mailto:contacto@verissa.mx",children:"CONTACTO@VERISSA.MX"})]})]}),Object(h.jsxs)("div",{className:"footer_box social",children:[Object(h.jsx)("div",{className:"footer_icon",children:Object(h.jsx)("img",{className:"footer_logo",src:f,alt:"Facebook"})}),Object(h.jsx)("div",{className:"footer_icon",children:Object(h.jsx)("img",{className:"footer_logo",src:v,alt:"Instagram"})}),Object(h.jsx)("div",{className:"footer_icon",children:Object(h.jsx)("img",{className:"footer_logo",src:y,alt:"LinkedIn"})})]})]})}c(129);function _(e){var t=e.img;return Object(h.jsx)("div",{className:"banner__container",children:Object(h.jsx)("img",{className:"banner__image",src:t,alt:"banner"})})}var C=c.p+"static/media/Banners_home_1.ceacd876.png",w=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={categories:[],productos:[],loading:!1},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){this.get_data()}},{key:"get_data",value:function(){var e=this;O.a.get("http://localhost:8000/api/v1/").then((function(t){e.setState({categories:t.data,loading:!0})})).then((function(t){e.setState({loading:!1})})),O.a.get("http://localhost:8000/api/v1/productos/1").then((function(t){e.setState({productos:t.data.slice(0,4)})}))}},{key:"render",value:function(){return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(_,{img:C}),Object(h.jsxs)("div",{className:"homeContainer",children:[Object(h.jsx)("h1",{style:{marginLeft:"30px",color:"#75787B"},children:"CATEGOR\xcdAS"}),Object(h.jsx)("section",{className:"categoriesContainer",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:this.state.categories.map((function(e){var t=e.id,c=e.image;return 7===t||9===t?Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000"},to:"/categoria/".concat(t),children:Object(h.jsx)(u,{img:c})},t):Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000"},to:"/subcategoria/".concat(t),children:Object(h.jsx)(u,{img:c})},t)}))}),Object(h.jsx)("h2",{style:{margin:"25px 15px",color:"#75787B"},children:"PRODUCTOS DESTACADOS"}),Object(h.jsx)("section",{className:"destacadosContainer",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:this.state.productos.map((function(e){var t=e.id,c=e.image,a=e.title;return Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000"},to:"/producto/".concat(t),children:Object(h.jsx)(p,{img:c,name:a})},t)}))}),Object(h.jsx)(N,{})]})]})}}]),c}(a.Component),D=c(167),I=c(168),S=c(169),E=c(94),P=(c(87),c(134),c.p+"static/media/logo_verissa_2.16c6e016.png");function T(){return Object(h.jsx)("div",{className:"layout_header",children:Object(h.jsxs)(D.a,{fluid:!0,children:[Object(h.jsx)(I.a,{children:Object(h.jsxs)("div",{className:"layout_header-contact",children:[Object(h.jsx)("a",{href:"tel:8112312523",children:"(81) 1231-2523"}),Object(h.jsx)("a",{href:"tel:8113587217",children:"(81) 1358-7217"}),Object(h.jsx)("a",{href:"mailto:contacto@verissa.mx",children:"CONTACTO@VERISSA.MX"})]})}),Object(h.jsxs)(I.a,{children:[Object(h.jsx)("div",{className:"layout_header-image",children:Object(h.jsx)("a",{style:{textDecoration:"none"},href:"https://verissa.mx/",rel:"noopener noreferrer",target:"_blank",children:Object(h.jsx)("img",{src:P,alt:"Logo Verissa"})})}),Object(h.jsx)("div",{className:"layout_header-link",children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#3d0010",fontSize:"1.6rem"},to:"/",children:"Inicio"})}),Object(h.jsx)("div",{className:"layout_header-link",children:Object(h.jsxs)(S.a,{title:"CATEGOR\xcdAS",variant:"secondary",children:[Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/5",children:"Comercial"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/2",children:"Educaci\xf3n"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/3",children:"Healt Care"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/categoria/7",children:"Home Office"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/1",children:"Hoteler\xeda"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/4",children:"Industrial"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/8",children:"Corporativo"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/categoria/9",children:"Productos Especiales"})}),Object(h.jsx)(E.a.Item,{children:Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#555"},to:"/subcategoria/6",children:"Residencial"})})]})})]})]})})}var V=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(T,{}),this.props.children]})}}]),c}(a.Component),A=c(5);function F(){var e=Object(r.g)().id,t=Object(a.useState)([]),c=Object(A.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){O.a.get("http://localhost:8000/api/v1/".concat(e)).then((function(e){i(e.data)}))}),[e]),Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("h1",{style:{marginLeft:"30px",color:"#75787B"},children:"SUBCATEGOR\xcdAS"}),Object(h.jsx)("section",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",height:"50vh"},children:s.map((function(e){var t=e.id,c=e.image;return Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000",display:"grid",placeItems:"center"},to:"/productos/".concat(t),children:Object(h.jsx)(u,{img:c})},t)}))})]})}c(135);var k={title:{display:"flex",justifyContent:"center"},image:{width:"300px",borderRadius:"4px",margin:"10px"}};function L(e){var t=e.img,c=e.name;return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("img",{className:"cardProduct__image",style:k.image,src:t,alt:c}),c&&Object(h.jsx)("h3",{style:k.title,children:c})]})}function R(){var e=Object(r.g)().id,t=Object(a.useState)([]),c=Object(A.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){O.a.get("http://localhost:8000/api/v1/productos/".concat(e)).then((function(e){i(e.data)}))}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{marginLeft:"30px",color:"#75787B"},children:"PRODUCTOS"}),Object(h.jsx)("section",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:s.map((function(e){var t=e.id,c=e.title,a=e.image;return Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000"},to:"/producto/".concat(t),children:Object(h.jsx)(L,{img:a,name:c})},t)}))})]})}function B(){var e=Object(r.g)().id,t=Object(a.useState)([]),c=Object(A.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){O.a.get("http://localhost:8000/api/v1/product/".concat(e)).then((function(e){i(e.data)}))}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{marginLeft:"30px",color:"#75787B"},children:"PRODUCTOS ESPECIALES"}),Object(h.jsx)("section",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:s.map((function(e){var t=e.id,c=e.title,a=e.image;return Object(h.jsx)(o.b,{style:{textDecoration:"none",color:"#000"},to:"/producto/".concat(t),children:Object(h.jsx)(L,{img:a,name:c})},t)}))})]})}var M=c(175),W=c(174),U=c(173),G=c(172),H=c(38),J=c.n(H),X=c(170),z=(c(136),function(){var e=Object(r.g)().id,t=Object(a.useState)(""),c=Object(A.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){O.a.get("http://localhost:8000/api/v1/producto/".concat(e)).then((function(e){i(e.data)}))}),[e]);var n=Object(a.useState)(""),o=Object(A.a)(n,2),l=o[0],j=o[1];return Object(a.useEffect)((function(){j("")}),[e]),Object(h.jsx)(D.a,{children:Object(h.jsxs)(I.a,{children:[Object(h.jsxs)(X.a,{md:6,children:[Object(h.jsx)(I.a,{children:Object(h.jsx)("div",{className:"ProductView__img-container",children:Object(h.jsx)("img",{className:"ProductView__img",src:l||s.image,alt:s.title})})}),Object(h.jsx)(I.a,{children:Object(h.jsx)("div",{className:"ProductView__img-carousell",children:Object(h.jsxs)("span",{onClick:function(e){j(e.target.src)},children:[Object(h.jsx)("img",{className:"ProductView__img-carousell-min",src:s.image?s.image:"",alt:s.title}),s.image1&&Object(h.jsx)("img",{className:"ProductView__img-carousell-min",src:s.image1,alt:s.title}),s.image2&&Object(h.jsx)("img",{className:"ProductView__img-carousell-min",src:s.image2,alt:s.title}),s.image3&&Object(h.jsx)("img",{className:"ProductView__img-carousell-min",src:s.image3,alt:s.title})]})})})]}),Object(h.jsxs)(X.a,{md:6,children:[Object(h.jsx)(I.a,{children:Object(h.jsx)("h2",{className:"ProductView__info-title",children:s.title&&s.title.toUpperCase()})}),Object(h.jsxs)(I.a,{children:[s.subcategory&&Object(h.jsx)("h3",{className:"ProductView__info-subtitle",children:"Tipo de uso"}),Object(h.jsx)("div",{className:"ProductView__img-carousell-sub",children:s.subcategory&&s.subcategory.map((function(e){var t=e.id,c=e.name,a=e.image;return Object(h.jsx)("img",{className:"ProductView__img-carousell-use",src:a,alt:c},t)}))})]}),Object(h.jsx)(I.a,{children:Object(h.jsxs)("div",{className:"ProductView__info",children:[Object(h.jsx)("h2",{className:"ProductView__info-subtitle",children:"Especificaciones"}),Object(h.jsxs)("div",{className:"ProductView__info-accordion",children:[Object(h.jsxs)(M.a,{className:"accordion",children:[Object(h.jsx)(W.a,{expandIcon:Object(h.jsx)(J.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(h.jsx)(G.a,{className:"accordion-title",children:"Caracter\xedsticas"})}),Object(h.jsx)(U.a,{className:"accordion-details",children:Object(h.jsx)(G.a,{className:"accordion-desc",children:s.features})})]}),Object(h.jsxs)(M.a,{className:"accordion",children:[Object(h.jsx)(W.a,{expandIcon:Object(h.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(h.jsx)(G.a,{className:"accordion-title",children:"Medidas"})}),Object(h.jsx)(U.a,{className:"accordion-details",children:Object(h.jsx)(G.a,{className:"accordion-desc",children:s.measures})})]}),Object(h.jsxs)(M.a,{className:"accordion",children:[Object(h.jsx)(W.a,{expandIcon:Object(h.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(h.jsx)(G.a,{className:"accordion-title",children:"Materiales"})}),Object(h.jsx)(U.a,{className:"accordion-details",children:Object(h.jsx)(G.a,{className:"accordion-desc",children:s.materials})})]}),Object(h.jsxs)(M.a,{className:"accordion",children:[Object(h.jsx)(W.a,{expandIcon:Object(h.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(h.jsx)(G.a,{className:"accordion-title",children:"Color"})}),Object(h.jsx)(U.a,{className:"accordion-details",children:Object(h.jsx)(G.a,{className:"accordion-desc",children:s.colors})})]}),s.certifications&&Object(h.jsxs)(M.a,{className:"accordion",children:[Object(h.jsx)(W.a,{expandIcon:Object(h.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(h.jsx)(G.a,{className:"accordion-title",children:"Certificaciones"})}),Object(h.jsx)(U.a,{className:"accordion-details",children:Object(h.jsx)(G.a,{className:"accordion-desc",children:Object(h.jsx)("img",{className:"img-certificate",src:s.certifications,alt:"Certificado"})})})]})]})]})})]})]})})});c(143);function q(){var e=Object(r.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var K=function(){return Object(h.jsx)(o.a,{children:Object(h.jsx)(r.c,{children:Object(h.jsxs)(V,{className:"App",children:[Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(w,{})]})}),Object(h.jsx)(r.a,{exact:!0,path:"/subcategoria/:id",children:Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(F,{})]})}),Object(h.jsx)(r.a,{exact:!0,path:"/productos/:id",children:Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(R,{})]})}),Object(h.jsx)(r.a,{exact:!0,path:"/producto/:id",children:Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(z,{})]})}),Object(h.jsx)(r.a,{exact:!0,path:"/categoria/:id",children:Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(B,{})]})})]})})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,177)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(K,{})}),document.getElementById("root")),Q()}},[[144,1,2]]]);
//# sourceMappingURL=main.57ad5c88.chunk.js.map