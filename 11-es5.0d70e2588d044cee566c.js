function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"24YL":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r("4WRT"),i=r("fXoL"),n=r("URcr"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.routeStateService=e,this.items=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.routeStateService.getAll().forEach((function(e){t.items.push({label:e.title,command:function(){t.onClickBreadcrumb(e.id)}})})),this.home={icon:"pi pi-home"}}},{key:"onClickBreadcrumb",value:function(t){this.routeStateService.loadById(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Pb(o.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(t,e){1&t&&i.Qb(0,"p-breadcrumb",0),2&t&&i.nc("model",e.items)("home",e.home)},directives:[n.a],styles:[""]}),t}()},"4hmF":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var o=r("tk/3"),i=r("z6cu"),n=r("JIr8"),c=r("AytR"),s=r("fXoL"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpClient=e,this.apiURL=c.a.apiUrl,this.httpOptions={headers:new o.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}return _createClass(t,[{key:"getSubjects",value:function(){return this.httpClient.get(this.apiURL+"/subjects/getallsubjects",this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"getSubject",value:function(t){return this.httpClient.get(this.apiURL+"/subjects/getsubjectbuid/"+t,this.httpOptions)}},{key:"createSubject",value:function(t){return this.httpClient.post(this.apiURL+"/subjects/registersubject",JSON.stringify(t),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"updateSubject",value:function(t,e){return this.httpClient.patch(this.apiURL+"/subjects/updatesubject",JSON.stringify(e),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"deleteSubject",value:function(t){return this.httpClient.delete(this.apiURL+"/subjects/archive/"+t,this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"errorHandler",value:function(t){var e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e="Server Side Error Code: ".concat(t.status,"\n Message: ").concat(t.message),console.log(e)),Object(i.a)(console.log(e))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Zb(o.a))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"4sjs":function(t,e,r){"use strict";r.r(e);var o=r("ofXK"),i=r("tyNb"),n=r("Olgc"),c=r("4hmF"),s=r("WsT8"),a=r("fXoL"),u=r("3Pt+"),l=r("24YL");function b(t,e){if(1&t&&(a.Vb(0,"option",26),a.Ic(1),a.Ub()),2&t){var r=e.$implicit;a.nc("value",r._id),a.Db(1),a.Kc(" ",r.subjectName," ")}}var p,h,d=[{path:"",component:(p=function(){function t(e,r,o,i,n,c,s){var a=this;_classCallCheck(this,t),this.location=e,this.subjectGroupService=r,this.subjectService=o,this.toastService=i,this.router=n,this.formBuilder=c,this.actRoute=s,this.history=[],this.subjectGroup=[],this.teachers=[],this.subjects=[],this._id=this.actRoute.snapshot.paramMap.get("_id"),this.subjectGroupService.getSubjectGroup(this._id).subscribe((function(t){a.subjectGroup=t.data,a.editForm.patchValue(t.data)})),this.editForm=this.formBuilder.group({_id:[""],subjectID:[""],groupName:[""],groupShortName:[""],subjectGroup:[""]})}return _createClass(t,[{key:"ngOnInit",value:function(){this.getSubjectService()}},{key:"getSubjectService",value:function(){var t=this;this.subjectService.getSubjects().subscribe((function(e){t.subjects=e.data}),(function(e){t.toastService.addSingle("error","sorry, an error occurred try again","")}))}},{key:"onSubmit",value:function(t){var e=this;this.subjectGroupService.updateSubjectGroup(this._id,t.value).subscribe((function(t){e.toastService.addSingle("success","data added successfully",""),e.router.navigateByUrl("/main/subjectGroups")}),(function(t){e.toastService.addSingle("error","sorry, an error occurred try again","")}))}},{key:"back",value:function(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/subjectGroups")}}]),t}(),p.\u0275fac=function(t){return new(t||p)(a.Pb(o.g),a.Pb(s.a),a.Pb(c.a),a.Pb(n.a),a.Pb(i.c),a.Pb(u.c),a.Pb(i.a))},p.\u0275cmp=a.Jb({type:p,selectors:[["app-edit-subject-group"]],decls:45,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["formControlName","_id","id","_id","type","hidden"],[1,"row"],[1,"col-sm-6"],[1,"form-group"],["for","subjectID"],["formControlName","subjectID","id","subjectID",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","groupName"],["formControlName","groupName","id","groupName","type","string",1,"form-control"],["for","groupShortName"],["formControlName","groupShortName","id","groupShortName","type","text",1,"form-control"],["for","subjectGroup"],["formControlName","subjectGroup","id","subjectGroup",1,"form-control"],["value","Category1"],["value","Category2"],["value","Category3"],["value","Category4"],[1,"card-footer"],["type","submit",1,"btn","btn-info","mx-2",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[3,"value"]],template:function(t,e){1&t&&(a.Qb(0,"app-header-breadcrumb"),a.Vb(1,"form",0),a.dc("ngSubmit",(function(){return e.onSubmit(e.editForm)})),a.Vb(2,"div",1),a.Vb(3,"div",2),a.Vb(4,"h6",3),a.Ic(5,"Update Details"),a.Ub(),a.Ub(),a.Vb(6,"div",4),a.Qb(7,"input",5),a.Vb(8,"div",6),a.Vb(9,"div",7),a.Vb(10,"div",8),a.Vb(11,"label",9),a.Ic(12,"Subject"),a.Ub(),a.Vb(13,"select",10),a.Vb(14,"option",11),a.Ic(15,"--Select subject--"),a.Ub(),a.Gc(16,b,2,2,"option",12),a.Ub(),a.Ub(),a.Ub(),a.Vb(17,"div",7),a.Vb(18,"div",8),a.Vb(19,"label",13),a.Ic(20,"Group Name:"),a.Ub(),a.Qb(21,"input",14),a.Ub(),a.Ub(),a.Vb(22,"div",7),a.Vb(23,"div",8),a.Vb(24,"label",15),a.Ic(25,"ShortName Group:"),a.Ub(),a.Qb(26,"input",16),a.Ub(),a.Ub(),a.Vb(27,"div",7),a.Vb(28,"div",8),a.Vb(29,"label",17),a.Ic(30,"subjectGroup:"),a.Ub(),a.Vb(31,"select",18),a.Vb(32,"option",19),a.Ic(33,"Category1"),a.Ub(),a.Vb(34,"option",20),a.Ic(35,"Category2"),a.Ub(),a.Vb(36,"option",21),a.Ic(37,"Category3"),a.Ub(),a.Vb(38,"option",22),a.Ic(39,"Category4"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(40,"div",23),a.Vb(41,"button",24),a.Ic(42,"Update"),a.Ub(),a.Vb(43,"button",25),a.dc("click",(function(){return e.back()})),a.Ic(44,"Cancel"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.Db(1),a.nc("formGroup",e.editForm),a.Db(15),a.nc("ngForOf",e.subjects),a.Db(25),a.nc("disabled",!e.editForm.valid))},directives:[l.a,u.w,u.l,u.f,u.b,u.k,u.e,u.t,u.o,u.v,o.j],styles:[""]}),p)}],f=((h=function t(){_classCallCheck(this,t)}).\u0275mod=a.Nb({type:h}),h.\u0275inj=a.Mb({factory:function(t){return new(t||h)},imports:[[i.g.forChild(d)],i.g]}),h),v=r("EQGD"),g=r("K0h9");r.d(e,"EditSubjectGroupModule",(function(){return j}));var m,j=((m=function t(){_classCallCheck(this,t)}).\u0275mod=a.Nb({type:m}),m.\u0275inj=a.Mb({factory:function(t){return new(t||m)},imports:[[o.b,f,v.a,g.a]]}),m)},K0h9:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r("EQGD"),i=r("fXoL"),n=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[o.a]]}),t}()},Olgc:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r("fXoL"),i=r("7zfz"),n=function(){var t=function(){function t(e){_classCallCheck(this,t),this.messageService=e}return _createClass(t,[{key:"addSingle",value:function(t,e,r){this.messageService.add({severity:t,summary:e,detail:r})}},{key:"addMultiple",value:function(t){this.messageService.addAll(t)}},{key:"clear",value:function(){this.messageService.clear()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Zb(i.d))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},WsT8:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var o=r("tk/3"),i=r("z6cu"),n=r("JIr8"),c=r("AytR"),s=r("fXoL"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpClient=e,this.apiURL=c.a.apiUrl,this.httpOptions={headers:new o.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}return _createClass(t,[{key:"getSubjectGroups",value:function(){return this.httpClient.get("".concat(this.apiURL,"/subjects/getallsubjectgroup"),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"getSubjectGroup",value:function(t){return this.httpClient.get("".concat(this.apiURL,"/subjects/getsubjectgroupby/").concat(t),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"createSubjectGroup",value:function(t){return this.httpClient.post(this.apiURL+"/subjects/registergroup",JSON.stringify(t),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"updateSubjectGroup",value:function(t,e){return this.httpClient.patch("".concat(this.apiURL,"/subjects/updatesubjectgroup"),JSON.stringify(e),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"deleteSubjectGroup",value:function(t){return this.httpClient.delete("".concat(this.apiURL,"/subjects/archive"),this.httpOptions).pipe(Object(n.a)(this.errorHandler))}},{key:"errorHandler",value:function(t){var e="";return t.error instanceof ErrorEvent?(e=t.error.message,console.log("Client Side Error",e)):(e="Server Side Error Code: ".concat(t.status,"\n Message: ").concat(t.message),console.log(e)),Object(i.a)(console.log(e))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Zb(o.a))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);