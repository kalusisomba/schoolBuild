(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"24YL":function(o,t,c){"use strict";c.d(t,"a",(function(){return s}));var b=c("4WRT"),e=c("fXoL"),i=c("URcr");let s=(()=>{class o{constructor(o){this.routeStateService=o,this.items=[]}ngOnInit(){this.routeStateService.getAll().forEach(o=>{this.items.push({label:o.title,command:()=>{this.onClickBreadcrumb(o.id)}})}),this.home={icon:"pi pi-home"}}onClickBreadcrumb(o){this.routeStateService.loadById(o)}}return o.\u0275fac=function(t){return new(t||o)(e.Pb(b.a))},o.\u0275cmp=e.Jb({type:o,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(o,t){1&o&&e.Qb(0,"p-breadcrumb",0),2&o&&e.nc("model",t.items)("home",t.home)},directives:[i.a],styles:[""]}),o})()},K0h9:function(o,t,c){"use strict";c.d(t,"a",(function(){return i}));var b=c("EQGD"),e=c("fXoL");let i=(()=>{class o{}return o.\u0275mod=e.Nb({type:o}),o.\u0275inj=e.Mb({factory:function(t){return new(t||o)},imports:[[b.a]]}),o})()},Wz7N:function(o,t,c){"use strict";c.r(t);var b=c("ofXK"),e=c("tyNb"),i=c("75Oz"),s=c("wsLY"),r=c("fXoL"),n=c("24YL");const a=[{path:"",component:(()=>{class o{constructor(o,t,c,b,e){this.location=o,this.schoolService=t,this.streamService=c,this.actRoute=b,this.router=e,this.history=[],this.school=[]}ngOnInit(){this._id=this.actRoute.snapshot.paramMap.get("_id"),this.schoolService.getSchool(this._id).subscribe(o=>{this.school=o.data})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/schools")}}return o.\u0275fac=function(t){return new(t||o)(r.Pb(b.g),r.Pb(s.a),r.Pb(i.a),r.Pb(e.a),r.Pb(e.c))},o.\u0275cmp=r.Jb({type:o,selectors:[["app-school-details"]],decls:60,vars:8,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-8"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(o,t){1&o&&(r.Qb(0,"app-header-breadcrumb"),r.Vb(1,"div",0),r.Vb(2,"div",1),r.Vb(3,"h5",2),r.Ic(4,"School Details"),r.Ub(),r.Ub(),r.Vb(5,"div",3),r.Vb(6,"div",4),r.Vb(7,"div",5),r.Vb(8,"div",6),r.Vb(9,"div",5),r.Vb(10,"div",7),r.Vb(11,"strong"),r.Ic(12,"School Name"),r.Ub(),r.Ub(),r.Vb(13,"div",7),r.Ic(14),r.Ub(),r.Ub(),r.Vb(15,"div",5),r.Vb(16,"div",7),r.Vb(17,"strong"),r.Ic(18,"School Code"),r.Ub(),r.Ub(),r.Vb(19,"div",7),r.Ic(20),r.Ub(),r.Ub(),r.Vb(21,"div",5),r.Vb(22,"div",7),r.Vb(23,"strong"),r.Ic(24,"School Motto"),r.Ub(),r.Ub(),r.Vb(25,"div",7),r.Ic(26),r.Ub(),r.Ub(),r.Vb(27,"div",5),r.Vb(28,"div",7),r.Vb(29,"strong"),r.Ic(30,"School"),r.Ub(),r.Ub(),r.Vb(31,"div",7),r.Ic(32),r.Ub(),r.Ub(),r.Vb(33,"div",5),r.Vb(34,"div",7),r.Vb(35,"strong"),r.Ic(36,"School County"),r.Ub(),r.Ub(),r.Vb(37,"div",7),r.Ic(38),r.Ub(),r.Ub(),r.Vb(39,"div",5),r.Vb(40,"div",7),r.Vb(41,"strong"),r.Ic(42,"School Principal"),r.Ub(),r.Ub(),r.Vb(43,"div",7),r.Ic(44),r.Ub(),r.Ub(),r.Vb(45,"div",5),r.Vb(46,"div",7),r.Vb(47,"strong"),r.Ic(48,"School Deputy"),r.Ub(),r.Ub(),r.Vb(49,"div",7),r.Ic(50),r.Ub(),r.Ub(),r.Vb(51,"div",5),r.Vb(52,"div",7),r.Vb(53,"strong"),r.Ic(54,"School SeniorTeacher"),r.Ub(),r.Ub(),r.Vb(55,"div",7),r.Ic(56),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Vb(57,"div",8),r.Vb(58,"button",9),r.dc("click",(function(){return t.back()})),r.Ic(59,"Back"),r.Ub(),r.Ub(),r.Ub()),2&o&&(r.Db(14),r.Kc(" : ",t.school.schoolName," "),r.Db(6),r.Kc(" : ",t.school.schoolCode," "),r.Db(6),r.Kc(" : ",t.school.schoolMotto," "),r.Db(6),r.Kc(" : ",t.school.schoolID," "),r.Db(6),r.Kc(" : ",t.school.schoolCounty," "),r.Db(6),r.Kc(" : ",t.school.schoolPrincipal," "),r.Db(6),r.Kc(" : ",t.school.schoolDeputy," "),r.Db(6),r.Kc(" : ",t.school.schoolSeniorTeacher," "))},directives:[n.a],styles:[""]}),o})()}];let h=(()=>{class o{}return o.\u0275mod=r.Nb({type:o}),o.\u0275inj=r.Mb({factory:function(t){return new(t||o)},imports:[[e.g.forChild(a)],e.g]}),o})();var l=c("EQGD"),d=c("K0h9");c.d(t,"SchoolDetailsModule",(function(){return u}));let u=(()=>{class o{}return o.\u0275mod=r.Nb({type:o}),o.\u0275inj=r.Mb({factory:function(t){return new(t||o)},imports:[[b.b,h,l.a,d.a]]}),o})()}}]);