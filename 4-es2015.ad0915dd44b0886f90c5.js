(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"24YL":function(t,o,c){"use strict";c.d(o,"a",(function(){return i}));var n=c("4WRT"),r=c("fXoL"),e=c("URcr");let i=(()=>{class t{constructor(t){this.routeStateService=t,this.items=[]}ngOnInit(){this.routeStateService.getAll().forEach(t=>{this.items.push({label:t.title,command:()=>{this.onClickBreadcrumb(t.id)}})}),this.home={icon:"pi pi-home"}}onClickBreadcrumb(t){this.routeStateService.loadById(t)}}return t.\u0275fac=function(o){return new(o||t)(r.Pb(n.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(t,o){1&t&&r.Qb(0,"p-breadcrumb",0),2&t&&r.nc("model",o.items)("home",o.home)},directives:[e.a],styles:[""]}),t})()},K0h9:function(t,o,c){"use strict";c.d(o,"a",(function(){return e}));var n=c("EQGD"),r=c("fXoL");let e=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(o){return new(o||t)},imports:[[n.a]]}),t})()},vTt4:function(t,o,c){"use strict";c.r(o);var n=c("ofXK"),r=c("tyNb"),e=c("+wT4"),i=c("fXoL"),u=c("3Pt+"),s=c("24YL"),b=c("7CaW");const a=["myNameElem"];function m(t,o){if(1&t){const t=i.Wb();i.Vb(0,"form",7),i.Vb(1,"div",4),i.Ic(2),i.Ub(),i.Vb(3,"div",4),i.Ic(4),i.Ub(),i.Vb(5,"div",8),i.Vb(6,"input",9),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(7,"div",4),i.Vb(8,"input",10),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(9,"div",4),i.Vb(10,"input",11),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(11,"div",4),i.Vb(12,"input",12),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(13,"div",4),i.Vb(14,"input",13),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(15,"div",4),i.Vb(16,"input",14),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(17,"div",4),i.Vb(18,"input",15),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(19,"div",4),i.Vb(20,"input",16),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(21,"div",4),i.Vb(22,"input",17),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(23,"div",4),i.Vb(24,"input",18),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(25,"div",4),i.Vb(26,"input",19),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Vb(27,"div",4),i.Vb(28,"input",20),i.dc("focusout",(function(){i.zc(t);const c=o.$implicit;return i.gc().onFocusOutEvent(c)})),i.Ub(),i.Ub(),i.Ub()}if(2&t){const t=o.$implicit;i.nc("formGroup",t),i.Db(2),i.Jc(t.get("studentAdmission").value),i.Db(2),i.Jc(t.get("studentName").value)}}const d=[{path:"",component:(()=>{class t{constructor(t,o,c){this.marksCaptureService=t,this.actRoute=o,this.fb=c,this.marksCaptures=[],this.marks=this.fb.array([]),this.getId=this.actRoute.snapshot.paramMap.get("_id"),this.marksCaptureService.getExamMaster(this.getId).subscribe(t=>{this.marksCaptures=t.data})}ngOnInit(){this.marksCaptureService.getExamMaster(this.getId).subscribe(t=>{t.data.forEach(t=>{this.marks.push(this.fb.group({_id:[t._id],studentAdmission:[t.studentAdmission],studentName:[t.studentName],ENGLISH:[t.ENGLISH],MATHEMATICS:[t.MATHEMATICS],KISWAHILI:[t.KISWAHILI],CHEMISTRY:[t.CHEMISTRY],PHYSICS:[t.PHYSICS],BIOLOGY:[t.BIOLOGY],HISTORY:[t.HISTORY],GEOGRAPHY:[t.GEOGRAPHY],CRE:[t.CRE],BUSINESS:[t.BUSINESS],AGRICULTURE:[t.AGRICULTURE]}))})})}addMarksForm(){this.marks.push(this.fb.group({_id:[0],studentAdmission:[""],studentName:[""],ENGLISH:[""],MATHEMATICS:[""],KISWAHILI:[""],CHEMISTRY:[""],PHYSICS:[""],BIOLOGY:[""],HISTORY:[""],GEOGRAPHY:[""],CRE:[""],BUSINESS:[""],AGRICULTURE:[""]}))}onFocusOutEvent(t){0==t.value._id?this.marksCaptureService.postData(t.value).subscribe(o=>{t.patchValue({_id:o._id})}):this.marksCaptureService.putData(t.value).subscribe(()=>{console.log("success")})}}return t.\u0275fac=function(o){return new(o||t)(i.Pb(e.a),i.Pb(r.a),i.Pb(u.c))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-marks-capture"]],viewQuery:function(t,o){var c;1&t&&i.Mc(a,!0),2&t&&i.xc(c=i.ec())&&(o.myNameElem=c.first)},decls:33,vars:1,consts:[["header","CaptureMarks"],[1,"table"],[1,"thead"],[1,"tr"],[1,"td"],[1,"tbody"],["class","tr",3,"formGroup",4,"ngFor","ngForOf"],[1,"tr",3,"formGroup"],["hidden","",1,"td"],["formControlName","_id",1,"form-control",3,"focusout"],["formControlName","ENGLISH",1,"form-control",3,"focusout"],["formControlName","MATHEMATICS",1,"form-control",3,"focusout"],["formControlName","KISWAHILI",1,"form-control",3,"focusout"],["formControlName","CHEMISTRY",1,"form-control",3,"focusout"],["formControlName","PHYSICS",1,"form-control",3,"focusout"],["formControlName","BIOLOGY",1,"form-control",3,"focusout"],["formControlName","HISTORY",1,"form-control",3,"focusout"],["formControlName","GEOGRAPHY",1,"form-control",3,"focusout"],["formControlName","CRE",1,"form-control",3,"focusout"],["formControlName","BUSINESS",1,"form-control",3,"focusout"],["formControlName","AGRICULTURE",1,"form-control",3,"focusout"]],template:function(t,o){1&t&&(i.Qb(0,"app-header-breadcrumb"),i.Vb(1,"p-panel",0),i.Vb(2,"table",1),i.Vb(3,"div",2),i.Vb(4,"div",3),i.Vb(5,"div",4),i.Ic(6,"Adm. NO."),i.Ub(),i.Vb(7,"div",4),i.Ic(8,"Name"),i.Ub(),i.Vb(9,"div",4),i.Ic(10,"ENG"),i.Ub(),i.Vb(11,"div",4),i.Ic(12,"MATHs"),i.Ub(),i.Vb(13,"div",4),i.Ic(14,"KISW"),i.Ub(),i.Vb(15,"div",4),i.Ic(16,"CHEM"),i.Ub(),i.Vb(17,"div",4),i.Ic(18,"PHY"),i.Ub(),i.Vb(19,"div",4),i.Ic(20,"BIO"),i.Ub(),i.Vb(21,"div",4),i.Ic(22,"HIST"),i.Ub(),i.Vb(23,"div",4),i.Ic(24,"GEO"),i.Ub(),i.Vb(25,"div",4),i.Ic(26,"CRE"),i.Ub(),i.Vb(27,"div",4),i.Ic(28,"BSN"),i.Ub(),i.Vb(29,"div",4),i.Ic(30,"AGRI"),i.Ub(),i.Ub(),i.Ub(),i.Vb(31,"div",5),i.Gc(32,m,29,3,"form",6),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Db(32),i.nc("ngForOf",o.marks.controls))},directives:[s.a,b.a,n.j,u.w,u.l,u.f,u.b,u.k,u.e],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(o){return new(o||t)},imports:[[r.g.forChild(d)],r.g]}),t})();var l=c("EQGD"),p=c("K0h9");c.d(o,"MarksCaptureModule",(function(){return I}));let I=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(o){return new(o||t)},imports:[[n.b,f,p.a,l.a]]}),t})()}}]);