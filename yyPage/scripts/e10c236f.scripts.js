"use strict";angular.module("myPageApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","LocalStorageModule","ngAnimate"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.when("","about-me"),b.otherwise("/404"),a.state("about-me",{url:"/about-me",templateUrl:"views/about-me.html"}).state("portfolio",{url:"/portfolio",templateUrl:"views/portfolio.html"}).state("personal",{url:"/personal",templateUrl:"views/personal.html"}).state("contact-me",{url:"/contact-me",templateUrl:"../views/contact-me.html"}).state("404",{url:"/404",template:"<h3>Sorry, Page Not Found!</h3>"})}]).run(["$rootScope","$location",function(a,b){a.$on("$stateChangeSuccess",function(){a.currentTab=b.path().split("/")[1]})}]),angular.module("myPageApp").filter("slice",function(){return function(a,b,c){return(a||[]).slice(b,c)}}).filter("compareFilter",[function(){return function(a,b,c,d){return a===b?c:d}}]),Array.prototype.remove=function(a){return-1!==this.indexOf(a)?(this.splice(this.indexOf(a),1),!0):!1},angular.module("myPageApp").controller("MainCtrl",["$scope","$location","localStorageService","$rootScope",function(a,b,c,d){a.locale="en",a.changeLang=function(b){a.locale=b},a.saveToLocal=function(a,b){c.set("yyPage-"+d.currentTab+"-"+a,b),console.log("saved to: yyPage-"+d.currentTab+"-"+a)},a.isAsideVisible=!1,a.toggleAsideNav=function(){a.isAsideVisible=!a.isAsideVisible}}]),angular.module("myPageApp").controller("AboutMeCtrl",["$scope",function(a){a.workHistoryEN=[{title:"Front End Web Developer",company:"USANA Health Sciences",companyUrl:"http://www.usana.com/",companyLogo:"images/logo_usana.png",location:"Salt Lake City, UT",startYear:"2014",endYear:"Present",description:"Use HTML, CSS, AngularJS to prototype & develop web application/user interface;"},{title:"Front End Web Developer",company:"Cognizant Technology Solutions",companyUrl:"http://www.cognizant.com/",companyLogo:"images/logo_cognizant.svg",location:"Draper, UT",startYear:"2013",endYear:"2014",description:"<ul><li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li><li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li><li>Created UX design mockups using MockFlow based on business product requirements;</li><li> Assist with UI requirement analysis by communicating with client.</li></ul>"},{title:"Engineering Intern",company:"eBay Inc.",companyUrl:"http://www.ebayinc.com/",companyLogo:"images/logo_ebay.jpg",location:"Draper, UT",startYear:"2013",endYear:"2013",description:"<ul><li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li><li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li></ul>"},{title:"Assistant Database Administrator",company:"SWCA Environmental Consultant",companyUrl:"http://www.swca.com/",companyLogo:"images/logo_swca.jpg",location:"Salt Lake City, UT",startYear:"2011",endYear:"2013",description:"<ul><li>Provide maintenance and user support on existing databases of cultural resource information;</li><li> Assisted the Database Administrator with designing and implementing new databases using PG Admin and Microsoft Access;</li><li> Develop stand-alone MS Access databases for generating analysis reports.</li></ul>"},{title:"Office Assistant",company:"University of Utah, Career Services",companyUrl:"http://www.utah.edu/",companyLogo:"images/logo_career_services.png",location:"Salt Lake City, UT",startYear:"2010",endYear:"2013",description:"<ul><li>Created reports, entered data and helped with website content;</li><li>Answered incoming phone calls, greeted and assisted students and employers.</li></ul>"},{title:"Technical QA Specialist for Curriculum",company:"The American Academy",companyUrl:"http://www.theamericanacademy.com/",companyLogo:"images/logo_taa.png",location:"Salt Lake City, UT",startYear:"2013",endYear:"2013",description:"<ul><li>Helped with converting 200 online courses into new HTML templates;</li><li>Checked and tested the courses to make sure its functionality and quality are meeting the requirements.</li></ul>"},{title:"Customer Service Representative",company:"Multiple",companyUrl:"",companyLogo:"images/logo_csr.png",location:"Salt Lake City, UT",startYear:"2009",endYear:"2010",description:"<ul><li>Worked for 2010 Census as bilingual CSR for English & Chinese (2010)</li><li>Worked for Bank of American as bilingual CSR for credit card accounts (2009)</li></ul>"}],a.workHistoryCH=[{title:"前端网页开发人员",company:"USANA Health Sciences <br/>优莎娜",companyUrl:"http://www.usana.com/",companyLogo:"images/logo_usana.png",location:"犹他州，盐湖城",startYear:"2014",endYear:"现在",description:"Use HTML, CSS, AngularJS to prototype & develop web application/user interface;"},{title:"前端网页开发人员",company:"Cognizant Technology Solutions<br/>高知特信息技术公司",companyUrl:"http://www.cognizant.com/",companyLogo:"images/logo_cognizant.svg",location:"犹他州， Draper市",startYear:"2013",endYear:"2014",description:"<ul><li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li><li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li><li>Created UX design mockups using MockFlow based on business product requirements;</li><li> Assist with UI requirement analysis by communicating with client.</li></ul>"},{title:"软件工程实习生",company:"eBay Inc.<br/>易趣",companyUrl:"http://www.ebayinc.com/",companyLogo:"images/logo_ebay.jpg",location:"犹他州， Draper市",startYear:"2013",endYear:"2013",description:"<ul><li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li><li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li></ul>"},{title:"数据库管理助手",company:"SWCA Environmental Consultant<br/> SWCA 环境咨询",companyUrl:"http://www.swca.com/",companyLogo:"images/logo_swca.jpg",location:"犹他州，盐湖城",startYear:"2011",endYear:"2013",description:"<ul><li>Provide maintenance and user support on existing databases of cultural resource information;</li><li> Assisted the Database Administrator with designing and implementing new databases using PG Admin and Microsoft Access;</li><li> Develop stand-alone MS Access databases for generating analysis reports.</li></ul>"},{title:"办公室助理",company:"University of Utah, Career Services<br/>犹他大学学生就业咨询处",companyUrl:"http://www.utah.edu/",companyLogo:"images/logo_career_services.png",location:"犹他州，盐湖城",startYear:"2010",endYear:"2013",description:"<ul><li>Created reports, entered data and helped with website content;</li><li>Answered incoming phone calls, greeted and assisted students and employers.</li></ul>"},{title:"在线课程的技术质量保证人员",company:"The American Academy",companyUrl:"http://www.theamericanacademy.com/",companyLogo:"images/logo_taa.png",location:"犹他州，盐湖城",startYear:"2013",endYear:"2013",description:"<ul><li>Helped with converting 200 online courses into new HTML templates;</li><li>Checked and tested the courses to make sure its functionality and quality are meeting the requirements.</li></ul>"},{title:"客服人员",company:"Multiple",companyUrl:"",companyLogo:"images/logo_csr.png",location:"犹他州，盐湖城",startYear:"2009",endYear:"2010",description:"<ul><li>Worked for 2010 Census as bilingual CSR for English & Chinese (2010)</li><li>Worked for Bank of American as bilingual CSR for credit card accounts (2009)</li></ul>"}]}]),angular.module("myPageApp").controller("PersonalCtrl",["$scope","$modal",function(a,b){a.imageList=[{title:"14",src:"images/personal/14.jpg"},{title:"1",src:"images/personal/1.jpg"},{title:"2",src:"images/personal/9.jpg"},{title:"13",src:"images/personal/13.jpg"},{title:"10",src:"images/personal/10.jpg"},{title:"9",src:"images/personal/2.jpg"},{title:"21",src:"images/personal/21.jpg"},{title:"3",src:"images/personal/3.jpg"},{title:"22",src:"images/personal/22.jpg"},{title:"12",src:"images/personal/12.jpg"},{title:"8",src:"images/personal/8.jpg"},{title:"19",src:"images/personal/19.jpg"},{title:"11",src:"images/personal/11.jpg"},{title:"4",src:"images/personal/5.jpg"},{title:"18",src:"images/personal/18.jpg"},{title:"5",src:"images/personal/6.jpg"},{title:"17",src:"images/personal/17.jpg"},{title:"6",src:"images/personal/7.jpg"},{title:"7",src:"images/personal/4.jpg"},{title:"15",src:"images/personal/15.jpg"},{title:"16",src:"images/personal/16.jpg"},{title:"20",src:"images/personal/20.jpg"}],a.setCurrentImage=function(b){a.currentImage=b},a.openImgUploadModal=function(d){b.open({templateUrl:"views/templates/img-upload-modal.tpl.html",controller:c,size:d,resolve:{imageList:function(){return a.imageList}}})};var c=function(a,b){a.save=function(){b.close()},a.cancel=function(){b.dismiss("cancel")}}}]),angular.module("myPageApp").directive("yyMasonryDir",["$timeout",function(a){return{restrict:"EA",transclude:!0,replace:!0,template:"<div data-ng-transclude></div>",link:function(b,c){a(function(){c.masonry({itemSelector:".masonry-item"})},500),c.on("$destroy",function(){c.masonry("destroy")})}}}]),angular.module("myPageApp").directive("yyQtip",["$compile","$templateCache","$http","$timeout","$window",function(a,b,c,d,e){return function(f,g,h){switch(f.qtipSkin=h.skin?"qtip-"+h.skin:"qtip-light",f.closeButton=null!==h.closeButton,f.customShow=h.qtipShow,f.hideSpinner=null!==h.qtipHideSpinner,h.position){case"right":f.qtipPointerPos="left center",f.qtipContentPos="right center",f.qtipTipClass="qtip-tip-right";break;case"bottom":f.qtipPointerPos="top left",f.qtipContentPos="bottom right",f.qtipTipClass="qtip-tip-bottom";break;case"left":f.qtipPointerPos="right center",f.qtipContentPos="left center",f.qtipTipClass="qtip-tip-left";break;default:f.qtipPointerPos="bottom left",f.qtipContentPos="top right",f.qtipTipClass="qtip-tip-top"}var i={content:{text:function(e,i){if(null!==h.href){if(!h.qtipHideSpinner){var j=a('<div><img style="display:block;margin:auto;width:70px;height:70px;" src="images/spinner_white_large.gif"/></div>')(f);i.set("content.text",j)}return function(){c.get(h.href,{cache:b}).success(function(b){var c=a(b)(f);null!==h.qtipWait?f.$root.$on("qtipContentReady",function(){i.set("content.text",c),d(function(){i.reposition(),f.$watch(function(){return $(i.elements.content).find("div").css("height")},function(a,b){a!==b&&i.reposition()})})}):(i.set("content.text",c),d(function(){i.reposition(),f.$watch(function(){return $(i.elements.content).find("div").css("height")},function(a,b){a!==b&&i.reposition()})}))}).error(function(a){var b=a||"Request failed";i.set("content.text",b)})}}return null!==g.attr("data-qtip-content")?h.qtipContent:void i.set("content.text","")},title:function(a,b){return null!==g.attr("data-qtip-title")?h.qtipTitle:void b.set("content.title","")},button:f.closeButton},style:{classes:f.qtipSkin+" "+f.qtipTipClass+" "+h.qtipClass,tip:{corner:!0,width:20,height:10,method:"polygon",border:2}},show:{event:null!==f.customShow?f.customShow:f.closeButton?"click mouseover":"click mouseover",solo:null!==h.solo,autofocus:"input"},hide:{event:null!==h.fixed?"unfocus":f.closeButton===!0?"click":"mouseleave",delay:300,fixed:$(this).mouseover?!0:!1,leave:!1},events:{render:function(a,b){f.hideQtip=function(){b.hide()},f.reposition=function(){b.reposition()},$(b.elements.content).keyup(function(a){27===a.keyCode&&b.hide()})}},position:{viewport:e,target:h.target?h.target:g,adjust:{method:"flip flip",mouse:null===h.static},my:f.qtipPointerPos,at:f.qtipContentPos}};g.qtip(i),f.$on("$destroy",function(){$(".qtip").remove(),g.qtip("destroy",!0)})}}]),angular.module("myPageApp").controller("NavCtrl",["$scope",function(){}]),angular.module("myPageApp").controller("PortfolioCtrl",["$scope",function(a){a.wireframeFiles=[{fileName:"yyPage Wireframe Version #1",filePath:"data/yy_page_v1.pdf",fileThumbPath:"data/yy_page_v1_thumb.png"},{fileName:"yyPage Wireframe Version #2",filePath:"data/yy_page_v2.pdf",fileThumbPath:"data/yy_page_v2_thumb.png"}],a.setCurrentFile=function(b){a.currentFile=b},a.projects=[{fileName:"Widget Bank Design (USANA)",filePath:"http://www.youtube.com/embed/IAKFhjwcE_Q?rel=0",fileThumbPath:"videos/usana_widgetbank_thumb.png"}],a.setCurrentProject=function(b){a.currentProject=b},a.webComponentDemos=[{demoName:"AngularJS To Do List",demoPath:"views/templates/portfolio.todo.tpl.html",demoThumbPath:"data/yy_portfolio_todo_thumb.png"},{demoName:"D3 Chart",demoPath:"",demoThumbPath:""},{demoName:"Others",demoPath:"",demoThumbPath:""}],a.setCurrentDemo=function(b){a.currentDemo=b}}]),angular.module("myPageApp").controller("PortfolioTodoCtrl",["$scope","localStorageService",function(a,b){a.toDoTabs=[{title:"Current List",content:"todoCurrentList.tpl.html"},{title:"Archived List",content:"todoArchivedList.tpl.html"}];var c=function(){var a,c;return null!==b.get("yyPage-portfolio-todo-list")?(a=b.get("yyPage-portfolio-todo-list"),c=function(){var b=[];return angular.forEach(a,function(a){a.isDone&&b.unshift(a)}),b}):(a=[{description:"Need to call ...",isDone:!1},{description:"Need to buy ...",isDone:!1}],c=[]),[a,c]};a.toDoList=c()[0],a.tempArchiveList=c()[1],a.archivedList=null!==b.get("yyPage-portfolio-archived-list")?b.get("yyPage-portfolio-archived-list"):[],a.todo={},a.addToList=function(b){a.toDoList.unshift({description:b.description,isDone:!1}),a.todo={}},a.addToTempArchiveList=function(b){-1===a.tempArchiveList.indexOf(b)?a.tempArchiveList.unshift(b):a.tempArchiveList.remove(b)},a.selectAll=function(){a.tempArchiveList=angular.copy(a.toDoList)},a.unselectAll=function(){a.tempArchiveList=[]},a.archiveTodo=function(){var b=[];angular.forEach(a.toDoList,function(c){c.isDone?a.archivedList.unshift(c):b.unshift(c)}),a.toDoList=b},a.saveToDoLocally=function(){b.set("yyPage-portfolio-todo-list",a.toDoList),b.set("yyPage-portfolio-archived-list",a.archivedList)},a.clearLocalToDo=function(){b.remove("yyPage-portfolio-todo-list"),b.remove("yyPage-portfolio-archived-list"),a.toDoList=[{description:"Need to call ...",isDone:!1},{description:"Need to buy ...",isDone:!1}],a.tempArchiveList=[],a.archivedList=[]},a.removeFromList=function(a,b){a.splice(b,1)}}]),angular.module("myPageApp").controller("PortfolioD3Ctrl",["$scope",function(){}]),angular.module("myPageApp").controller("loginCtrl",["$scope","$modal",function(a,b){var c=function(a,b,c,d){a.credentials={adminId:"",password:"",rememberMe:""},d.get("previousLoggedInUser")&&(a.credentials.adminId=d.get("previousLoggedInUser")),a.adminLogin=function(e){a.isLoginFailed=!1,"yyadmin"===e.adminId&&"admin"===e.password?(c.isAdmin=!0,c.adminId=e.adminId,a.$broadcast("admin logged in"),console.log("you are logged in as "+e.adminId),b.close(a.credentialsVerified,a.userName),e.rememberMe&&d.set("previousLoggedInUser",e.adminId)):(a.isLoginFailed=!0,d.set("previousLoggedInUser",null))},a.cancel=function(){b.dismiss("cancel")}};a.openLoginModal=function(a){var d=b.open({templateUrl:"views/login.html",controller:c,size:a,resolve:{}});d.result.then(function(){},function(){})}}]);