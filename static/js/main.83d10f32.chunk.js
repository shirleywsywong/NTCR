(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t.n(l),s=t(2),o=t(3),c=t(5),m=t(4),u=t(6);var d=function(e){return r.a.createElement("header",{className:"hero flex"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,r.a.createElement("span",{className:"emphasize"},e.h1)),r.a.createElement("h2",null,e.h2)))};var h=function(e){return r.a.createElement("section",{className:"about"},r.a.createElement("h2",{className:"emphasize"},e.h2),r.a.createElement("p",null,e.p1),r.a.createElement("p",null,e.p2))},p=t(8),v=t.n(p),f=t(17),g=t(18),y=t.n(g),E=t(9),b=t.n(E),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={allCatData:[],filteredCatData:[],userInput:{size:"anySize",gender:"anyGender",age:"anyAge"}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getPFData()}},{key:"componentDidUpdate",value:function(e,a){this.state.userInput!==a.userInput&&this.catDataFilter()}},{key:"getPFData",value:function(){var e=Object(f.a)(v.a.mark(function e(){var a,t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()({method:"GET",url:"https://shirley-js-p2.herokuapp.com/petfinder",params:{reqUrl:"https://api.petfinder.com/v2/animals",params:{type:"cat",organization:"ON205",status:"adoptable"},clientId:"bur4WwuV4o4wZj0kT5QT43kChD9a9uxtVgLXPsRoQWqxVXw5xH"}});case 3:a=e.sent,t=a.data,n=t.animals,this.setState({allCatData:n,filteredCatData:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),alert("cat.exe stopped running. Please reboot the cat!");case 13:case 14:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"getUserInput",value:function(e,a){var t=this.state.userInput,n={sizeField:t.size,genderField:t.gender,ageField:t.age};n[a]=e.target.value,this.setState({userInput:{size:n.sizeField,gender:n.genderField,age:n.ageField}})}},{key:"renderForm",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"emphasize"},this.props.h2),r.a.createElement("p",null,this.props.content),r.a.createElement("form",{className:"flex"},r.a.createElement("label",{htmlFor:"animal"},"Find your cat:"),r.a.createElement("select",{name:"Size",id:"Size",onChange:function(a){e.getUserInput(a,"sizeField")}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Size"),r.a.createElement("option",{value:"anySize"},"Any"),r.a.createElement("option",{value:"Small"},"Small"),r.a.createElement("option",{value:"Medium"},"Medium"),r.a.createElement("option",{value:"Large"},"Large")),r.a.createElement("select",{name:"Gender",id:"Gender",onChange:function(a){e.getUserInput(a,"genderField")}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Gender"),r.a.createElement("option",{value:"anyGender"},"Any"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female")),r.a.createElement("select",{name:"Age",id:"Age",onChange:function(a){e.getUserInput(a,"ageField")}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Age"),r.a.createElement("option",{value:"anyAge"},"Any"),r.a.createElement("option",{value:"Young"},"Young"),r.a.createElement("option",{value:"Adult"},"Adult"),r.a.createElement("option",{value:"Senior"},"Senior"))))}},{key:"catDataFilter",value:function(){var e=this.state,a=e.allCatData,t=e.userInput,n=[];a.map(function(e){var a,r,l=e.size,i=e.gender,s=e.age,o=!1;i!==t.gender&&"anyGender"!==t.gender||(a=!0),s!==t.age&&"anyAge"!==t.age||(r=!0),l!==t.size&&"anySize"!==t.size||(o=!0),a&&r&&o&&n.push(e)}),this.setState({filteredCatData:n})}},{key:"renderList",value:function(){var e=this.state.filteredCatData;return 0==e.length?r.a.createElement("div",{className:"masonry-item"},r.a.createElement("p",null,"Your search did not return any results, but don't give up! There're so many more cats you can snuggle with."),r.a.createElement("img",{src:b.a,alt:""})):e.map(function(e){var a=e.id,t=e.name,n=e.description,l=e.photos,i=e.url,s=l[0].medium,o=document.createElement("textarea");o.innerHTML=n;var c=document.createElement("textarea");c.innerHTML=o.value;var m=c.value.split(":")[2];return"undefined"==typeof m&&(m="".concat(t," will sit on your keyboard and prevent you from working all day, in case if you need an excuse.")),r.a.createElement("div",{className:"masonry-item",key:a},r.a.createElement("div",{className:"gallery-item-img relative"},r.a.createElement("img",{src:s,alt:t}),r.a.createElement("div",{className:"gallery-overlay flex"},r.a.createElement("p",null,m),r.a.createElement("p",null,r.a.createElement("a",{href:i,target:"_blank"},"Adopt me today!")))),r.a.createElement("div",{className:"gallery-name"},r.a.createElement("p",{className:"cat-name"},"My name is ",t,".")))})}},{key:"renderEmptyState",value:function(){return r.a.createElement("div",{className:"masonry-item"},r.a.createElement("p",null,"Cat.exe is loading..."),r.a.createElement("img",{src:b.a,alt:"Fetching data"}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"adoption"},this.renderForm(),r.a.createElement("div",{className:"masonry"},this.state.allCatData.length?this.renderList():this.renderEmptyState()))}}]),a}(n.Component);var w=function(e){return r.a.createElement("footer",{className:"flex"},r.a.createElement("p",null,e.copyright),r.a.createElement("div",{className:"social-icons flex"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-facebook-f"},r.a.createElement("span",{className:"visuallyhidden"},"Facebook"))),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-twitter"},r.a.createElement("span",{className:"visuallyhidden"},"Twitter"))),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-instagram"},r.a.createElement("span",{className:"visuallyhidden"},"Instagram"))),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-pinterest"},r.a.createElement("span",{className:"visuallyhidden"},"Pinterest")))))},k=(t(46),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{h1:"North Toronto Cat Rescue",h2:"Adopt don't shop!"}),r.a.createElement(h,{h2:"About Us",p1:"North Toronto Cat Rescue (NTCR) is a registered non-profit no-kill cat shelter in its 30th year of continuous community service. Established by Donna Cox, our goal is to take vulnerable cats off the streets, where they can live in a safe and nurturing environment until they find their permanent home.",p2:"Over the past 30 years, more than 3,000 cats have benefited from NTCR and our group of volunteers, from rescuing them and provide veterinary care, to socializing and finally adoption. NTCR is unique among other shelters. Our no cage policy means our cats are free to roam and play, where they are provided with the opportunity to learn to interact with other animals and humans. This helps to simulate a life style that is as close to the home life they will have when they find their forever homes."}),r.a.createElement(N,{h2:"Available for adoption",content:"Check out these cats that are currently living in the shelter! If you are interested in adopting one our fur babies, please click on the link on each cat."}),r.a.createElement(w,{copyright:"\xa92019 Shirley's Javascript Project. Data provided by <a href=`https://www.petfinder.com/developers/v2/docs/`>Pet Finder API</a>"}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t.p+"static/media/loading.4afb2bd7.gif"}},[[19,1,2]]]);
//# sourceMappingURL=main.83d10f32.chunk.js.map