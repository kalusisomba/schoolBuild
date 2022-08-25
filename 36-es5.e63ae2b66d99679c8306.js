function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"4hmF":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("tk/3"),r=n("z6cu"),a=n("JIr8"),o=n("AytR"),c=n("fXoL"),s=function(){var e=function(){function e(t){_classCallCheck(this,e),this.httpClient=t,this.apiURL=o.a.apiUrl,this.httpOptions={headers:new i.c({"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"*","Cross-Origin":"true","Access-Control-Allow-Methods":"GET, POST, PATCH, DELETE, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",Authorization:"Bearer "+localStorage.getItem("jwt")})}}return _createClass(e,[{key:"getSubjects",value:function(){return this.httpClient.get(this.apiURL+"/subjects/getallsubjects",this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"getSubject",value:function(e){return this.httpClient.get(this.apiURL+"/subjects/getsubjectbuid/"+e,this.httpOptions)}},{key:"createSubject",value:function(e){return this.httpClient.post(this.apiURL+"/subjects/registersubject",JSON.stringify(e),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"updateSubject",value:function(e,t){return this.httpClient.patch(this.apiURL+"/subjects/updatesubject",JSON.stringify(t),this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"deleteSubject",value:function(e){return this.httpClient.delete(this.apiURL+"/subjects/archive/"+e,this.httpOptions).pipe(Object(a.a)(this.errorHandler))}},{key:"errorHandler",value:function(e){var t="";return e.error instanceof ErrorEvent?(t=e.error.message,console.log("Client Side Error",t)):(t="Server Side Error Code: ".concat(e.status,"\n Message: ").concat(e.message),console.log(t)),Object(r.a)(console.log(t))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(i.a))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},CjqW:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("tyNb"),a=n("J7/z"),o=n("AlMu"),c=n("Olgc"),s=n("5JmO"),u=n.n(s),l=n("TruH"),b=n.n(l),p=n("uIk+"),f=n("fXoL");u.a.vfs=b.a.pdfMake.vfs;var d,h=((d=function(){function e(t){_classCallCheck(this,e),this.canvas=t}return _createClass(e,[{key:"setTitle",value:function(e,t,n,i,r,a,o){var c;return[{table:{widths:["100%","0%"],body:[[{image:e,alignment:"center",width:60,height:30}],[{text:t,fontSize:c="A6"===o?8:10,alignment:"center",bold:!0}],[{text:n,fontSize:c,alignment:"center"}],[{text:i,fontSize:c,alignment:"center",italics:!0}],[{text:r,fontSize:c,alignment:"center",italics:!0}]]},layout:"noBorders"}]}},{key:"createTableHeader",value:function(e){var t={fila_0:{}};return e.forEach((function(e,n){t.fila_0["col_"+(+n+1)]={text:e,style:"tableHeader",margin:[0,8,0,0]}})),t}},{key:"createBody",value:function(e,t){var n=[];for(var i in e){var r=[];for(var a in e[i])r.push(e[i][a]);n.push(r)}return t.forEach((function(e){var t=[];for(var i in e)t.push(e[i]);n.push(t)})),n}},{key:"getDocDefinition",value:function(e,t,n,i,r,a,o,c,s,u){var l,b,p,f={header:{title:e,header1:t,header2:n,header3:i},body:{header:a,record:o}},d=this.createBody(this.createTableHeader(f.body.header),f.body.record);return"A6"===u?(l=[10,110,10,55],b=10,p=7):(b=16,p=10,l=[10,110,10,55]),{pageOrientation:c,pageSize:u,pageMargins:l,header:this.setTitle(r,e,t,n,i,f,u),footer:function(e,t){return{text:"Page "+e.toString()+" of "+t,alignment:"center",margin:[0,30,0,0]}},content:[{style:"tableContent",table:{widths:s,headerRows:1,body:d}}],styles:{header:{fontSize:b,bold:!0},tableHeader:{bold:!0},tableContent:{fontSize:p}}}}},{key:"generatePdf",value:function(e){u.a.createPdf(e).print()}},{key:"getPdfData",value:function(e){var t=this,n=["36%","32%","32%"],i=["Subject Name","Subject Code","Abbriviation"],r="Date: ".concat((new Date).toLocaleString());this.canvas.getBase64Image("./assets/images/schoollogo.jpg").then((function(a){t.generatePdf(t.getDocDefinition("ST. FRANCIS OF ASSISI SECONDARY SCHOOL - KALIINI","P.O BOX 30-90121 - Emali","Tel. No.:072127703",r,a,i,t.mapData(e),"portrait",n,"A4"))}))}},{key:"mapData",value:function(e){return e.map((function(e){return{Name:e.subjectName,Code:e.subjectCode,Abbriviation:e.subjectShortForm}}))}}]),e}()).\u0275fac=function(e){return new(e||d)(f.Zb(p.a))},d.\u0275prov=f.Lb({token:d,factory:d.\u0275fac,providedIn:"root"}),d),g=n("1yk7"),v=n("4hmF"),m=n("24YL"),S=n("7CaW"),y=n("rEr+"),C=n("7zfz"),j=n("3Pt+"),k=n("7kUa");function w(e,t){if(1&e&&(f.Vb(0,"th"),f.Ic(1),f.Ub()),2&e){var n=t.$implicit;f.Db(1),f.Kc(" ",n.header," ")}}function O(e,t){if(1&e&&(f.Vb(0,"tr",12),f.Gc(1,w,2,1,"th",13),f.Vb(2,"th"),f.Ic(3,"Action"),f.Ub(),f.Ub()),2&e){var n=f.gc();f.Db(1),f.nc("ngForOf",n.columns)}}function U(e,t){if(1&e&&(f.Vb(0,"td"),f.Vb(1,"div"),f.Ic(2),f.Ub(),f.Ub()),2&e){var n=t.$implicit,i=f.gc().$implicit;f.Db(2),f.Jc(i[n.field])}}var P=function(e){return["/main/subjects/","subject-details",e]},A=function(e){return["/main/subjects/","subject-edit",e]};function I(e,t){if(1&e){var n=f.Wb();f.Vb(0,"tr",12),f.Gc(1,U,3,1,"td",13),f.Vb(2,"td"),f.Vb(3,"div",14),f.Vb(4,"button",15),f.Ic(5,"View"),f.Ub(),f.Vb(6,"button",16),f.Ic(7,"Edit"),f.Ub(),f.Vb(8,"button",17),f.dc("click",(function(){f.zc(n);var e=t.$implicit;return f.gc().deleteSubject(e._id)})),f.Ic(9,"Delete"),f.Ub(),f.Ub(),f.Ub(),f.Ub()}if(2&e){var i=t.$implicit,r=f.gc();f.Db(1),f.nc("ngForOf",r.columns),f.Db(3),f.nc("routerLink",f.qc(3,P,i._id)),f.Db(2),f.nc("routerLink",f.qc(5,A,i._id))}}function R(e,t){1&e&&(f.Vb(0,"tr"),f.Vb(1,"td",18),f.Ic(2,"No data found."),f.Ub(),f.Ub())}var V,D,L=[{path:"",component:(V=function(){function e(t,n,i,r,a){_classCallCheck(this,e),this.dialogService=t,this.toastService=n,this.applicationStateService=i,this.subjectsService=r,this.pdfService=a,this.subjects=[],this.isMobileResolution=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"subjectName",header:"Subject Name"},{field:"subjectCode",header:"Subject Code"},{field:"subjectShortForm",header:"Abbriviation"}],this.getSubjects()}},{key:"getSubjects",value:function(){var e=this;this.subjectsService.getSubjects().subscribe((function(t){e.subjects=t.data}))}},{key:"openNew",value:function(){var e=this;this.dialogService.open(g.a,{data:{},header:"Enroll New subject",width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe((function(t){t&&e.toastService.addSingle("success","panel closed","")}))}},{key:"exportPdf",value:function(){this.pdfService.getPdfData(this.subjects)}}]),e}(),V.\u0275fac=function(e){return new(e||V)(f.Pb(a.a),f.Pb(c.a),f.Pb(o.a),f.Pb(v.a),f.Pb(h))},V.\u0275cmp=f.Jb({type:V,selectors:[["app-subject-list"]],features:[f.Cb([a.a])],decls:17,vars:5,consts:[["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["pRipple","","type","button","icon","pi pi-file-excel","tooltipPosition","bottom",1,"btn","btn-info","btn-sm","mx-2",3,"click"],["header","subjects"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"text-sm"],[4,"ngFor","ngForOf"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-danger","btn-sm",3,"click"],["colspan","4"]],template:function(e,t){1&e&&(f.Qb(0,"app-header-breadcrumb"),f.Vb(1,"div"),f.Vb(2,"button",0),f.dc("click",(function(){return t.openNew()})),f.Ic(3,"Create Subject"),f.Ub(),f.Vb(4,"button",1),f.dc("click",(function(){return t.exportPdf()})),f.Ic(5,"subject report"),f.Ub(),f.Ub(),f.Vb(6,"p-panel",2),f.Vb(7,"p-table",3),f.Gc(8,O,4,1,"ng-template",4),f.Gc(9,I,10,7,"ng-template",5),f.Gc(10,R,3,0,"ng-template",6),f.Ub(),f.Vb(11,"div",7),f.Vb(12,"div",8),f.Vb(13,"label",9),f.Ic(14,"Page Size:"),f.Ub(),f.Ub(),f.Vb(15,"div",10),f.Vb(16,"input",11),f.dc("ngModelChange",(function(e){return t.pageSize=e})),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&e&&(f.Db(7),f.nc("value",t.subjects)("paginator",!0)("rows",t.pageSize)("showCurrentPageReport",!0),f.Db(9),f.nc("ngModel",t.pageSize))},directives:[m.a,S.a,y.c,C.e,j.b,k.a,j.k,j.n,i.j,r.d],styles:[""]}),V)}],z=((D=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:D}),D.\u0275inj=f.Mb({factory:function(e){return new(e||D)},imports:[[r.g.forChild(L)],r.g]}),D),T=n("EQGD"),_=n("K0h9");n.d(t,"SubjectListModule",(function(){return x}));var N,x=((N=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:N}),N.\u0275inj=f.Mb({factory:function(e){return new(e||N)},imports:[[i.b,z,_.a,T.a]]}),N)},Olgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),r=n("7zfz"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.messageService=t}return _createClass(e,[{key:"addSingle",value:function(e,t,n){this.messageService.add({severity:e,summary:t,detail:n})}},{key:"addMultiple",value:function(e){this.messageService.addAll(e)}},{key:"clear",value:function(){this.messageService.clear()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Zb(r.d))},e.\u0275prov=i.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);