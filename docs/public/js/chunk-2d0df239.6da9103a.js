(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df239"],{8946:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("ChartTitleComponent",{attrs:{name:t.chartname,desc:t.chartdesc}}),e("section",{staticClass:"chart"},[e("D3BarChart",{attrs:{config:t.chartconfig,datum:t.chartdata,title:"Lorem ipsum",source:"Dolor sit amet"}})],1),e("ChartImportComponent",{attrs:{code:t.chartname,link:"https://github.com/Saigesp/vue-d3-charts/blob/master/src/barchart/d3.barchart.js"}}),e("ChartTemplateComponent",{attrs:{template:t.chartcode}}),e("ChartDataComponent",{attrs:{desc:t.chartdatadesc,code:t.chartdatacode,config:t.chartdataconfig}}),e("ChartConfigComponent",{attrs:{options:t.chartoptions,custom:t.chartcustomoptions}}),e("ChartColorComponent"),e("ChartStylesComponent",{attrs:{classname:"barchart",elements:["bar","label"]}})],1)},r=[],n=(e("2dd5"),{name:"BarChart",data:function(){return{chartname:"D3BarChart",chartdesc:"A bar chart presents categorical data with rectangular bars with heights proportional to the values that they represent.",chartcode:'<D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>',chartoptions:["margin","key","value","color","transition","axis","labelRotation","tooltip"],chartcustomoptions:{tooltip:{required:!1,default:"tooltip: {label: false}",type:"Object",desc:"Tooltip options convention.<br><code>label</code>: (string). label to overrige key value in the tooltip. If set to false, label will be key field value. See below.",example:'<code>tooltip: {label: "displayName"]}</code>'}},chartconfig:{key:"name",value:"total",color:"#41B882",yAxis:"Lorem ipsum dolor sit amet",yScaleTicks:10,yScaleFormat:".0s"},chartdata:[{name:"1992",total:4748},{name:"1993",total:5526},{name:"1994",total:8574},{name:"1995",total:15805},{name:"1996",total:14582},{name:"1997",total:26694},{name:"1998",total:35205},{name:"1999",total:45944},{name:"2000",total:78595},{name:"2001",total:78530},{name:"2002",total:45407},{name:"2003",total:54044},{name:"2004",total:69165},{name:"2005",total:61798},{name:"2006",total:63686}],chartdatadesc:"An <strong>objects array</strong> is expected, with each object as a bar",chartdatacode:'chart_data = [{\n  name: "Lorem",\n  total: 30\n},{\n  name: "Ipsum",\n  total: 21\n},{\n  name: "Dolor",\n  total: 20\n}]',chartdataconfig:'<code>key: "name", value: "total"</code>'}}}),c=n,l=e("2877"),s=Object(l["a"])(c,o,r,!1,null,null,null);a["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0df239.6da9103a.js.map