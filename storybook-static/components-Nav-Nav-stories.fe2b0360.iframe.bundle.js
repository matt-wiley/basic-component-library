"use strict";(self.webpackChunk_matt_wiley_basic_component_library=self.webpackChunk_matt_wiley_basic_component_library||[]).push([[973],{"./src/components/Nav/Nav.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Nav_stories});var Button_namespaceObject={};__webpack_require__.r(Button_namespaceObject);var dist=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Nav=function Nav(props){var navigateInRouter=(0,react_router_dist.s0)(),buttonType=props.buttonType,buttonSize=props.buttonSize,navItems=props.navItems;return(0,jsx_runtime.jsx)("div",{className:"flex flex-row justify-center align-middle",children:Object.keys(navItems).map((function(locationName,index){var path=navItems[locationName];return(0,jsx_runtime.jsx)(Button_namespaceObject.default,{size:buttonSize||Button.qE.Medium,type:buttonType||Button.L$.Link,label:locationName,tooltip:path,onClick:function onClick(){path.startsWith("http")?function navigateOnWeb(url){window.location.assign(url)}(path):(0,react.useEffect)((function(){navigateInRouter(path)}))}},index)}))})};Nav.displayName="Nav";const Nav_Nav=Nav;try{Nav.displayName="Nav",Nav.__docgenInfo={description:"",displayName:"Nav",props:{buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"string"}},buttonSize:{defaultValue:null,description:"",name:"buttonSize",required:!1,type:{name:"string"}},navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavItems"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Nav/Nav.tsx#Nav"]={docgenInfo:Nav.__docgenInfo,name:"Nav",path:"src/components/Nav/Nav.tsx#Nav"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Nav_stories={title:"BasicComponentLibrary/Nav",component:Nav_Nav,decorators:[dist.EN],parameters:{layout:"centered"},tags:["autodocs"]};var Primary={args:{navItems:{Home:"https://matt-wiley.github.io/#/home",YouTube:"https://www.youtube.com"}}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    navItems: {\n      "Home": "https://matt-wiley.github.io/#/home",\n      "YouTube": "https://www.youtube.com"\n    }\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})});var __namedExportsOrder=["Primary"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>ButtonType,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,qE:()=>ButtonSize});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonType=function(ButtonType){return ButtonType.Primary="primary",ButtonType.Secondary="secondary",ButtonType.Tertiary="tertiary",ButtonType.Danger="danger",ButtonType.Warning="warning",ButtonType.Success="success",ButtonType.Info="info",ButtonType.Light="light",ButtonType.Dark="dark",ButtonType.Link="link",ButtonType.None="none",ButtonType}({}),ButtonSize=function(ButtonSize){return ButtonSize.ExtraSmall="xs",ButtonSize.Small="sm",ButtonSize.Medium="md",ButtonSize.Large="lg",ButtonSize.ExtraLarge="xl",ButtonSize}({}),Button=function Button(props){var type=props.type,size=props.size,disabled=props.disabled,label=props.label||"Button",tooltip=props.tooltip||label,style=function styleForType(type,size,isDisabled){var typeStyle=isDisabled?"bg-gray-100 text-gray-300 cursor-not-allowed":{primary:"bg-blue-500 hover:bg-blue-700 text-white shadow-lg",secondary:"bg-gray-500 hover:bg-gray-700 text-white shadow-lg",tertiary:"bg-green-500 hover:bg-green-700 text-white shadow-lg",danger:"bg-red-500 hover:bg-red-700 text-white shadow-lg",warning:"bg-yellow-500 hover:bg-yellow-700 text-white shadow-lg",success:"bg-green-500 hover:bg-green-700 text-white shadow-lg",info:"bg-blue-500 hover:bg-blue-700 text-white shadow-lg",light:"bg-gray-300 hover:bg-gray-400 text-white shadow-lg",dark:"bg-gray-700 hover:bg-gray-800 text-white shadow-lg",link:"bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white",none:"bg-transparent hover:bg-transparent text-blue-700 hover:text-blue-500"}["".concat(type)],sizeStyle={xs:"text-xs py-2 px-3 rounded m-1",sm:"text-sm py-2 px-3 rounded m-1",md:"text-md font-bold py-2 px-4 rounded m-1",lg:"text-lg font-bold py-3 px-5 rounded m-1",xl:"text-xl font-black py-4 px-6 rounded m-1"}["".concat(size)];return"".concat(typeStyle," ").concat(sizeStyle," transition duration-100 ease-in-out")}(type||ButtonType.Primary,size||ButtonSize.Medium,disabled||!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:style,title:tooltip,onClick:function handleOnClick(){disabled||(console.log("Button clicked!"),props.onClick&&props.onClick())},children:label})};Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);