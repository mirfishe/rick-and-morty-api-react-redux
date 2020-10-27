(this["webpackJsonprick-and-morty-api-react-redux"]=this["webpackJsonprick-and-morty-api-react-redux"]||[]).push([[0],{33:function(e,t,c){},39:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(2),n=c.n(r),s=c(15),o=c.n(s),i=(c(33),c(7)),l=c(8),j=(c(17),c(39),c(57)),d=c(58),h=c(59),u=c(60),b=c(61),p=c(62),O=c(63),f=c(64),x=c(67),m=c(65),g=c(66),y=c(51),S=c(56),v=c(12),C=Object(v.b)({name:"characters",initialState:{charactersURL:"https://rickandmortyapi.com/api/character/",paginationURL:"?page=",arrayCharacters:[],arraySearchSpecies:[],arraySearchCharacterTypes:[],arraySearchGender:[{label:"Female",value:"female"},{label:"Male",value:"male"},{label:"Genderless",value:"genderless"},{label:"Unknown",value:"unknown"}],arraySearchCharacterStatus:[{label:"Alive",value:"alive"},{label:"Dead",value:"dead"},{label:"Unknown",value:"unknown"}]},reducers:{loadArrayCharacters:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arrayCharacters.push(t.payload[c])}},loadArraySearchSpecies:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arraySearchSpecies.push(t.payload[c])}},loadArraySearchCharacterTypes:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arraySearchCharacterTypes.push(t.payload[c])}}}}),L=C.actions,k=L.loadArrayCharacters,N=L.loadArraySearchSpecies,D=L.loadArraySearchCharacterTypes,E=C.reducer,A=Object(v.b)({name:"locations",initialState:{locationsURL:"https://rickandmortyapi.com/api/location/",paginationURL:"?page=",arrayLocations:[],arraySearchLocationTypes:[],arraySearchDimensions:[]},reducers:{loadArrayLocations:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arrayLocations.push(t.payload[c])}},loadArraySearchLocationTypes:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arraySearchLocationTypes.push(t.payload[c])}},loadArraySearchDimensions:{reducer:function(e,t){console.log("locationsSlice.js loadArraySearchDimensions action.payload",t.payload);for(var c=0;c<t.payload.length;c++)e.arraySearchDimensions.push(t.payload[c])}}}}),R=A.actions,T=R.loadArrayLocations,U=R.loadArraySearchLocationTypes,M=R.loadArraySearchDimensions,I=A.reducer,w=Object(v.b)({name:"episodes",initialState:{episodesURL:"https://rickandmortyapi.com/api/episode/",paginationURL:"?page=",arrayEpisodes:[]},reducers:{loadArrayEpisodes:{reducer:function(e,t){for(var c=0;c<t.payload.length;c++)e.arrayEpisodes.push(t.payload[c])}}}}),G=w.actions.loadArrayEpisodes,F=w.reducer,_=c(5),z=c.n(_),P=c(52),B=c(53),J=c(54),V=c(55),W=c(48),$=c(49),q=c(50),H=function(e){console.log("Character.js props.results",e.results);var t=Object(r.useState)(!1),c=Object(i.a)(t,2),s=c[0],o=c[1],l=function e(){console.log("Character.js loadDetailsModal",e),o(!s)};return Object(a.jsx)(n.a.Fragment,{children:e.results.length>0?e.results.map((function(t){return Object(a.jsxs)(W.a,{className:"m-2 p-2",children:[Object(a.jsx)("img",{src:t.image,alt:t.name}),Object(a.jsxs)($.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.url,onClick:l,children:t.name})}),Object(a.jsxs)("p",{children:["Gender: ",Object(a.jsx)(q.a,{href:t.gender,onClick:function(c){c.preventDefault(),console.log("Character.js props.setDdSearchGender(character.gender)",t.gender),e.setDdSearchGender(t.gender)},children:t.gender})]}),Object(a.jsxs)("p",{children:["Species: ",Object(a.jsx)(q.a,{href:t.species,onClick:function(c){c.preventDefault(),console.log("Character.js props.setDdSearchSpecies(character.species)",t.species),e.setDdSearchSpecies(t.species)},children:t.species})]}),Object(a.jsxs)("p",{children:["Status: ",Object(a.jsx)(q.a,{href:t.status,onClick:function(c){c.preventDefault(),console.log("Character.js props.setDdSearchStatus(character.status)",t.status),e.setDdSearchStatus(t.status)},children:t.status})]}),Object(a.jsxs)("p",{children:["Type: ",Object(a.jsx)(q.a,{href:t.type,onClick:function(c){c.preventDefault(),console.log("Character.js props.setDdSearchCharacterType(character.type)",t.type),e.setDdSearchCharacterType(t.type)},children:t.type})]}),Object(a.jsxs)("p",{children:["Location: ",Object(a.jsx)(q.a,{href:t.location.url,onClick:e.loadDetailsModal,children:t.location.name})]}),Object(a.jsxs)("p",{children:["Origin: ",Object(a.jsx)(q.a,{href:t.origin.url,onClick:e.loadDetailsModal,children:t.origin.name})]}),Object(a.jsx)("p",{children:"Episode(s):"}),Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.episodesList,onClick:e.loadDetailsModal,children:"All Episode(s):"})})]})]},t.id)})):null})},K=function(e){var t=Object(l.c)((function(e){return e.characters.charactersURL})),c=Object(l.c)((function(e){return e.characters.paginationURL})),s=Object(l.c)((function(e){return e.characters.arraySearchSpecies})),o=Object(l.c)((function(e){return e.characters.arraySearchCharacterTypes})),j=Object(l.c)((function(e){return e.characters.arraySearchGender})),d=Object(l.c)((function(e){return e.characters.arraySearchCharacterStatus})),h=Object(r.useState)([]),u=Object(i.a)(h,2),b=u[0],p=(u[1],Object(r.useState)("")),O=Object(i.a)(p,2),f=O[0],m=O[1],g=Object(r.useState)([]),v=Object(i.a)(g,2),C=v[0],L=v[1],k=Object(r.useState)(0),N=Object(i.a)(k,2),D=N[0],E=N[1],A=Object(r.useState)(0),R=Object(i.a)(A,2),T=R[0],U=R[1],M=Object(r.useState)(""),I=Object(i.a)(M,2),w=I[0],G=I[1],F=Object(r.useState)(""),_=Object(i.a)(F,2),z=_[0],W=_[1],$=Object(r.useState)(""),q=Object(i.a)($,2),K=q[0],Q=q[1],X=Object(r.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],ee=Y[1],te=Object(r.useState)(""),ce=Object(i.a)(te,2),ae=ce[0],re=ce[1],ne=Object(r.useState)(""),se=Object(i.a)(ne,2),oe=se[0],ie=se[1];Object(r.useEffect)((function(){void 0!==K&&""!==K&&(console.log("Locations.js useEffect ddSearchSpecies",K),le())}),[K]),Object(r.useEffect)((function(){void 0!==Z&&""!==Z&&(console.log("Locations.js useEffect ddSearchCharacterType",Z),le())}),[Z]),Object(r.useEffect)((function(){void 0!==ae&&""!==ae&&(console.log("Locations.js useEffect ddSearchStatus",ae),le())}),[ae]),Object(r.useEffect)((function(){void 0!==oe&&""!==oe&&(console.log("Locations.js useEffect ddSearchGender",oe),le())}),[oe]);var le=function(){var e=t,c="";void 0!==z&&z.length>0&&(c+="&name="+z.replace(" ","%20")),void 0!==ae&&""!==ae&&(c+="&status="+ae.replace(" ","%20")),void 0!==K&&""!==K&&(c+="&species="+K.replace(" ","%20")),void 0!==Z&&""!==Z&&(c+="&type="+Z.replace(" ","%20")),void 0!==oe&&""!==oe&&(c+="&gender="+oe.replace(" ","%20")),""!==c&&(e+="?"+c),m(e),je(e)},je=function(e){fetch(e).then((function(e){return console.log("Characters.js searchCharacters response",e),e.json()})).then((function(e){if(void 0!==e.error)console.log("Characters.js searchCharacters data.error",e.error),G(e.error);else{U(e.info.pages);for(var t=0;t<e.results.length;t++){for(var c="",a=e.results[t].episode,r=0;r<a.length;r++){for(var n=0;n<b.length&&a[r].substr(a[r].lastIndexOf("/")+1)!=b[n].id;n++);c+=a[r].substr(a[r].lastIndexOf("/")+1),r<a.length-1&&(c+=",")}Object.assign(e.results[t],{episodesList:c})}L(e.results),E(D+1)}})).catch((function(e){console.log("Characters.js searchCharacters err",e),G(e)}))};return Object(a.jsxs)(n.a.Fragment,{children:[""!==w?Object(a.jsx)(x.a,{color:"danger",children:w}):null,""!==f?Object(a.jsx)(x.a,{color:"primary",children:f}):null,Object(a.jsxs)(y.a,{className:"m-2",children:[Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(B.a,{type:"text",id:"txtSearchCharacterName",placeholder:"Name",onChange:function(e){W(e.target.value)}})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchSpecies",onChange:function(e){Q(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select Species"}),s.length>0?s.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)})):null]})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchCharacterType",onChange:function(e){ee(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select Type"}),o.length>0?o.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)})):null]})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchStatus",onChange:function(e){re(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select Status"}),d.length>0?d.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.label},e.value)})):null]})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchGender",onChange:function(e){ie(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select Gender"}),j.length>0?j.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.label},e.value)})):null]})})]}),Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(J.a,{id:"btnSearchCharacters",color:"primary",size:"lg",className:"ml-4 m-2 p-2",onClick:le,children:"Search Characters"})})}),C.length>0?Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(y.a,{className:"justify-content-center",children:Object(a.jsx)(H,{results:C,setDdSearchSpecies:Q,setDdSearchCharacterType:ee,setDdSearchStatus:re,setDdSearchGender:ie})}),D<T?Object(a.jsx)(y.a,{className:"justify-content-end p-4",children:Object(a.jsx)(S.a,{className:"text-right",children:Object(a.jsx)("a",{href:"#",onClick:function(){L([]);var e=f;f.includes(c)&&(e=f.slice(0,-7));var t=D+1;m(e+c+t),je(e=e+c+t)},children:"more"})})}):null]})}):null]})},Q=function(e){console.log("Location.js props.results",e.results);var t=Object(r.useState)(!1),c=Object(i.a)(t,2),s=c[0],o=c[1],l=function e(){console.log("Location.js loadDetailsModal",e),o(!s)};return Object(a.jsx)(n.a.Fragment,{children:e.results.length>0?e.results.map((function(t){return Object(a.jsx)(W.a,{className:"m-2 p-2",children:Object(a.jsxs)($.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.url,onClick:l,children:t.name})}),Object(a.jsxs)("p",{children:["Type: ",Object(a.jsx)(q.a,{href:t.type,onClick:function(c){c.preventDefault(),console.log("Location.js props.setDdSearchLocationType(location.type)",t.type),e.setDdSearchLocationType(t.type)},children:t.type})]}),Object(a.jsxs)("p",{children:["Dimension: ",Object(a.jsx)(q.a,{href:t.dimension,onClick:function(c){c.preventDefault(),console.log("Location.js props.setDdSearchDimension(location.dimension)",t.dimension),e.setDdSearchDimension(t.dimension)},children:t.dimension})]}),Object(a.jsx)("p",{children:"Resident(s):"}),Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.residentsList,onClick:e.loadDetailsModal,children:"All Resident(s):"})})]})},t.id)})):null})},X=function(e){var t=Object(l.c)((function(e){return e.locations.locationsURL})),c=Object(l.c)((function(e){return e.locations.paginationURL})),s=Object(l.c)((function(e){return e.characters.arrayCharacters})),o=Object(l.c)((function(e){return e.locations.arraySearchLocationTypes})),j=Object(l.c)((function(e){return e.locations.arraySearchDimensions})),d=Object(r.useState)(""),h=Object(i.a)(d,2),u=h[0],b=h[1],p=Object(r.useState)([]),O=Object(i.a)(p,2),f=O[0],m=O[1],g=Object(r.useState)(0),v=Object(i.a)(g,2),C=v[0],L=v[1],k=Object(r.useState)(0),N=Object(i.a)(k,2),D=N[0],E=N[1],A=Object(r.useState)(""),R=Object(i.a)(A,2),T=R[0],U=R[1],M=Object(r.useState)(""),I=Object(i.a)(M,2),w=I[0],G=I[1],F=Object(r.useState)(""),_=Object(i.a)(F,2),z=_[0],W=_[1],$=Object(r.useState)(""),q=Object(i.a)($,2),H=q[0],K=q[1];Object(r.useEffect)((function(){void 0!==z&&""!==z&&(console.log("Locations.js useEffect ddSearchLocationType",z),X())}),[z]),Object(r.useEffect)((function(){void 0!==H&&""!==H&&(console.log("Locations.js useEffect ddSearchDimension",H),X())}),[H]);var X=function(){var e=t,c="";void 0!==w&&w.length>0&&(c+="&name="+w.replace(" ","%20")),void 0!==z&&""!==z&&(c+="&type="+z.replace(" ","%20")),void 0!==H&&""!==H&&(c+="&dimension="+H.replace(" ","%20")),""!==c&&(e+="?"+c),b(e),Y(e)},Y=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){if(void 0!==e.error)console.log("Locations.js searchLocations data.error",e.error),U(e.error);else{E(e.info.pages);for(var t=0;t<e.results.length;t++){for(var c="",a=e.results[t].residents,r=0;r<a.length;r++){for(var n=0;n<s.length&&a[r].substr(a[r].lastIndexOf("/")+1)!=s[n].id;n++);c+=a[r].substr(a[r].lastIndexOf("/")+1),r<a.length-1&&(c+=",")}Object.assign(e.results[t],{residentsList:c})}m(e.results),L(C+1)}})).catch((function(e){console.log("Locations.js searchLocations err",e),U(e)}))};return Object(a.jsxs)(n.a.Fragment,{children:[""!==T?Object(a.jsx)(x.a,{color:"danger",children:T}):null,""!==u?Object(a.jsx)(x.a,{color:"primary",children:u}):null,Object(a.jsxs)(y.a,{className:"m-2",children:[Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(B.a,{type:"text",id:"txtSearchLocationName",placeholder:"Name",onChange:function(e){G(e.target.value)}})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchLocationType",onChange:function(e){W(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select Type"}),o.length>0?o.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)})):null]})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsxs)(B.a,{type:"select",id:"ddSearchDimension",onChange:function(e){K(e.target.value)},children:[Object(a.jsx)("option",{selected:!0,value:"",children:"Select Dimension"}),j.length>0?j.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)})):null]})})]}),Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(J.a,{id:"btnSearchLocations",color:"primary",size:"lg",className:"ml-4 m-2 p-2",onClick:X,children:"Search Locations"})})}),f.length>0?Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(y.a,{className:"justify-content-center",children:Object(a.jsx)(Q,{results:f,setDdSearchLocationType:W,setDdSearchDimension:K})}),C<D?Object(a.jsx)(y.a,{className:"justify-content-end p-4",children:Object(a.jsx)(S.a,{className:"text-right",children:Object(a.jsx)("a",{href:"#",onClick:function(){m([]);var e=u;u.includes(c)&&(e=u.slice(0,-7));var t=C+1;b(e+c+t),Y(e=e+c+t)},children:"more"})})}):null]})}):null]})},Y=function(e){console.log("Episode.js props.results",e.results);var t=Object(r.useState)(!1),c=Object(i.a)(t,2),s=c[0],o=c[1],l=function e(){console.log("Episode.js loadDetailsModal",e),o(!s)};return Object(a.jsx)(n.a.Fragment,{children:e.results.length>0?e.results.map((function(t){return Object(a.jsx)(W.a,{className:"m-2 p-2",children:Object(a.jsxs)($.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.url,onClick:l,children:t.name})}),Object(a.jsxs)("p",{children:["Episode: ",t.episode]}),Object(a.jsxs)("p",{children:["Air Date: ",t.air_date]}),Object(a.jsx)("p",{children:"Character(s):"}),Object(a.jsx)("p",{children:Object(a.jsx)(q.a,{href:t.charactersList,onClick:e.loadDetailsModal,children:"All Character(s):"})})]})},t.id)})):null})},Z=function(e){var t=Object(l.c)((function(e){return e.episodes.episodesURL})),c=Object(l.c)((function(e){return e.episodes.paginationURL})),s=Object(l.c)((function(e){return e.characters.arrayCharacters})),o=Object(r.useState)(""),j=Object(i.a)(o,2),d=j[0],h=j[1],u=Object(r.useState)([]),b=Object(i.a)(u,2),p=b[0],O=b[1],f=Object(r.useState)(0),m=Object(i.a)(f,2),g=m[0],v=m[1],C=Object(r.useState)(0),L=Object(i.a)(C,2),k=L[0],N=L[1],D=Object(r.useState)(""),E=Object(i.a)(D,2),A=E[0],R=E[1],T=Object(r.useState)(""),U=Object(i.a)(T,2),M=U[0],I=U[1],w=Object(r.useState)(""),G=Object(i.a)(w,2),F=G[0],_=G[1],z=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){if(void 0!==e.error)console.log("Episodes.js getResults data.error",e.error),R(e.error);else{N(e.info.pages);for(var t=0;t<e.results.length;t++){for(var c="",a=e.results[t].characters,r=0;r<a.length;r++){for(var n=0;n<s.length&&a[r].substr(a[r].lastIndexOf("/")+1)!=s[n].id;n++);c+=a[r].substr(a[r].lastIndexOf("/")+1),r<a.length-1&&(c+=",")}Object.assign(e.results[t],{charactersList:c})}O(e.results),v(g+1)}})).catch((function(e){console.log("Episodes.js getResults err",e),R(e)}))};return Object(a.jsxs)(n.a.Fragment,{children:[""!==A?Object(a.jsx)(x.a,{color:"danger",children:A}):null,""!==d?Object(a.jsx)(x.a,{color:"primary",children:d}):null,Object(a.jsxs)(y.a,{className:"m-2",children:[Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(B.a,{type:"text",id:"txtSearchEpisodeName",placeholder:"Name",onChange:function(e){I(e.target.value)}})}),Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(B.a,{type:"text",id:"txtEpisode",placeholder:"Episode",onChange:function(e){_(e.target.value)}})})]}),Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsx)(P.a,{className:"m-2",children:Object(a.jsx)(J.a,{id:"btnSearchEpisodes",color:"primary",size:"lg",className:"ml-4 m-2 p-2",onClick:function(){var e=t,c="";void 0!==M&&M.length>0&&(c+="&name="+M.replace(" ","%20")),void 0!==F&&F.length>0&&(c+="&episode="+F.replace(" ","%20")),""!==c&&(e+="?"+c),h(e),z(e)},children:"Search Episodes"})})}),p.length>0?Object(a.jsx)(y.a,{className:"m-2",children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(y.a,{className:"justify-content-center",children:Object(a.jsx)(Y,{results:p})}),g<k?Object(a.jsx)(y.a,{className:"justify-content-end p-4",children:Object(a.jsx)(S.a,{className:"text-right",children:Object(a.jsx)("a",{href:"#",onClick:function(){O([]);var e=d;d.includes(c)&&(e=d.slice(0,-7));var t=g+1;h(e+c+t),z(e=e+c+t)},children:"more"})})}):null]})}):null]})};var ee=function(){var e=Object(l.c)((function(e){return e.characters.charactersURL})),t=Object(l.c)((function(e){return e.locations.locationsURL})),c=Object(l.c)((function(e){return e.episodes.episodesURL})),s=Object(l.c)((function(e){return e.characters.paginationURL})),o=Object(l.b)(),v=Object(r.useState)(!1),C=Object(i.a)(v,2),L=C[0],E=C[1],A=Object(r.useState)("0"),R=Object(i.a)(A,2),I=R[0],w=R[1],F=Object(r.useState)(""),_=Object(i.a)(F,2),P=_[0],B=_[1],J=Object(r.useState)(""),V=Object(i.a)(J,2),W=V[0],$=V[1],q=Object(r.useState)(""),H=Object(i.a)(q,2),Q=H[0],Y=H[1],ee=function(e){I!==e&&w(e)};return Object(r.useEffect)((function(){!function(){var t,c,a=[],r=[],n=[],i="";fetch(e).then((function(e){return e.json()})).then((function(c){return t=e+s+c.info.pages,fetch(t)})).then((function(e){return e.json()})).then((function(t){var a=t.results;c=a[a.length-1].id;for(var r=1;r<c;r++)i+=r,r<c-1&&(i+=",");return fetch(e+i)})).then((function(e){return e.json()})).then((function(e){for(var t=e,c=0;c<t.length;c++)-1===a.map((function(e){return e.id})).indexOf(t[c].id)&&a.push({id:t[c].id,name:t[c].name,url:t[c].url}),""!==t[c].species&&-1===r.indexOf(t[c].species)&&r.push(t[c].species),""!==t[c].type&&-1===n.indexOf(t[c].type)&&n.push(t[c].type);r.sort((function(e,t){return e>t?1:-1})),n.sort((function(e,t){return e>t?1:-1})),o(k(a)),o(N(r)),o(D(n))})).catch((function(e){console.log("App.js loadCharacterLookupArrays Character Lookups err",e),B(e)}))}(),function(){var e,c,a=[],r=[],n=[],i="";fetch(t).then((function(e){return e.json()})).then((function(c){return e=t+s+c.info.pages,fetch(e)})).then((function(e){return e.json()})).then((function(e){var a=e.results;c=a[a.length-1].id;for(var r=1;r<c;r++)i+=r,r<c-1&&(i+=",");return fetch(t+i)})).then((function(e){return e.json()})).then((function(e){for(var t=e,c=0;c<t.length;c++)-1===a.map((function(e){return e.id})).indexOf(t[c].id)&&a.push({id:t[c].id,name:t[c].name,url:t[c].url}),""!==t[c].type&&-1===r.indexOf(t[c].type)&&r.push(t[c].type),""!==t[c].dimension&&-1===n.indexOf(t[c].dimension)&&n.push(t[c].dimension);r.sort((function(e,t){return e>t?1:-1})),n.sort((function(e,t){return e>t?1:-1})),o(T(a)),o(U(r)),o(M(n))})).catch((function(e){console.log("App.js loadLocationLookupArrays Location Lookups err",e),$(e)}))}(),function(){var e,a,r=[],n="";fetch(c).then((function(e){return e.json()})).then((function(c){return e=t+s+c.info.pages,fetch(e)})).then((function(e){return e.json()})).then((function(e){var t=e.results;a=t[t.length-1].id;for(var r=1;r<a;r++)n+=r,r<a-1&&(n+=",");return fetch(c+n)})).then((function(e){return e.json()})).then((function(e){for(var t=e,c=0;c<t.length;c++)-1===r.map((function(e){return e.id})).indexOf(t[c].id)&&r.push({id:t[c].id,name:t[c].name,url:t[c].url});o(G(r))})).catch((function(e){console.log("App.js loadEpisodesLookupArrays Episode Lookups err",e),Y(e)}))}()}),[]),Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsxs)(j.a,{color:"light",light:!0,expand:"md",children:[Object(a.jsx)(d.a,{href:"#",children:"Rick and Morty"}),Object(a.jsx)(h.a,{onClick:function(){E(!L)}}),Object(a.jsx)(u.a,{isOpen:L,navbar:!0,children:Object(a.jsxs)(b.a,{className:"mr-auto",navbar:!0,children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{href:"https://rickandmortyapi.com",target:"_blank",children:"Rick and Morty API"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{href:"https://rickandmortyapi.com/documentation",target:"_blank",children:"Rick and Morty API Documentation"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{href:"https://mirfishe.github.io/Rick-and-Morty-API/",target:"_blank",children:"Rick and Morty Version 1"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{href:"https://mirfishe.github.io/rick-and-morty-api-react/",target:"_blank",children:"Rick and Morty Version 2"})})]})})]}),Object(a.jsx)(f.a,{children:Object(a.jsx)("h1",{className:"display-3",children:"Rick and Morty"})}),""!==P?Object(a.jsx)(x.a,{color:"danger",children:P}):null,""!==W?Object(a.jsx)(x.a,{color:"danger",children:W}):null,""!==Q?Object(a.jsx)(x.a,{color:"danger",children:Q}):null,Object(a.jsxs)(b.a,{tabs:!0,className:"m-2",children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{className:z()({active:"1"===I}),onClick:function(){ee("1")},children:"Search Characters"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{className:z()({active:"2"===I}),onClick:function(){ee("2")},children:"Search Locations"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(O.a,{className:z()({active:"3"===I}),onClick:function(){ee("3")},children:"Search Episodes"})})]}),Object(a.jsx)(m.a,{activeTab:I,children:Object(a.jsx)(g.a,{tabId:"1",children:Object(a.jsx)(y.a,{children:Object(a.jsx)(S.a,{sm:"12",children:Object(a.jsx)(K,{})})})})}),Object(a.jsx)(m.a,{activeTab:I,children:Object(a.jsx)(g.a,{tabId:"2",children:Object(a.jsx)(y.a,{children:Object(a.jsx)(S.a,{sm:"12",children:Object(a.jsx)(X,{})})})})}),Object(a.jsx)(m.a,{activeTab:I,children:Object(a.jsx)(g.a,{tabId:"3",children:Object(a.jsx)(y.a,{children:Object(a.jsx)(S.a,{sm:"12",children:Object(a.jsx)(Z,{})})})})})]})},te=Object(v.a)({reducer:{characters:E,episodes:F,locations:I}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(l.a,{store:te,children:Object(a.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.af3ab0e1.chunk.js.map