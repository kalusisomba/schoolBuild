(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"1+zh":function(t,e,s){"use strict";s.r(e);var a=s("ofXK"),c=s("tyNb"),r=s("dK7b"),i=s("fXoL"),n=s("24YL");const o=[{path:"",component:(()=>{class t{constructor(t,e,s,a){this.location=t,this.classExamService=e,this.actRoute=s,this.router=a,this.history=[],this.classExam=[]}ngOnInit(){this.getId=this.actRoute.snapshot.paramMap.get("_id"),this.classExamService.getClassExam(this.getId).subscribe(t=>{this.classExam=t.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/classExams")}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.g),i.Pb(r.a),i.Pb(c.a),i.Pb(c.c))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-class-exam-details"]],decls:28,vars:3,consts:[[1,"card","card-info"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"col-sm-8"],[1,"row"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(i.Qb(0,"app-header-breadcrumb"),i.Vb(1,"div",0),i.Vb(2,"div",1),i.Vb(3,"h5",2),i.Ic(4," Details"),i.Ub(),i.Ub(),i.Vb(5,"div",3),i.Vb(6,"div",4),i.Vb(7,"div",5),i.Vb(8,"div",6),i.Vb(9,"strong"),i.Ic(10,"Exam Name"),i.Ub(),i.Ub(),i.Vb(11,"div",6),i.Ic(12),i.Ub(),i.Ub(),i.Vb(13,"div",5),i.Vb(14,"div",6),i.Vb(15,"strong"),i.Ic(16,"Exam Code"),i.Ub(),i.Ub(),i.Vb(17,"div",6),i.Ic(18),i.Ub(),i.Ub(),i.Vb(19,"div",5),i.Vb(20,"div",6),i.Vb(21,"strong"),i.Ic(22,"Class"),i.Ub(),i.Ub(),i.Vb(23,"div",6),i.Ic(24),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(25,"div",7),i.Vb(26,"button",8),i.dc("click",(function(){return e.back()})),i.Ic(27,"Back"),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Db(12),i.Kc(" : ",e.classExam.examName," "),i.Db(6),i.Kc(" : ",e.classExam.examCode," "),i.Db(6),i.Kc(" : ",e.classExam.unitID," "))},directives:[n.a],styles:[""]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(o)],c.g]}),t})();var d=s("EQGD"),l=s("K0h9");s.d(e,"ClassExamDetailsModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[a.b,b,d.a,l.a]]}),t})()},"24YL":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var a=s("4WRT"),c=s("fXoL"),r=s("URcr");let i=(()=>{class t{constructor(t){this.routeStateService=t,this.items=[]}ngOnInit(){this.routeStateService.getAll().forEach(t=>{this.items.push({label:t.title,command:()=>{this.onClickBreadcrumb(t.id)}})}),this.home={icon:"pi pi-home"}}onClickBreadcrumb(t){this.routeStateService.loadById(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(a.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(t,e){1&t&&c.Qb(0,"p-breadcrumb",0),2&t&&c.nc("model",e.items)("home",e.home)},directives:[r.a],styles:[""]}),t})()},K0h9:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a=s("EQGD"),c=s("fXoL");let r=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[a.a]]}),t})()}}]);