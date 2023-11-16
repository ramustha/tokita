import{k as C,s as _,D as M,a2 as B,A as p,b as V,y as k,G as u,o as T,c as x,d,I as y,u as n,t as g,g as t,h as G,j as N,H as R}from "./index-bc5cd541.js";import{l as w}from "./Dashboard-b1fd45e9.js";import"./axios-28bc18a3.js";const U=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","United States of America","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"],L={class:"pt-2"},P={class:"grid grid-cols-12 gap-6"},z={class:"col-span-12 md:col-span-6 flex flex-col"},F={class:"col-span-12 md:col-span-6 flex flex-col"},D={class:"mt-3 flex flex-1 flex-wrap justify-center"},K=C({__name:"BillingAddressTab",emits:["submit"],setup(E, {emit:S}){const{colors:v}=_(),{t:o}=M(),e=B({name:"John Smith",email:"smith@gmail.com",address:"93  Guild Street",city:{text:"London"},country:"United Kingdom",connection:!0}),f=p(()=>U.filter(l=>c.value.filter(({country:a})=>a===l).length)),c=p(()=>w.cities.map(({title:l,country:a})=>({text:l,country:a}))),m=V([]),h=p(()=>({color:v.dark}));k(()=>e.country,(l, a)=>{var s;if(m.value=e.country?c.value.filter(({country:r})=>r===e.country):[...c.value],l!==a){const r=((s=m.value.find(({country:b})=>b===l))==null?void 0:s.text)||"";e.city={text:r}}},{immediate:!0});function A(){S("submit",e)}return(l, a)=>{const s=u("va-input"),r=u("va-select"),b=u("va-checkbox"),I=u("va-button");return T(),x("div",L,[d("div",P,[d("div",z,[d("div",{class:"title mb-4",style:y(n(h))},g(n(o)("dashboard.tabs.billingAddress.personalInfo")),5),t(s,{modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]= i=>e.name=i),label:n(o)("dashboard.tabs.billingAddress.firstName")},null,8,["modelValue","label"]),t(s,{modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]= i=>e.email=i),label:n(o)("dashboard.tabs.billingAddress.email")},null,8,["modelValue","label"]),t(s,{modelValue:e.address,"onUpdate:modelValue":a[2]||(a[2]= i=>e.address=i),label:n(o)("dashboard.tabs.billingAddress.address")},null,8,["modelValue","label"])]),d("div",F,[d("div",{class:"title mb-4",style:y(n(h))},g(n(o)("dashboard.tabs.billingAddress.companyInfo")),5),t(r,{modelValue:e.country,"onUpdate:modelValue":a[3]||(a[3]= i=>e.country=i),class:"mb-4",options:n(f),label:n(o)("dashboard.tabs.billingAddress.country"),searchable:"",clearable:""},null,8,["modelValue","options","label"]),t(r,{modelValue:e.city,"onUpdate:modelValue":a[4]||(a[4]= i=>e.city=i),class:"mb-4",label:n(o)("dashboard.tabs.billingAddress.city"),options:m.value,"key-by":"text","track-by":"text"},null,8,["modelValue","label","options"]),t(b,{modelValue:e.connection,"onUpdate:modelValue":a[5]||(a[5]= i=>e.connection=i),label:n(o)("dashboard.tabs.billingAddress.infiniteConnections")},null,8,["modelValue","label"])])]),d("div",D,[t(I,{onClick:A},{default:G(()=>[N(g(n(o)("dashboard.tabs.billingAddress.addConnection")),1)]),_:1})])])}}});const q=R(K,[["__scopeId","data-v-d9b32945"]]);export{q as default};
