var s=Object.defineProperty;var i=(r,t)=>s(r,"name",{value:t,configurable:!0});import{a as n,j as e}from"./jsx-runtime-3fefa0c9.js";function l({tokens:r,hasRemValue:t=!1}){return n("table",{className:"tkgrid",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),t&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([d,a])=>n("tr",{children:[e("td",{children:d}),e("td",{children:a}),t&&n("td",{children:[Number(a.replace("rem",""))*16,"px"]})]},d))})]})}i(l,"TokensGrid");try{l.displayName="TokensGrid",l.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{l as T};
//# sourceMappingURL=TokensGrid-61271f6c.js.map
