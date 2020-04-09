webpackJsonp([0],{152:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var A=t(0),i=t.n(A),s=t(3),l=(t(54),t(5)),p=t(10),c=(t(55),t(9)),d=t(21),u=t(154),g=(t.n(u),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),C=function(e){function n(){var e,t,a,A;r(this,n);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),a.state={form:[{elementType:"input",elementConfig:{type:"radio",name:"idiom",checked:!1,placeholder:"Blue",id:"Blue"},value:"",touched:!1},{elementType:"input",elementConfig:{type:"radio",name:"idiom",checked:!1,placeholder:"Green",id:"Green"},value:"",touched:!1},{elementType:"input",elementConfig:{type:"radio",name:"idiom",checked:!1,placeholder:"Red",id:"Red"},value:"",touched:!1},{elementType:"input",elementConfig:{type:"radio",name:"idiom",checked:!1,placeholder:"Black",id:"Black"},value:"",touched:!1}],currentWord:0,correctAnswer:"",correctWords:0},a.onChangeHandler=function(e){e.preventDefault();var n=e.target.previousElementSibling;a.props.data[a.state.currentWord]&&e.target.placeholder.toUpperCase()===a.props.data[a.state.currentWord].opposite.toUpperCase()?(n.classList.add("correct"),a.setState(function(e){return{correctAnswer:!0,correctWords:e.correctWords+1}})):(n.classList.add("wrong"),a.setState(function(e){return{correctAnswer:!0}})),setTimeout(function(){n.classList.remove("correct","wrong"),a.setState(function(e){return{correctAnswer:!1,currentWord:e.currentWord+1}})},3e3)},a.checkAnswer=function(){},a.reloadTask=function(){a.setState(function(){return{currentWord:0,correctWords:0}})},A=t,o(a,A)}return a(n,e),g(n,[{key:"componentDidMount",value:function(){this.props.fetchData("https://spreadsheets.google.com/feeds/list/1n5633PymXXc-qW_UWMMFxaJYpR-r5PoXrGMaOn7VfF0/7/public/values?alt=json")}},{key:"componentDidUpdate",value:function(e,n){console.log(this.state)}},{key:"shouldComponentUpdate",value:function(e,n){return!!(!this.state.currentWord||this.props.data&&this.props.data[n.currentWord])}},{key:"render",value:function(){var e=this,n=null;return this.props.loading?n=i.a.createElement(c.a,null):this.props.error?n=i.a.createElement("div",null,"Oops, something went wrong..."):this.props.data&&(n=this.props.data[this.state.currentWord].word,this.state.correctAnswer&&(n=this.props.data[this.state.currentWord].fullsentence)),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"scores"},i.a.createElement("p",null,"You've scored:"),i.a.createElement("p",null,i.a.createElement("span",null,this.state.correctWords)," out of",i.a.createElement("span",null," ",this.props.data?this.props.data.length:""),i.a.createElement("br",null),"questions")),i.a.createElement("div",{className:"playground"},i.a.createElement("div",null,i.a.createElement("p",{className:"question"},n),this.state.form.map(function(n){return i.a.createElement(d.a,{change:e.onChangeHandler,data:n.elementConfig,key:n.elementConfig.placeholder,label:n.elementConfig.placeholder})}),i.a.createElement(p.a,{classes:"Success",click:this.reloadTask},"Wanna try again?"),i.a.createElement("progress",{max:this.props.data?this.props.data.length:"1",value:this.state.currentWord+1,step:"1"}))))}}]),n}(A.Component),f=function(e){return{data:e.wordsConstructor.fetchedData,loading:e.wordsConstructor.loading,error:e.wordsConstructor.error,url:e.wordsConstructor.url}},m=function(e){return{fetchData:function(n){return e(l.b(n))},clearData:function(){return e(l.d)}}};n.default=Object(s.b)(f,m)(C)},154:function(e,n,t){var r=t(155);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;t(151)(r,o);r.locals&&(e.exports=r.locals)},155:function(e,n,t){n=e.exports=t(150)(!0),n.push([e.i,'body,html{margin:0;padding:0;overflow:auto;-webkit-transition:2s ease-in-out;-o-transition:2s ease-in-out;transition:2s ease-in-out}main .wrapper{width:100%;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,66%,.6)),to(hsla(0,0%,90%,.6))),url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");background:-webkit-linear-gradient(hsla(0,0%,66%,.6),hsla(0,0%,90%,.6)),url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");background:-o-linear-gradient(hsla(0,0%,66%,.6),hsla(0,0%,90%,.6)),url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");background:linear-gradient(hsla(0,0%,66%,.6),hsla(0,0%,90%,.6)),url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");background-repeat:no-repeat;background-position:50%;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;left:0;right:0}.playground{width:900px;height:500px;background:rgba(248,248,255,.5);text-align:center}.playground .question{text-align:center;font:small-caps 700 20px serif;padding:20px;height:70px}.playground input[type=radio]{position:absolute;top:0;width:100%;height:100%;z-index:-1}.playground .Label:before{content:none}.playground .Label:after{content:"";width:50px;height:80%;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:100px;border-radius:50%;border:3px solid #fff}.playground .InputContainer{padding:0;margin:30px 0;overflow:hidden}.playground .InputContainer:first-of-type>.Label:after{background:#1e90ff}.playground .InputContainer:nth-of-type(2)>.Label:after{background:#0c6}.playground .InputContainer:nth-of-type(3)>.Label:after{background:red}.playground .InputContainer:last-of-type>.Label:after{background:#000}.playground label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:90%;margin:10px auto;min-height:50px;text-align:left;background:-webkit-gradient(linear,left top,left bottom,color-stop(98%,#4d4d4d),to(#fff));background:-webkit-linear-gradient(#4d4d4d 98%,#fff);background:-o-linear-gradient(#4d4d4d 98%,#fff);background:linear-gradient(#4d4d4d 98%,#fff);color:#fff;cursor:pointer;-webkit-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;-webkit-box-shadow:0 8px 15px #000;box-shadow:0 8px 15px #000;text-indent:20px;font:400 1rem Verdana,"sans-serif"}label.correct{background:#0c6}label.wrong{background:#f30}.tick{margin-right:10px;font-weight:900;font-size:20px;color:#0c6}progress{width:90%;margin-top:15px;background:#ccc;height:10px}.scores{position:fixed;top:50px;left:30px;width:150px;height:150px;border-radius:20px;background:#00bfff;text-align:center;font:italic small-caps 700 20px cursive;-webkit-box-shadow:0 3px 3px 3px #99e6ff;box-shadow:0 3px 3px 3px #99e6ff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.scores p:first-of-type{margin-bottom:5px}.scores span{font-size:30px}.congratulations{padding:20px;text-align:left;font:700 25px Courier,monospace;text-transform:uppercase;-webkit-transition:ease-in-out;-o-transition:ease-in-out;transition:ease-in-out}@media only screen and (max-width:480px){.wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}.scores{width:100%;position:static;font-size:16px;height:auto}.scores span{font-size:20px}.playground{width:100%}label{padding:8px 5px}.playground .question{height:30px}.playground .InputContainer{margin:0}}',"",{version:3,sources:["C:/OSPanel/domains/localhost/myapp/src/containers/Idioms/Idioms.css"],names:[],mappings:"AAAA,UACE,SAAU,AACV,UAAW,AACX,cAAe,AACf,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA2B,CAAE,AAE/B,cACE,WAAY,AACZ,qLAAyM,AACzM,sJAAuK,AACvK,iJAAkK,AAClK,8IAA+J,AAC/J,4BAA6B,AAC7B,wBAA4B,AAC5B,sBAAuB,AACvB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACnB,OAAQ,AACR,OAAS,CACT,AAGF,YACE,YAAa,AACb,aAAc,AACd,gCAAqC,AACrC,iBAAmB,CAAE,AACrB,sBACE,kBAAmB,AACnB,+BAAiC,AACjC,aAAc,AACd,WAAa,CAAE,AACjB,8BACE,kBAAmB,AACnB,MAAO,AACP,WAAY,AACZ,YAAa,AACb,UAAY,CAAE,AAChB,0BACE,YAAc,CAAE,AAClB,yBACE,WAAY,AACZ,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,mCAAoC,AAChC,+BAAgC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CAAE,AAC3B,4BACE,UAAW,AACX,cAAe,AACf,eAAiB,CAAE,AACrB,uDACE,kBAAoB,CAAE,AACxB,wDACE,eAAoB,CAAE,AACxB,wDACE,cAAgB,CAAE,AACpB,sDACE,eAAiB,CAAE,AACrB,kBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,UAAW,AACX,iBAAkB,AAClB,gBAAiB,AACjB,gBAAiB,AACjB,0FAAgG,AAChG,qDAAuD,AACvD,gDAAkD,AAClD,6CAA+C,AAC/C,WAAY,AACZ,eAAgB,AAChB,mCAAoC,AACpC,8BAA+B,AAC/B,2BAA4B,AAC5B,mCAAqC,AAC7B,2BAA6B,AACrC,iBAAkB,AAClB,kCAAoC,CAAE,AAE1C,cACE,eAAoB,CAAE,AAExB,YACE,eAAoB,CAAE,AAExB,MACE,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,UAAe,CAAE,AAEnB,SACE,UAAW,AACX,gBAAiB,AACjB,gBAAiB,AACjB,WAAa,CAAE,AAEjB,QACE,eAAgB,AAChB,SAAU,AACV,UAAW,AACX,YAAa,AACb,aAAc,AACd,mBAAoB,AACpB,mBAAoB,AACpB,kBAAmB,AACnB,wCAA0C,AAC1C,yCAA0C,AAClC,iCAAkC,AAC1C,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,sBAAwB,CAAE,AAEhC,wBACE,iBAAmB,CAAE,AAEvB,aACE,cAAgB,CAAE,AAEpB,iBACE,aAAc,AACd,gBAAiB,AACjB,gCAAiC,AACjC,yBAA0B,AAC1B,+BAAgC,AAChC,0BAA2B,AAC3B,sBAAwB,CAAE,AAE5B,yCACE,SACE,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,sBAAwB,CAAE,AAChC,QACE,WAAY,AACZ,gBAAiB,AACjB,eAAgB,AAChB,WAAa,CAAE,AACjB,aACE,cAAgB,CAAE,AACpB,YACE,UAAY,CAAE,AAChB,MACE,eAAiB,CAAE,AACrB,sBACE,WAAa,CAAE,AACjB,4BACE,QAAU,CAAE,CAAE",file:"Idioms.css",sourcesContent:['html, body {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  -webkit-transition: 2s ease-in-out;\n  -o-transition: 2s ease-in-out;\n  transition: 2s ease-in-out; }\n\nmain .wrapper {\n  width: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(169, 169, 169, 0.6)), to(rgba(230, 230, 230, 0.6))), url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");\n  background: -webkit-linear-gradient(rgba(169, 169, 169, 0.6), rgba(230, 230, 230, 0.6)), url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");\n  background: -o-linear-gradient(rgba(169, 169, 169, 0.6), rgba(230, 230, 230, 0.6)), url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");\n  background: linear-gradient(rgba(169, 169, 169, 0.6), rgba(230, 230, 230, 0.6)), url("https://cdn-images-1.medium.com/max/2000/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  left: 0;\n  right: 0;\n }\n\n\n.playground {\n  width: 900px;\n  height: 500px;\n  background: rgba(248, 248, 255, 0.5);\n  text-align: center; }\n  .playground .question {\n    text-align: center;\n    font: small-caps bold 20px serif;\n    padding: 20px;\n    height: 70px; }\n  .playground input[type=radio] {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1; }\n  .playground .Label::before {\n    content: none; }\n  .playground .Label::after {\n    content: \'\';\n    width: 50px;\n    height: 80%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 100px;\n    border-radius: 50%;\n    border: 3px solid #fff; }\n  .playground .InputContainer {\n    padding: 0;\n    margin: 30px 0;\n    overflow: hidden; }\n  .playground .InputContainer:first-of-type > .Label::after {\n    background: #1e90ff; }\n  .playground .InputContainer:nth-of-type(2) > .Label::after {\n    background: #00cc66; }\n  .playground .InputContainer:nth-of-type(3) > .Label::after {\n    background: red; }\n  .playground .InputContainer:last-of-type > .Label::after {\n    background: #000; }\n  .playground label {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 90%;\n    margin: 10px auto;\n    min-height: 50px;\n    text-align: left;\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(98%, #4d4d4d), to(#fff));\n    background: -webkit-linear-gradient(#4d4d4d 98%, #fff);\n    background: -o-linear-gradient(#4d4d4d 98%, #fff);\n    background: linear-gradient(#4d4d4d 98%, #fff);\n    color: #fff;\n    cursor: pointer;\n    -webkit-transition: .5s ease-in-out;\n    -o-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    -webkit-box-shadow: 0 8px 15px black;\n            box-shadow: 0 8px 15px black;\n    text-indent: 20px;\n    font: 400 1rem Verdana,"sans-serif"; }\n\nlabel.correct {\n  background: #00cc66; }\n\nlabel.wrong {\n  background: #ff3300; }\n\n.tick {\n  margin-right: 10px;\n  font-weight: 900;\n  font-size: 20px;\n  color: #00cc66; }\n\nprogress {\n  width: 90%;\n  margin-top: 15px;\n  background: #ccc;\n  height: 10px; }\n\n.scores {\n  position: fixed;\n  top: 50px;\n  left: 30px;\n  width: 150px;\n  height: 150px;\n  border-radius: 20px;\n  background: #00BFFF;\n  text-align: center;\n  font: italic small-caps bold 20px cursive;\n  -webkit-box-shadow: 0 3px 3px 3px #99e6ff;\n          box-shadow: 0 3px 3px 3px #99e6ff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.scores p:nth-of-type(1) {\n  margin-bottom: 5px; }\n\n.scores span {\n  font-size: 30px; }\n\n.congratulations {\n  padding: 20px;\n  text-align: left;\n  font: 700 25px Courier,monospace;\n  text-transform: uppercase;\n  -webkit-transition: ease-in-out;\n  -o-transition: ease-in-out;\n  transition: ease-in-out; }\n\n@media only screen and (max-width: 480px) {\n  .wrapper {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: start;\n        align-items: flex-start; }\n  .scores {\n    width: 100%;\n    position: static;\n    font-size: 16px;\n    height: auto; }\n  .scores span {\n    font-size: 20px; }\n  .playground {\n    width: 100%; }\n  label {\n    padding: 8px 5px; }\n  .playground .question {\n    height: 30px; }\n  .playground .InputContainer {\n    margin: 0; } }\n'],sourceRoot:""}])}});
//# sourceMappingURL=0.1bf81589.chunk.js.map