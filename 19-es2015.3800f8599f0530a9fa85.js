(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4hmF":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var s=r("tk/3"),o=r("z6cu"),i=r("JIr8"),n=r("AytR"),c=r("fXoL");let a=(()=>{class t{constructor(t){this.httpClient=t,this.apiURL=n.a.apiUrl,this.httpOptions={headers:new s.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}getSubjects(){return this.httpClient.get(this.apiURL+"/subjects/getallsubjects",this.httpOptions).pipe(Object(i.a)(this.errorHandler))}getSubject(t){return this.httpClient.get(this.apiURL+"/subjects/getsubjectbuid/"+t,this.httpOptions)}createSubject(t){return this.httpClient.post(this.apiURL+"/subjects/registersubject",JSON.stringify(t),this.httpOptions).pipe(Object(i.a)(this.errorHandler))}updateSubject(t,e){return this.httpClient.patch(this.apiURL+"/subjects/updatesubject",JSON.stringify(e),this.httpOptions).pipe(Object(i.a)(this.errorHandler))}deleteSubject(t){return this.httpClient.delete(this.apiURL+"/subjects/archive/"+t,this.httpOptions).pipe(Object(i.a)(this.errorHandler))}errorHandler(t){let e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e=`Server Side Error Code: ${t.status}\n Message: ${t.message}`,console.log(e)),Object(o.a)(console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(s.a))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Olgc:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var s=r("fXoL"),o=r("7zfz");let i=(()=>{class t{constructor(t){this.messageService=t}addSingle(t,e,r){this.messageService.add({severity:t,summary:e,detail:r})}addMultiple(t){this.messageService.addAll(t)}clear(){this.messageService.clear()}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(o.d))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},WsT8:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var s=r("tk/3"),o=r("z6cu"),i=r("JIr8"),n=r("AytR"),c=r("fXoL");let a=(()=>{class t{constructor(t){this.httpClient=t,this.apiURL=n.a.apiUrl,this.httpOptions={headers:new s.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}getSubjectGroups(){return this.httpClient.get(`${this.apiURL}/subjects/getallsubjectgroup`,this.httpOptions).pipe(Object(i.a)(this.errorHandler))}getSubjectGroup(t){return this.httpClient.get(`${this.apiURL}/subjects/getsubjectgroupby/${t}`,this.httpOptions).pipe(Object(i.a)(this.errorHandler))}createSubjectGroup(t){return this.httpClient.post(this.apiURL+"/subjects/registergroup",JSON.stringify(t),this.httpOptions).pipe(Object(i.a)(this.errorHandler))}updateSubjectGroup(t,e){return this.httpClient.patch(`${this.apiURL}/subjects/updatesubjectgroup`,JSON.stringify(e),this.httpOptions).pipe(Object(i.a)(this.errorHandler))}deleteSubjectGroup(t){return this.httpClient.delete(`${this.apiURL}/subjects/archive`,this.httpOptions).pipe(Object(i.a)(this.errorHandler))}errorHandler(t){let e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e=`Server Side Error Code: ${t.status}\n Message: ${t.message}`,console.log(e)),Object(o.a)(console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(s.a))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"j/eD":function(t,e,r){"use strict";r.r(e);var s=r("ofXK"),o=r("tyNb"),i=r("7vv+"),n=r("fXoL");const c=[{path:"",component:i.a}];let a=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(c)],o.g]}),t})();r.d(e,"CreateSubjectGroupModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({factory:function(e){return new(e||t)},imports:[[s.b,a]]}),t})()}}]);