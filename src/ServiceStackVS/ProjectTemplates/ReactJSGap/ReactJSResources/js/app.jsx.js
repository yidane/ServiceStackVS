var HelloWorld=React.createClass({displayName:"HelloWorld",getInitialState:function(){return{greeting:""}},handleNameChange:function(e){e.preventDefault();var a=this,t=e.target.value.trim();$.getJSON("hello/"+t).then(function(e){a.setState({greeting:e.Result})})},render:function(){return React.createElement("div",null,React.createElement("input",{type:"text",className:"form-control",placeholder:"Your name",onChange:this.handleNameChange}),React.createElement("h3",null,this.state.greeting))}}),App=React.createClass({displayName:"App",render:function(){return React.createElement("div",null,React.createElement("div",{className:"navbar navbar-inverse",role:"navigation"},React.createElement("div",{className:"container"},React.createElement("div",{className:"navbar-header"},React.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},React.createElement("span",{className:"sr-only"},"Toggle navigation"),React.createElement("span",{className:"icon-bar"}),React.createElement("span",{className:"icon-bar"}),React.createElement("span",{className:"icon-bar"})),React.createElement("a",{className:"navbar-brand",href:"/"},React.createElement("img",{src:"/img/react-logo.png"}),"$safeprojectname$")),React.createElement("div",{className:"navbar-collapse collapse"},React.createElement("ul",{className:"nav navbar-nav pull-right"},React.createElement("li",null,React.createElement("a",{onClick:nativeHost.showAbout},"About")),React.createElement("li",{className:"platform winforms"},React.createElement("a",{onClick:nativeHost.toggleFormBorder},"Toggle Window")),React.createElement("li",{className:"platform winforms mac"},React.createElement("a",{onClick:nativeHost.quit},"Close")))))),React.createElement("div",{className:"container"},React.createElement(HelloWorld,null)))}});React.render(React.createElement(App,null),document.body);