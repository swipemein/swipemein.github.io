(this.webpackJsonpswipemein=this.webpackJsonpswipemein||[]).push([[0],{64:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(36),s=n.n(a),r=(n(64),n(40)),c=n(14),o=n(5),l=n(8),u=n(12),d=n(13),j=n.p+"static/media/smi-logo.218d5095.png",h=n(0),p=n.n(h),b=n(3),m=function(e){var t=new Date(1e3*e);return t.toLocaleDateString()+", "+t.toLocaleTimeString()},O=function(e){return e.sort((function(e,t){return e.swipeTime-t.swipeTime}))},f=function(e){return e.sort((function(e,t){return function(e,t){return e.swipeTime===t.swipeTime?e.price-t.price:e.swipeTime-t.swipeTime}(e,t)}))},x=n(38),w=n(55),v=n(2);Object(w.a)({apiKey:"AIzaSyDAVAezS1NPeLwvjW_Ldx3NYbSsWzdTGPg",authDomain:"swipemein-storage.firebaseapp.com",projectId:"swipemein-storage",storageBucket:"swipemein-storage.appspot.com",messagingSenderId:"810938213396",appId:"1:810938213396:web:44f1aff1b0f0b3a3553301",measurementId:"G-E7QJK7RDFJ"});var g=Object(x.b)(),y=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"createProfile",value:function(){var t=Object(b.a)(p.a.mark((function t(n,i){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.a)(g,n,i).then((function(t){var n=t._tokenResponse.idToken,i=t.user.uid;e.storeToken(n,i),fetch("https://swipemein.herokuapp.com/addUser",{method:"POST",headers:{"Content-Type":"application/json",Authorization:e.getToken()}}).catch((function(e){alert("Error inserting into database.")}))})).catch((function(e){alert("Error creating user: "+e.code)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"logIn",value:function(){var t=Object(b.a)(p.a.mark((function t(n,i){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.c)(g,n,i).then((function(t){var n=t._tokenResponse.idToken,i=t.user.uid;e.storeToken(n,i)})).catch((function(e){alert("Error signing in: "+e.code)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"logOut",value:function(){Object(x.d)(g).then((function(){e.removeToken()})).catch((function(e){console.log("error signing out")}))}},{key:"isLoggedIn",value:function(){return void 0!==e.getToken()&&null!==e.getToken()}},{key:"storeToken",value:function(e,t){localStorage.setItem("idToken",e),localStorage.setItem("uid",t)}},{key:"removeToken",value:function(){localStorage.removeItem("idToken"),localStorage.removeItem("uid")}},{key:"getToken",value:function(){return localStorage.getItem("idToken")}},{key:"getUID",value:function(){return localStorage.getItem("uid")}},{key:"redirectLogin",value:function(){return Object(v.jsx)(c.a,{to:"/login",exact:!0})}}]),e}(),k=n(77),S=n(78),T=(n(26),n(71),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e;return e=y.isLoggedIn()?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(k.a.Link,{href:"/#/dashboard",children:"Dashboard"}),Object(v.jsx)(k.a.Link,{href:"/#/profile",children:"Profile"}),Object(v.jsx)(k.a.Link,{href:"/",onClick:function(){return y.logOut()},children:"Logout"})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(k.a.Link,{href:"/#/login",children:"Login"})}),Object(v.jsxs)(S.a,{children:[Object(v.jsxs)(S.a.Brand,{id:"navbrand",href:"/",children:[Object(v.jsx)("img",{src:j,height:"40",alt:"asdf"}),Object(v.jsx)("h5",{children:"SwipeMeIn"})]}),Object(v.jsx)(S.a.Collapse,{children:Object(v.jsx)(k.a,{className:"ml-auto",children:e})})]})}}]),n}(i.Component)),N=n(80),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("p",{children:["\xa9 2021 Christian Scarlett. Please leave feedback or bug reports in this ",Object(v.jsx)("a",{href:"https://forms.gle/HvKSaiyvodTGc1jH6",children:"form"}),"."]})})})}}]),n}(i.Component),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;Object(o.a)(this,n),i=t.call(this,e);var a=window.location.href;if(a.includes("code")&&null===localStorage.getItem(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SUB_ID)){var s=a.split("?")[1].split("#")[0].split("=")[1];y.login(s)}return i}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(T,{}),Object(v.jsxs)("div",{className:"container-fluid homephotos",children:[Object(v.jsx)("div",{className:"hometitle container",children:Object(v.jsx)("h2",{children:"SwipeMeIn"})}),Object(v.jsx)("div",{className:"homeinfo container-fluid",children:Object(v.jsxs)("div",{className:"col-xs-4 homedescription",children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h3",{children:"What is SwipeMeIn?"})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("p",{children:"We\u2019ve all been there: it\u2019s 7 PM, you\u2019re on campus, and you\u2019re hungry. You have two options: spend an absurd amount of money for on-campus dining or ask a friend to lend you a swipe."}),Object(v.jsx)("p",{children:"With meal plan minimums increasing and limited swipe donation programs to take advantage of, countless students end each year with extra swipes that are wasted. SwipeMeIn is a platform for those with extra swipes to make the most of their surplus and the hungry to score a free meal."})]}),Object(v.jsxs)("div",{className:"homedirections row container",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(I,{title:"Log in",text:"Log in using your kerberos in OIDC."})}),Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(I,{title:"Add/Claim a Swipe",text:"Say where and when you'll eat, or find a place and time that works for your stomach."})}),Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(I,{title:"Get Swiped!",text:"Eat!"})})]})]})})]}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)(N.a,{children:Object(v.jsxs)(N.a.Body,{children:[Object(v.jsx)(N.a.Title,{children:this.props.title}),Object(v.jsx)(N.a.Text,{children:this.props.text})]})})}}]),n}(i.Component),L=n(76),E=n(75),B=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={swipe:i.props.swipe,deleted:!1},i}return Object(l.a)(n,[{key:"claimSwipe",value:function(){var e=Object(b.a)(p.a.mark((function e(t,n){var i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),fetch("https://swipemein.herokuapp.com/claimSwipe?id="+t.id,{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return 500===e.status?alert("Internal 500 error: couldn't claim swipe."):200!==e.status&&alert("Unknown response status: "+e.status),e.json()})).then((function(e){i.setState({swipe:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"unclaimSwipe",value:function(){var e=Object(b.a)(p.a.mark((function e(t,n){var i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),fetch("https://swipemein.herokuapp.com/unclaimSwipe?id="+t.id,{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return 500===e.status?(alert("Internal 500 error: couldn't unclaim swipe."),null):(200!==e.status&&alert("Unknown response status: "+e.status),e.json())})).then((function(e){null!==e&&i.setState({swipe:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteSwipe",value:function(){var e=Object(b.a)(p.a.mark((function e(t,n){var i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),fetch("https://swipemein.herokuapp.com/deleteswipe?id="+t.id,{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){500!==e.status?(200!==e.status&&alert("Unknown response status: "+e.status),i.setState({deleted:!0})):alert("Internal 500 error: couldn't delete swipe.")}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.deleted)return Object(v.jsx)(v.Fragment,{});var t,n=this.state.swipe;return t="null"===n.claimedBy.id?Object(v.jsx)(E.a,{onClick:function(t){return e.claimSwipe(n,t)},children:"Claim Swipe"}):n.claimedBy.id===y.getUID()?Object(v.jsx)(E.a,{className:"cancelClaimBtn",onClick:function(t){return e.unclaimSwipe(n,t)},children:"Cancel Claim"}):Object(v.jsx)(E.a,{disabled:!0,children:"Swipe Claimed"}),Object(v.jsx)("div",{className:"swipecard container",children:Object(v.jsx)("div",{className:"col-xs-4",children:Object(v.jsx)(N.a,{children:Object(v.jsx)(N.a.Body,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(N.a.Title,{className:"col",children:n.location}),Object(v.jsxs)(N.a.Title,{className:"col text-right",children:["$",n.price]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(N.a.Subtitle,{className:"col",children:m(n.swipeTime)}),Object(v.jsxs)(N.a.Text,{className:"col swipeText",children:[n.ownedBy.firstName,", ",n.ownedBy.email]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col claimSwipeArea",children:[t,Object(v.jsx)(k.a.Link,{href:"/#/swipeinfo/"+n.id,children:"Info"}),n.ownedBy.id===y.getUID()&&Object(v.jsx)(k.a.Link,{onClick:function(t){return e.deleteSwipe(n,t)},children:"Delete"})]}),Object(v.jsxs)(N.a.Text,{className:"col swipeText",children:["Social Preference: ",n.ownedBy.socialPreference]})]})]})})})})})}}]),n}(i.Component),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={name:"",email:"",socialPreference:"",passwordButtonText:"Submit New Password",profileButtonText:"Submit Profile Changes",ownedSwipes:null,claimedSwipes:null},i}return Object(l.a)(n,[{key:"updateProfile",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("nameinput").value,n=document.getElementById("socialpreferenceinput").value,fetch("https://swipemein.herokuapp.com/updateUser",{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()},body:JSON.stringify({firstName:t,socialPreference:n})}).then((function(){i.setState({profileButtonText:"Profile Change Successful!"})})).catch((function(e){alert("Error changing profile.")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"changePassword",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n,i=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("newpassword"),n=t.value,fetch("https://swipemein.herokuapp.com/changePassword",{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()},body:JSON.stringify({newPassword:n})}).then((function(){t.value="",i.setState({passwordButtonText:"Password Change Successful!"})})).catch((function(){alert("Error changing password.")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserOwnedSwipes",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({ownedSwipes:null}),fetch("https://swipemein.herokuapp.com/userOwnedSwipes",{method:"GET",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return e.json()})).then((function(e){var n=O(Object.values(e)).map((function(e){return Object(v.jsx)(B,{swipe:e},e.id)}));t.setState({ownedSwipes:n})})).catch((function(e){alert("Error getting user owned swipes. Status code: "+e.status)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserClaimedSwipes",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({claimedSwipes:null}),fetch("https://swipemein.herokuapp.com/userClaimedSwipes",{method:"GET",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return e.json()})).then((function(e){var n=O(Object.values(e)).map((function(e){return Object(v.jsx)(B,{swipe:e},e.id)}));t.setState({claimedSwipes:n})})).catch((function(e){alert("Error getting user claimed swipes. Status code: "+e.status)}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;fetch("https://swipemein.herokuapp.com/getUser",{method:"GET",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return e.json()})).then((function(t){var n=t.userData;e.setState({name:n.firstName,email:n.email,socialPreference:n.socialPreference})})),this.getUserOwnedSwipes(),this.getUserClaimedSwipes()}},{key:"render",value:function(){var e=this;if(!y.isLoggedIn())return y.redirectLogin();var t=this.state.ownedSwipes,n=this.state.claimedSwipes;return t&&t.reverse(),n&&n.reverse(),Object(v.jsxs)("div",{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h1",{className:"pagetitle",children:"Profile"})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h5",{children:"Info"}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Name:"}),Object(v.jsx)(L.a.Control,{id:"nameinput",type:"text",defaultValue:this.state.name})]}),Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Email:"}),Object(v.jsx)(L.a.Control,{type:"email",placeholder:this.state.email,disabled:!0})]}),Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Social Preferences:"}),Object(v.jsx)(L.a.Control,{id:"socialpreferenceinput",type:"text",defaultValue:this.state.socialPreference})]}),Object(v.jsx)(E.a,{onClick:function(){return e.updateProfile()},children:this.state.profileButtonText})]}),Object(v.jsx)("br",{}),Object(v.jsx)("h5",{children:"Change Password"}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(L.a.Group,{children:Object(v.jsx)(L.a.Control,{id:"newpassword",type:"password",placeholder:"New Password"})}),Object(v.jsx)(E.a,{onClick:function(){return e.changePassword()},children:this.state.passwordButtonText})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"container row noPush",id:"profilefooter",children:[Object(v.jsxs)("div",{className:"col noPush",children:[Object(v.jsx)("h5",{children:"Swipes you own:"}),Object(v.jsx)("div",{className:"container",children:null===t?"loading":0===t.length?"None":t})]}),Object(v.jsxs)("div",{className:"col noPush",children:[Object(v.jsx)("h5",{children:"Swipes you've claimed:"}),Object(v.jsx)("div",{className:"container",children:null===n?"loading":0===n.length?"None":n})]})]})]})}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),A=["Maseeh","McCormick","Baker","Next","Simmons","New Vassar"],G=n(79),U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={swipes:[],loading:!1},i}return Object(l.a)(n,[{key:"getFilteredResults",value:function(e){e.preventDefault();var t={locations:[]};A.forEach((function(e){document.getElementById(e).checked&&t.locations.push(e)})),this.getSwipes(t)}},{key:"getSwipes",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setState({loading:!0}),fetch("https://swipemein.herokuapp.com/getswipes?filters="+JSON.stringify(t),{headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return e.json()})).then((function(t){var n=f(Object.values(t)).map((function(e){return Object(v.jsx)(B,{swipe:e},e.id)}));e.setState({swipes:n,loading:!1})}))}},{key:"makeCheckboxes",value:function(e){var t=[];return e.forEach((function(e){t.push(Object(v.jsx)(L.a.Check,{type:"checkbox",label:e,id:e,name:e,defaultChecked:!0},e))})),t}},{key:"componentDidMount",value:function(){this.getSwipes()}},{key:"render",value:function(){var e=this;if(!y.isLoggedIn())return y.redirectLogin();var t=this.state.swipes,n=this.makeCheckboxes(A);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h1",{className:"pagetitle",children:"Swipe Dashboard"})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row container",id:"middashboard",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(G.a,{children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(N.a.Header,{children:Object(v.jsx)(G.a.Toggle,{as:E.a,eventKey:"0",children:"Filters"})}),Object(v.jsx)(G.a.Collapse,{eventKey:"0",children:Object(v.jsx)(N.a.Body,{children:Object(v.jsxs)(L.a,{onSubmit:function(t){return e.getFilteredResults(t)},id:"filterform",name:"filterform",children:[Object(v.jsx)("h2",{children:"Dining Halls:"}),Object(v.jsx)(L.a.Group,{children:n}),Object(v.jsx)(G.a.Toggle,{type:"submit",as:E.a,eventKey:"0",children:"Apply Filters"})]})})})]})})}),Object(v.jsx)("div",{className:"col",id:"addswipebuttoncol",children:Object(v.jsx)(E.a,{className:"btn-block",href:"/#/addswipe",id:"addswipebutton",children:"Add Swipe"})})]})}),Object(v.jsx)("div",{className:"container",children:this.state.loading?"loading":0===t.length?"No swipes available.":t}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={swipe:{}},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.hash.split("/"),n=t[t.length-1];fetch("https://swipemein.herokuapp.com/getswipe?id="+n,{headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){return e.json()})).then((function(t){e.setState({swipe:t})}))}},{key:"render",value:function(){if(!y.isLoggedIn())return y.redirectLogin();var e=this.state.swipe;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"col-xs-4",children:0===Object.entries(e).length?"loading":Object(v.jsx)(B,{swipe:e})})}),Object(v.jsx)("div",{className:"swipeViewBuffer"}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"submitForm",value:function(e){e.preventDefault();var t={};if(["swipedininghall","swipedate","swipetime","swipeprice"].forEach((function(e){t[e]=document.getElementById(e).value})),console.log(t.swipeprice),""!==t.swipedate)if(""!==t.swipetime)if(""!==t.swipeprice){document.getElementById("submitbutton").disabled=!0;var n=Date.parse(t.swipedate+"T"+t.swipetime),i={active:!0,claimedBy:null,location:t.swipedininghall,ownedBy:null,swipeTime:n,price:Number(t.swipeprice)};fetch("https://swipemein.herokuapp.com/addswipe?data="+JSON.stringify(i),{method:"POST",headers:{"Content-Type":"application/json",Authorization:y.getToken()}}).then((function(e){500===e.status?alert("Internal 500 error: couldn't add swipe."):200===e.status?alert("Swipe added successfully!"):alert("Unknown response status: "+e.status),document.getElementById("submitbutton").disabled=!1}))}else alert("Please enter the price of your swipe.");else alert("Please enter the time of your swipe.");else alert("Please enter the date of your swipe.")}},{key:"render",value:function(){if(!y.isLoggedIn())return y.redirectLogin();var e=A.map((function(e){return Object(v.jsx)("option",{children:e},e)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h1",{className:"pagetitle",children:"Add Swipe"})}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(N.a,{children:Object(v.jsx)(N.a.Body,{children:Object(v.jsxs)(L.a,{onSubmit:this.submitForm,id:"swipeform",children:[Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Location"}),Object(v.jsx)(L.a.Control,{as:"select",id:"swipedininghall",children:e})]}),Object(v.jsxs)(L.a.Row,{children:[Object(v.jsx)("div",{className:"col-xs-4",children:Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Day"}),Object(v.jsx)(L.a.Control,{type:"date",id:"swipedate"})]})}),Object(v.jsx)("div",{className:"col-xs-4",children:Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Time"}),Object(v.jsx)(L.a.Control,{type:"time",id:"swipetime"})]})}),Object(v.jsx)("div",{className:"col-xs-4",children:Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Price ($)"}),Object(v.jsx)(L.a.Control,{type:"number",step:"0.01",min:"0",defaultValue:"0",id:"swipeprice"})]})})]}),Object(v.jsx)(E.a,{type:"submit",id:"submitbutton",children:"Submit"})]})})})}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h1",{className:"pagetitle",children:"Error 404: Page not found"})}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"submitLogin",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("login-email").value,n=document.getElementById("login-pw").value,e.next=4,y.logIn(t,n);case 4:this.props.history.push("/dashboard");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"submitSignup",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("signup-email").value,n=document.getElementById("signup-pw").value,e.next=4,y.createProfile(t,n);case 4:this.props.history.push("/dashboard");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return y.isLoggedIn()?Object(v.jsx)(c.a,{to:"/dashboard"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(T,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("h1",{className:"pagetitle",children:"Login"})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h5",{children:"Log in"}),Object(v.jsx)("div",{className:"loginform",children:Object(v.jsxs)(L.a,{children:[Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Email:"}),Object(v.jsx)(L.a.Control,{id:"login-email",placeholder:"<kerb>@mit.edu",type:"email"})]}),Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Password:"}),Object(v.jsx)(L.a.Control,{id:"login-pw",placeholder:"Password",type:"password"})]}),Object(v.jsx)(E.a,{onClick:function(){return e.submitLogin()},children:"Log In"})]})}),Object(v.jsx)("br",{}),Object(v.jsx)("h5",{children:"Sign Up"}),Object(v.jsx)("div",{className:"loginform",children:Object(v.jsxs)(L.a,{children:[Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Email:"}),Object(v.jsx)(L.a.Control,{id:"signup-email",placeholder:"<kerb>@mit.edu",type:"email"})]}),Object(v.jsxs)(L.a.Group,{children:[Object(v.jsx)(L.a.Label,{children:"Password: (must be at least 8 characters long)"}),Object(v.jsx)(L.a.Control,{id:"signup-pw",placeholder:"Password",type:"password"})]}),Object(v.jsx)(E.a,{onClick:function(){return e.submitSignup()},children:"Sign Up"})]})})]}),Object(v.jsx)(C,{})]})}}]),n}(i.Component),M=Object(c.g)(R);var W=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(r.a,{basename:"",children:Object(v.jsxs)(c.d,{children:[Object(v.jsx)(c.b,{exact:!0,path:"/",render:function(){return Object(v.jsx)(P,{})}}),Object(v.jsx)(c.b,{exact:!0,path:"/profile",render:function(){return Object(v.jsx)(D,{})}}),Object(v.jsx)(c.b,{exact:!0,path:"/dashboard",render:function(){return Object(v.jsx)(U,{})}}),Object(v.jsx)(c.b,{exact:!0,path:"/swipeinfo/:id",render:function(){return Object(v.jsx)(F,{})}}),Object(v.jsx)(c.b,{exact:!0,path:"/addswipe",render:function(){return Object(v.jsx)(z,{})}}),Object(v.jsx)(c.b,{exact:!0,path:"/login",render:function(){return Object(v.jsx)(M,{})}}),Object(v.jsx)(c.b,{path:"*",exact:!0,render:function(){return Object(v.jsx)(_,{})}})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(v.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.77b8a6c7.chunk.js.map