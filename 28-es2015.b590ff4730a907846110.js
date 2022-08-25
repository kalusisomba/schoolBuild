(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"24YL":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var s=r("4WRT"),i=r("fXoL"),c=r("URcr");let o=(()=>{class t{constructor(t){this.routeStateService=t,this.items=[]}ngOnInit(){this.routeStateService.getAll().forEach(t=>{this.items.push({label:t.title,command:()=>{this.onClickBreadcrumb(t.id)}})}),this.home={icon:"pi pi-home"}}onClickBreadcrumb(t){this.routeStateService.loadById(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(s.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(t,e){1&t&&i.Qb(0,"p-breadcrumb",0),2&t&&i.nc("model",e.items)("home",e.home)},directives:[c.a],styles:[""]}),t})()},"4hmF":function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var s=r("tk/3"),i=r("z6cu"),c=r("JIr8"),o=r("AytR"),n=r("fXoL");let b=(()=>{class t{constructor(t){this.httpClient=t,this.apiURL=o.a.apiUrl,this.httpOptions={headers:new s.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}getSubjects(){return this.httpClient.get(this.apiURL+"/subjects/getallsubjects",this.httpOptions).pipe(Object(c.a)(this.errorHandler))}getSubject(t){return this.httpClient.get(this.apiURL+"/subjects/getsubjectbuid/"+t,this.httpOptions)}createSubject(t){return this.httpClient.post(this.apiURL+"/subjects/registersubject",JSON.stringify(t),this.httpOptions).pipe(Object(c.a)(this.errorHandler))}updateSubject(t,e){return this.httpClient.patch(this.apiURL+"/subjects/updatesubject",JSON.stringify(e),this.httpOptions).pipe(Object(c.a)(this.errorHandler))}deleteSubject(t){return this.httpClient.delete(this.apiURL+"/subjects/archive/"+t,this.httpOptions).pipe(Object(c.a)(this.errorHandler))}errorHandler(t){let e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e=`Server Side Error Code: ${t.status}\n Message: ${t.message}`,console.log(e)),Object(i.a)(console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(n.Zb(s.a))},t.\u0275prov=n.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},K0h9:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var s=r("EQGD"),i=r("fXoL");let c=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[s.a]]}),t})()},Wvi8:function(t,e,r){"use strict";r.r(e);var s=r("ofXK"),i=r("tyNb"),c=r("4hmF"),o=r("fXoL"),n=r("24YL");const b=[{path:"",component:(()=>{class t{constructor(t,e,r,s){this.location=t,this.subjectService=e,this.router=r,this.actRoute=s,this.history=[],this.subject=[]}ngOnInit(){this.actRoute.paramMap.subscribe(t=>{this.subjectsID=t.get("_id")}),this.subjectService.getSubject(this.subjectsID).subscribe(t=>{this.subject=t.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/subjects")}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(s.g),o.Pb(c.a),o.Pb(i.c),o.Pb(i.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-subject-details"]],decls:35,vars:5,consts:[[1,"card","card-info"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],[1,"col-sm-8"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(t,e){1&t&&(o.Qb(0,"app-header-breadcrumb"),o.Vb(1,"div",0),o.Vb(2,"div",1),o.Vb(3,"h5",2),o.Ic(4),o.Ub(),o.Ub(),o.Vb(5,"div",3),o.Vb(6,"div",4),o.Vb(7,"div",5),o.Vb(8,"div",4),o.Vb(9,"div",6),o.Vb(10,"strong"),o.Ic(11,"Subject Code"),o.Ub(),o.Ub(),o.Vb(12,"div",6),o.Ic(13),o.Ub(),o.Ub(),o.Vb(14,"div",4),o.Vb(15,"div",6),o.Vb(16,"strong"),o.Ic(17,"Subject Name"),o.Ub(),o.Ub(),o.Vb(18,"div",6),o.Ic(19),o.Ub(),o.Ub(),o.Vb(20,"div",4),o.Vb(21,"div",6),o.Vb(22,"strong"),o.Ic(23,"Subject ShortForm"),o.Ub(),o.Ub(),o.Vb(24,"div",6),o.Ic(25),o.Ub(),o.Ub(),o.Vb(26,"div",4),o.Vb(27,"div",6),o.Vb(28,"strong"),o.Ic(29,"Subject Category"),o.Ub(),o.Ub(),o.Vb(30,"div",6),o.Ic(31),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(32,"div",7),o.Vb(33,"button",8),o.dc("click",(function(){return e.back()})),o.Ic(34,"Back"),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Db(4),o.Kc(" ",e.subject.subjectName,""),o.Db(9),o.Kc(" : ",e.subject.subjectCode," "),o.Db(6),o.Kc(" : ",e.subject.subjectName," "),o.Db(6),o.Kc(" : ",e.subject.subjectShortForm," "),o.Db(6),o.Kc(" : ",e.subject.subjectCategory," "))},directives:[n.a],styles:[""]}),t})()}];let a=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(b)],i.g]}),t})();var u=r("EQGD"),h=r("K0h9");r.d(e,"SubjectDetailsModule",(function(){return l}));let l=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[s.b,a,u.a,h.a]]}),t})()}}]);