(this.webpackJsonpassembletechscreen=this.webpackJsonpassembletechscreen||[]).push([[0],{19:function(e,a,t){e.exports=t(37)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),i=t.n(o);t(24),t(25);function r(){return l.a.createElement("header",null,l.a.createElement("h2",{className:"header-title"},"Assemble Store"))}var c=t(2);t(26);function u(e){var a=e.sku,t=e.name,n=e.unitPrice,o=e.quantity;return l.a.createElement("div",{className:"cart-items"},l.a.createElement("div",{className:"image-placeholder"}),l.a.createElement("div",null,l.a.createElement("h4",null,t),l.a.createElement("p",null,"SKU# ",a)),l.a.createElement("h4",null,o),l.a.createElement("h4",null,"$",n.toFixed(2)))}t(27);function m(e){var a=e.subtotal;return l.a.createElement("div",{className:"subtotal"},l.a.createElement("h4",null,"Subtotal"),l.a.createElement("h4",null,"$",a.toFixed(2)))}var p=t(6);t(28);function E(){var e=[{sku:38094374,unitPrice:24,name:"Red Shirt",quantity:2},{sku:38094375,unitPrice:24,name:"Blue Shirt",quantity:1},{sku:38094321,unitPrice:12,name:"Blue socks",quantity:4}],a=0;return e.forEach((function(e){a+=e.unitPrice*e.quantity})),l.a.createElement("section",{id:"cart-page"},l.a.createElement("div",{className:"cart-page-title"},l.a.createElement("h2",null,"Your Cart"),l.a.createElement("h4",null,"Quantity"),l.a.createElement("h4",null,"Price")),e.map((function(e,a){return l.a.createElement(u,{key:a,sku:e.sku,name:e.name,unitPrice:e.unitPrice,quantity:e.quantity})})),l.a.createElement(m,{subtotal:a}),l.a.createElement(p.b,{to:"./billing"},l.a.createElement("button",{className:"button right"},"Check Out")))}var v=t(12),s=t(18);t(34);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function h(){var e=Object(n.useReducer)((function(e,a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,{},a)}),{nameoncard:"",cardnum:"",MM:"",YYYY:"",cvv:"",name:"",address:"",apt:"",country:"Afghanistan",state:"AL",zipcode:""}),a=Object(s.a)(e,2),t=a[0],o=a[1],i=function(e){var a=e.target.name,t=e.target.value;o(Object(v.a)({},a,t))};return console.log(t),l.a.createElement("section",{id:"checkout"},l.a.createElement("div",{className:"checkout-title"},l.a.createElement("h2",null,"Check Out")),l.a.createElement("div",{className:"payment"},l.a.createElement("div",null,l.a.createElement("h4",null,"Payment Info"),l.a.createElement("div",{className:"payment-info"},l.a.createElement("p",null,"Name on Card"),l.a.createElement("input",{name:"nameoncard",onChange:i,placeholder:"Name on Card"}),l.a.createElement("p",null,"Card Number"),l.a.createElement("input",{name:"cardnum",onChange:i,placeholder:"XXXX XXXX XXXX XXXX"}),l.a.createElement("p",null,"Expiration Date"),l.a.createElement("div",{className:"date-selector"},l.a.createElement("select",{onChange:i,name:"MM"},l.a.createElement("option",null,"- MM -"),l.a.createElement("option",{value:"January"},"January"),l.a.createElement("option",{value:"Febuary"},"Febuary"),l.a.createElement("option",{value:"March"},"March"),l.a.createElement("option",{value:"April"},"April"),l.a.createElement("option",{value:"May"},"May"),l.a.createElement("option",{value:"June"},"June"),l.a.createElement("option",{value:"July"},"July"),l.a.createElement("option",{value:"August"},"August"),l.a.createElement("option",{value:"September"},"September"),l.a.createElement("option",{value:"October"},"October"),l.a.createElement("option",{value:"November"},"November"),l.a.createElement("option",{value:"December"},"December")),l.a.createElement("select",{onChange:i,name:"YYYY"},l.a.createElement("option",null,"- YYYY -"),l.a.createElement("option",{value:"2020"},"2020"),l.a.createElement("option",{value:"2019"},"2019"),l.a.createElement("option",{value:"2018"},"2018"),l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2016"},"2016"),l.a.createElement("option",{value:"2015"},"2015"),l.a.createElement("option",{value:"2014"},"2014"),l.a.createElement("option",{value:"2013"},"2013"),l.a.createElement("option",{value:"2012"},"2012"),l.a.createElement("option",{value:"2011"},"2011"),l.a.createElement("option",{value:"2010"},"2010"),l.a.createElement("option",{value:"2009"},"2009"),l.a.createElement("option",{value:"2008"},"2008"),l.a.createElement("option",{value:"2007"},"2007"),l.a.createElement("option",{value:"2006"},"2006"),l.a.createElement("option",{value:"2005"},"2005"),l.a.createElement("option",{value:"2004"},"2004"),l.a.createElement("option",{value:"2003"},"2003"),l.a.createElement("option",{value:"2002"},"2002"),l.a.createElement("option",{value:"2001"},"2001"),l.a.createElement("option",{value:"2000"},"2000"),l.a.createElement("option",{value:"1999"},"1999"),l.a.createElement("option",{value:"1998"},"1998"),l.a.createElement("option",{value:"1997"},"1997"),l.a.createElement("option",{value:"1996"},"1996"),l.a.createElement("option",{value:"1995"},"1995"),l.a.createElement("option",{value:"1994"},"1994"),l.a.createElement("option",{value:"1993"},"1993"),l.a.createElement("option",{value:"1992"},"1992"),l.a.createElement("option",{value:"1991"},"1991"),l.a.createElement("option",{value:"1990"},"1990"),l.a.createElement("option",{value:"1989"},"1989"),l.a.createElement("option",{value:"1988"},"1988"),l.a.createElement("option",{value:"1987"},"1987"),l.a.createElement("option",{value:"1986"},"1986"),l.a.createElement("option",{value:"1985"},"1985"),l.a.createElement("option",{value:"1984"},"1984"),l.a.createElement("option",{value:"1983"},"1983"),l.a.createElement("option",{value:"1982"},"1982"),l.a.createElement("option",{value:"1981"},"1981"),l.a.createElement("option",{value:"1980"},"1980"),l.a.createElement("option",{value:"1979"},"1979"),l.a.createElement("option",{value:"1978"},"1978"),l.a.createElement("option",{value:"1977"},"1977"),l.a.createElement("option",{value:"1976"},"1976"),l.a.createElement("option",{value:"1975"},"1975"),l.a.createElement("option",{value:"1974"},"1974"),l.a.createElement("option",{value:"1973"},"1973"),l.a.createElement("option",{value:"1972"},"1972"),l.a.createElement("option",{value:"1971"},"1971"),l.a.createElement("option",{value:"1970"},"1970"),l.a.createElement("option",{value:"1969"},"1969"),l.a.createElement("option",{value:"1968"},"1968"),l.a.createElement("option",{value:"1967"},"1967"),l.a.createElement("option",{value:"1966"},"1966"),l.a.createElement("option",{value:"1965"},"1965"),l.a.createElement("option",{value:"1964"},"1964"),l.a.createElement("option",{value:"1963"},"1963"),l.a.createElement("option",{value:"1962"},"1962"),l.a.createElement("option",{value:"1961"},"1961"),l.a.createElement("option",{value:"1960"},"1960"),l.a.createElement("option",{value:"1959"},"1959"),l.a.createElement("option",{value:"1958"},"1958"),l.a.createElement("option",{value:"1957"},"1957"),l.a.createElement("option",{value:"1956"},"1956"),l.a.createElement("option",{value:"1955"},"1955"),l.a.createElement("option",{value:"1954"},"1954"),l.a.createElement("option",{value:"1953"},"1953"),l.a.createElement("option",{value:"1952"},"1952"),l.a.createElement("option",{value:"1951"},"1951"),l.a.createElement("option",{value:"1950"},"1950"),l.a.createElement("option",{value:"1949"},"1949"),l.a.createElement("option",{value:"1948"},"1948"),l.a.createElement("option",{value:"1947"},"1947"),l.a.createElement("option",{value:"1946"},"1946"),l.a.createElement("option",{value:"1945"},"1945"),l.a.createElement("option",{value:"1944"},"1944"),l.a.createElement("option",{value:"1943"},"1943"),l.a.createElement("option",{value:"1942"},"1942"),l.a.createElement("option",{value:"1941"},"1941"),l.a.createElement("option",{value:"1940"},"1940"),l.a.createElement("option",{value:"1939"},"1939"),l.a.createElement("option",{value:"1938"},"1938"),l.a.createElement("option",{value:"1937"},"1937"),l.a.createElement("option",{value:"1936"},"1936"),l.a.createElement("option",{value:"1935"},"1935"),l.a.createElement("option",{value:"1934"},"1934"),l.a.createElement("option",{value:"1933"},"1933"),l.a.createElement("option",{value:"1932"},"1932"),l.a.createElement("option",{value:"1931"},"1931"),l.a.createElement("option",{value:"1930"},"1930"))),l.a.createElement("p",null,"CVV"),l.a.createElement("input",{name:"cvv",onChange:i,placeholder:"City"}))),l.a.createElement("div",null,l.a.createElement("h4",null,"Shipping Adress"),l.a.createElement("div",{className:"shipping-info"},l.a.createElement("p",null,"Name"),l.a.createElement("input",{name:"name",onChange:i,placeholder:"Name"}),l.a.createElement("p",null,"Address"),l.a.createElement("input",{name:"address",onChange:i,placeholder:"Address"}),l.a.createElement("p",null,"Apt/suite/etc"),l.a.createElement("input",{name:"apt",onChange:i,placeholder:"Apt/suite/etc"}),l.a.createElement("p",null,"City"),l.a.createElement("input",{name:"city",onChange:i,placeholder:"City"}),l.a.createElement("p",null,"Country"),l.a.createElement("select",{name:"country",onChange:i},l.a.createElement("option",{value:"Afghanistan"},"Afghanistan"),l.a.createElement("option",{value:"\xc5land Islands"},"\xc5land Islands"),l.a.createElement("option",{value:"Albania"},"Albania"),l.a.createElement("option",{value:"Algeria"},"Algeria"),l.a.createElement("option",{value:"American Samoa"},"American Samoa"),l.a.createElement("option",{value:"Andorra"},"Andorra"),l.a.createElement("option",{value:"Angola"},"Angola"),l.a.createElement("option",{value:"Anguilla"},"Anguilla"),l.a.createElement("option",{value:"Antarctica"},"Antarctica"),l.a.createElement("option",{value:"Antigua and Barbuda"},"Antigua and Barbuda"),l.a.createElement("option",{value:"Argentina"},"Argentina"),l.a.createElement("option",{value:"Armenia"},"Armenia"),l.a.createElement("option",{value:"Aruba"},"Aruba"),l.a.createElement("option",{value:"Australia"},"Australia"),l.a.createElement("option",{value:"Austria"},"Austria"),l.a.createElement("option",{value:"Azerbaijan"},"Azerbaijan"),l.a.createElement("option",{value:"Bahamas"},"Bahamas"),l.a.createElement("option",{value:"Bahrain"},"Bahrain"),l.a.createElement("option",{value:"Bangladesh"},"Bangladesh"),l.a.createElement("option",{value:"Barbados"},"Barbados"),l.a.createElement("option",{value:"Belarus"},"Belarus"),l.a.createElement("option",{value:"Belgium"},"Belgium"),l.a.createElement("option",{value:"Belize"},"Belize"),l.a.createElement("option",{value:"Benin"},"Benin"),l.a.createElement("option",{value:"Bermuda"},"Bermuda"),l.a.createElement("option",{value:"Bhutan"},"Bhutan"),l.a.createElement("option",{value:"Bolivia"},"Bolivia"),l.a.createElement("option",{value:"Bosnia and Herzegovina"},"Bosnia and Herzegovina"),l.a.createElement("option",{value:"Botswana"},"Botswana"),l.a.createElement("option",{value:"Bouvet Island"},"Bouvet Island"),l.a.createElement("option",{value:"Brazil"},"Brazil"),l.a.createElement("option",{value:"British Indian Ocean Territory"},"British Indian Ocean Territory"),l.a.createElement("option",{value:"Brunei Darussalam"},"Brunei Darussalam"),l.a.createElement("option",{value:"Bulgaria"},"Bulgaria"),l.a.createElement("option",{value:"Burkina Faso"},"Burkina Faso"),l.a.createElement("option",{value:"Burundi"},"Burundi"),l.a.createElement("option",{value:"Cambodia"},"Cambodia"),l.a.createElement("option",{value:"Cameroon"},"Cameroon"),l.a.createElement("option",{value:"Canada"},"Canada"),l.a.createElement("option",{value:"Cape Verde"},"Cape Verde"),l.a.createElement("option",{value:"Cayman Islands"},"Cayman Islands"),l.a.createElement("option",{value:"Central African Republic"},"Central African Republic"),l.a.createElement("option",{value:"Chad"},"Chad"),l.a.createElement("option",{value:"Chile"},"Chile"),l.a.createElement("option",{value:"China"},"China"),l.a.createElement("option",{value:"Christmas Island"},"Christmas Island"),l.a.createElement("option",{value:"Cocos (Keeling) Islands"},"Cocos (Keeling) Islands"),l.a.createElement("option",{value:"Colombia"},"Colombia"),l.a.createElement("option",{value:"Comoros"},"Comoros"),l.a.createElement("option",{value:"Congo"},"Congo"),l.a.createElement("option",{value:"Congo, The Democratic Republic of The"},"Congo, The Democratic Republic of The"),l.a.createElement("option",{value:"Cook Islands"},"Cook Islands"),l.a.createElement("option",{value:"Costa Rica"},"Costa Rica"),l.a.createElement("option",{value:"Cote D'ivoire"},"Cote D'ivoire"),l.a.createElement("option",{value:"Croatia"},"Croatia"),l.a.createElement("option",{value:"Cuba"},"Cuba"),l.a.createElement("option",{value:"Cyprus"},"Cyprus"),l.a.createElement("option",{value:"Czech Republic"},"Czech Republic"),l.a.createElement("option",{value:"Denmark"},"Denmark"),l.a.createElement("option",{value:"Djibouti"},"Djibouti"),l.a.createElement("option",{value:"Dominica"},"Dominica"),l.a.createElement("option",{value:"Dominican Republic"},"Dominican Republic"),l.a.createElement("option",{value:"Ecuador"},"Ecuador"),l.a.createElement("option",{value:"Egypt"},"Egypt"),l.a.createElement("option",{value:"El Salvador"},"El Salvador"),l.a.createElement("option",{value:"Equatorial Guinea"},"Equatorial Guinea"),l.a.createElement("option",{value:"Eritrea"},"Eritrea"),l.a.createElement("option",{value:"Estonia"},"Estonia"),l.a.createElement("option",{value:"Ethiopia"},"Ethiopia"),l.a.createElement("option",{value:"Falkland Islands (Malvinas)"},"Falkland Islands (Malvinas)"),l.a.createElement("option",{value:"Faroe Islands"},"Faroe Islands"),l.a.createElement("option",{value:"Fiji"},"Fiji"),l.a.createElement("option",{value:"Finland"},"Finland"),l.a.createElement("option",{value:"France"},"France"),l.a.createElement("option",{value:"French Guiana"},"French Guiana"),l.a.createElement("option",{value:"French Polynesia"},"French Polynesia"),l.a.createElement("option",{value:"French Southern Territories"},"French Southern Territories"),l.a.createElement("option",{value:"Gabon"},"Gabon"),l.a.createElement("option",{value:"Gambia"},"Gambia"),l.a.createElement("option",{value:"Georgia"},"Georgia"),l.a.createElement("option",{value:"Germany"},"Germany"),l.a.createElement("option",{value:"Ghana"},"Ghana"),l.a.createElement("option",{value:"Gibraltar"},"Gibraltar"),l.a.createElement("option",{value:"Greece"},"Greece"),l.a.createElement("option",{value:"Greenland"},"Greenland"),l.a.createElement("option",{value:"Grenada"},"Grenada"),l.a.createElement("option",{value:"Guadeloupe"},"Guadeloupe"),l.a.createElement("option",{value:"Guam"},"Guam"),l.a.createElement("option",{value:"Guatemala"},"Guatemala"),l.a.createElement("option",{value:"Guernsey"},"Guernsey"),l.a.createElement("option",{value:"Guinea"},"Guinea"),l.a.createElement("option",{value:"Guinea-bissau"},"Guinea-bissau"),l.a.createElement("option",{value:"Guyana"},"Guyana"),l.a.createElement("option",{value:"Haiti"},"Haiti"),l.a.createElement("option",{value:"Heard Island and Mcdonald Islands"},"Heard Island and Mcdonald Islands"),l.a.createElement("option",{value:"Holy See (Vatican City State)"},"Holy See (Vatican City State)"),l.a.createElement("option",{value:"Honduras"},"Honduras"),l.a.createElement("option",{value:"Hong Kong"},"Hong Kong"),l.a.createElement("option",{value:"Hungary"},"Hungary"),l.a.createElement("option",{value:"Iceland"},"Iceland"),l.a.createElement("option",{value:"India"},"India"),l.a.createElement("option",{value:"Indonesia"},"Indonesia"),l.a.createElement("option",{value:"Iran, Islamic Republic of"},"Iran, Islamic Republic of"),l.a.createElement("option",{value:"Iraq"},"Iraq"),l.a.createElement("option",{value:"Ireland"},"Ireland"),l.a.createElement("option",{value:"Isle of Man"},"Isle of Man"),l.a.createElement("option",{value:"Israel"},"Israel"),l.a.createElement("option",{value:"Italy"},"Italy"),l.a.createElement("option",{value:"Jamaica"},"Jamaica"),l.a.createElement("option",{value:"Japan"},"Japan"),l.a.createElement("option",{value:"Jersey"},"Jersey"),l.a.createElement("option",{value:"Jordan"},"Jordan"),l.a.createElement("option",{value:"Kazakhstan"},"Kazakhstan"),l.a.createElement("option",{value:"Kenya"},"Kenya"),l.a.createElement("option",{value:"Kiribati"},"Kiribati"),l.a.createElement("option",{value:"Korea, Democratic People's Republic of"},"Korea, Democratic People's Republic of"),l.a.createElement("option",{value:"Korea, Republic of"},"Korea, Republic of"),l.a.createElement("option",{value:"Kuwait"},"Kuwait"),l.a.createElement("option",{value:"Kyrgyzstan"},"Kyrgyzstan"),l.a.createElement("option",{value:"Lao People's Democratic Republic"},"Lao People's Democratic Republic"),l.a.createElement("option",{value:"Latvia"},"Latvia"),l.a.createElement("option",{value:"Lebanon"},"Lebanon"),l.a.createElement("option",{value:"Lesotho"},"Lesotho"),l.a.createElement("option",{value:"Liberia"},"Liberia"),l.a.createElement("option",{value:"Libyan Arab Jamahiriya"},"Libyan Arab Jamahiriya"),l.a.createElement("option",{value:"Liechtenstein"},"Liechtenstein"),l.a.createElement("option",{value:"Lithuania"},"Lithuania"),l.a.createElement("option",{value:"Luxembourg"},"Luxembourg"),l.a.createElement("option",{value:"Macao"},"Macao"),l.a.createElement("option",{value:"Macedonia, The Former Yugoslav Republic of"},"Macedonia, The Former Yugoslav Republic of"),l.a.createElement("option",{value:"Madagascar"},"Madagascar"),l.a.createElement("option",{value:"Malawi"},"Malawi"),l.a.createElement("option",{value:"Malaysia"},"Malaysia"),l.a.createElement("option",{value:"Maldives"},"Maldives"),l.a.createElement("option",{value:"Mali"},"Mali"),l.a.createElement("option",{value:"Malta"},"Malta"),l.a.createElement("option",{value:"Marshall Islands"},"Marshall Islands"),l.a.createElement("option",{value:"Martinique"},"Martinique"),l.a.createElement("option",{value:"Mauritania"},"Mauritania"),l.a.createElement("option",{value:"Mauritius"},"Mauritius"),l.a.createElement("option",{value:"Mayotte"},"Mayotte"),l.a.createElement("option",{value:"Mexico"},"Mexico"),l.a.createElement("option",{value:"Micronesia, Federated States of"},"Micronesia, Federated States of"),l.a.createElement("option",{value:"Moldova, Republic of"},"Moldova, Republic of"),l.a.createElement("option",{value:"Monaco"},"Monaco"),l.a.createElement("option",{value:"Mongolia"},"Mongolia"),l.a.createElement("option",{value:"Montenegro"},"Montenegro"),l.a.createElement("option",{value:"Montserrat"},"Montserrat"),l.a.createElement("option",{value:"Morocco"},"Morocco"),l.a.createElement("option",{value:"Mozambique"},"Mozambique"),l.a.createElement("option",{value:"Myanmar"},"Myanmar"),l.a.createElement("option",{value:"Namibia"},"Namibia"),l.a.createElement("option",{value:"Nauru"},"Nauru"),l.a.createElement("option",{value:"Nepal"},"Nepal"),l.a.createElement("option",{value:"Netherlands"},"Netherlands"),l.a.createElement("option",{value:"Netherlands Antilles"},"Netherlands Antilles"),l.a.createElement("option",{value:"New Caledonia"},"New Caledonia"),l.a.createElement("option",{value:"New Zealand"},"New Zealand"),l.a.createElement("option",{value:"Nicaragua"},"Nicaragua"),l.a.createElement("option",{value:"Niger"},"Niger"),l.a.createElement("option",{value:"Nigeria"},"Nigeria"),l.a.createElement("option",{value:"Niue"},"Niue"),l.a.createElement("option",{value:"Norfolk Island"},"Norfolk Island"),l.a.createElement("option",{value:"Northern Mariana Islands"},"Northern Mariana Islands"),l.a.createElement("option",{value:"Norway"},"Norway"),l.a.createElement("option",{value:"Oman"},"Oman"),l.a.createElement("option",{value:"Pakistan"},"Pakistan"),l.a.createElement("option",{value:"Palau"},"Palau"),l.a.createElement("option",{value:"Palestinian Territory, Occupied"},"Palestinian Territory, Occupied"),l.a.createElement("option",{value:"Panama"},"Panama"),l.a.createElement("option",{value:"Papua New Guinea"},"Papua New Guinea"),l.a.createElement("option",{value:"Paraguay"},"Paraguay"),l.a.createElement("option",{value:"Peru"},"Peru"),l.a.createElement("option",{value:"Philippines"},"Philippines"),l.a.createElement("option",{value:"Pitcairn"},"Pitcairn"),l.a.createElement("option",{value:"Poland"},"Poland"),l.a.createElement("option",{value:"Portugal"},"Portugal"),l.a.createElement("option",{value:"Puerto Rico"},"Puerto Rico"),l.a.createElement("option",{value:"Qatar"},"Qatar"),l.a.createElement("option",{value:"Reunion"},"Reunion"),l.a.createElement("option",{value:"Romania"},"Romania"),l.a.createElement("option",{value:"Russian Federation"},"Russian Federation"),l.a.createElement("option",{value:"Rwanda"},"Rwanda"),l.a.createElement("option",{value:"Saint Helena"},"Saint Helena"),l.a.createElement("option",{value:"Saint Kitts and Nevis"},"Saint Kitts and Nevis"),l.a.createElement("option",{value:"Saint Lucia"},"Saint Lucia"),l.a.createElement("option",{value:"Saint Pierre and Miquelon"},"Saint Pierre and Miquelon"),l.a.createElement("option",{value:"Saint Vincent and The Grenadines"},"Saint Vincent and The Grenadines"),l.a.createElement("option",{value:"Samoa"},"Samoa"),l.a.createElement("option",{value:"San Marino"},"San Marino"),l.a.createElement("option",{value:"Sao Tome and Principe"},"Sao Tome and Principe"),l.a.createElement("option",{value:"Saudi Arabia"},"Saudi Arabia"),l.a.createElement("option",{value:"Senegal"},"Senegal"),l.a.createElement("option",{value:"Serbia"},"Serbia"),l.a.createElement("option",{value:"Seychelles"},"Seychelles"),l.a.createElement("option",{value:"Sierra Leone"},"Sierra Leone"),l.a.createElement("option",{value:"Singapore"},"Singapore"),l.a.createElement("option",{value:"Slovakia"},"Slovakia"),l.a.createElement("option",{value:"Slovenia"},"Slovenia"),l.a.createElement("option",{value:"Solomon Islands"},"Solomon Islands"),l.a.createElement("option",{value:"Somalia"},"Somalia"),l.a.createElement("option",{value:"South Africa"},"South Africa"),l.a.createElement("option",{value:"South Georgia and The South Sandwich Islands"},"South Georgia and The South Sandwich Islands"),l.a.createElement("option",{value:"Spain"},"Spain"),l.a.createElement("option",{value:"Sri Lanka"},"Sri Lanka"),l.a.createElement("option",{value:"Sudan"},"Sudan"),l.a.createElement("option",{value:"Suriname"},"Suriname"),l.a.createElement("option",{value:"Svalbard and Jan Mayen"},"Svalbard and Jan Mayen"),l.a.createElement("option",{value:"Swaziland"},"Swaziland"),l.a.createElement("option",{value:"Sweden"},"Sweden"),l.a.createElement("option",{value:"Switzerland"},"Switzerland"),l.a.createElement("option",{value:"Syrian Arab Republic"},"Syrian Arab Republic"),l.a.createElement("option",{value:"Taiwan, Province of China"},"Taiwan, Province of China"),l.a.createElement("option",{value:"Tajikistan"},"Tajikistan"),l.a.createElement("option",{value:"Tanzania, United Republic of"},"Tanzania, United Republic of"),l.a.createElement("option",{value:"Thailand"},"Thailand"),l.a.createElement("option",{value:"Timor-leste"},"Timor-leste"),l.a.createElement("option",{value:"Togo"},"Togo"),l.a.createElement("option",{value:"Tokelau"},"Tokelau"),l.a.createElement("option",{value:"Tonga"},"Tonga"),l.a.createElement("option",{value:"Trinidad and Tobago"},"Trinidad and Tobago"),l.a.createElement("option",{value:"Tunisia"},"Tunisia"),l.a.createElement("option",{value:"Turkey"},"Turkey"),l.a.createElement("option",{value:"Turkmenistan"},"Turkmenistan"),l.a.createElement("option",{value:"Turks and Caicos Islands"},"Turks and Caicos Islands"),l.a.createElement("option",{value:"Tuvalu"},"Tuvalu"),l.a.createElement("option",{value:"Uganda"},"Uganda"),l.a.createElement("option",{value:"Ukraine"},"Ukraine"),l.a.createElement("option",{value:"United Arab Emirates"},"United Arab Emirates"),l.a.createElement("option",{value:"United Kingdom"},"United Kingdom"),l.a.createElement("option",{value:"United States"},"United States"),l.a.createElement("option",{value:"United States Minor Outlying Islands"},"United States Minor Outlying Islands"),l.a.createElement("option",{value:"Uruguay"},"Uruguay"),l.a.createElement("option",{value:"Uzbekistan"},"Uzbekistan"),l.a.createElement("option",{value:"Vanuatu"},"Vanuatu"),l.a.createElement("option",{value:"Venezuela"},"Venezuela"),l.a.createElement("option",{value:"Viet Nam"},"Viet Nam"),l.a.createElement("option",{value:"Virgin Islands, British"},"Virgin Islands, British"),l.a.createElement("option",{value:"Virgin Islands, U.S."},"Virgin Islands, U.S."),l.a.createElement("option",{value:"Wallis and Futuna"},"Wallis and Futuna"),l.a.createElement("option",{value:"Western Sahara"},"Western Sahara"),l.a.createElement("option",{value:"Yemen"},"Yemen"),l.a.createElement("option",{value:"Zambia"},"Zambia"),l.a.createElement("option",{value:"Zimbabwe"},"Zimbabwe")),l.a.createElement("p",null,"State"),l.a.createElement("select",{name:"state",onChange:i},l.a.createElement("option",{value:"AL"},"Alabama"),l.a.createElement("option",{value:"AK"},"Alaska"),l.a.createElement("option",{value:"AZ"},"Arizona"),l.a.createElement("option",{value:"AR"},"Arkansas"),l.a.createElement("option",{value:"CA"},"California"),l.a.createElement("option",{value:"CO"},"Colorado"),l.a.createElement("option",{value:"CT"},"Connecticut"),l.a.createElement("option",{value:"DE"},"Delaware"),l.a.createElement("option",{value:"DC"},"District Of Columbia"),l.a.createElement("option",{value:"FL"},"Florida"),l.a.createElement("option",{value:"GA"},"Georgia"),l.a.createElement("option",{value:"HI"},"Hawaii"),l.a.createElement("option",{value:"ID"},"Idaho"),l.a.createElement("option",{value:"IL"},"Illinois"),l.a.createElement("option",{value:"IN"},"Indiana"),l.a.createElement("option",{value:"IA"},"Iowa"),l.a.createElement("option",{value:"KS"},"Kansas"),l.a.createElement("option",{value:"KY"},"Kentucky"),l.a.createElement("option",{value:"LA"},"Louisiana"),l.a.createElement("option",{value:"ME"},"Maine"),l.a.createElement("option",{value:"MD"},"Maryland"),l.a.createElement("option",{value:"MA"},"Massachusetts"),l.a.createElement("option",{value:"MI"},"Michigan"),l.a.createElement("option",{value:"MN"},"Minnesota"),l.a.createElement("option",{value:"MS"},"Mississippi"),l.a.createElement("option",{value:"MO"},"Missouri"),l.a.createElement("option",{value:"MT"},"Montana"),l.a.createElement("option",{value:"NE"},"Nebraska"),l.a.createElement("option",{value:"NV"},"Nevada"),l.a.createElement("option",{value:"NH"},"New Hampshire"),l.a.createElement("option",{value:"NJ"},"New Jersey"),l.a.createElement("option",{value:"NM"},"New Mexico"),l.a.createElement("option",{value:"NY"},"New York"),l.a.createElement("option",{value:"NC"},"North Carolina"),l.a.createElement("option",{value:"ND"},"North Dakota"),l.a.createElement("option",{value:"OH"},"Ohio"),l.a.createElement("option",{value:"OK"},"Oklahoma"),l.a.createElement("option",{value:"OR"},"Oregon"),l.a.createElement("option",{value:"PA"},"Pennsylvania"),l.a.createElement("option",{value:"RI"},"Rhode Island"),l.a.createElement("option",{value:"SC"},"South Carolina"),l.a.createElement("option",{value:"SD"},"South Dakota"),l.a.createElement("option",{value:"TN"},"Tennessee"),l.a.createElement("option",{value:"TX"},"Texas"),l.a.createElement("option",{value:"UT"},"Utah"),l.a.createElement("option",{value:"VT"},"Vermont"),l.a.createElement("option",{value:"VA"},"Virginia"),l.a.createElement("option",{value:"WA"},"Washington"),l.a.createElement("option",{value:"WV"},"West Virginia"),l.a.createElement("option",{value:"WI"},"Wisconsin"),l.a.createElement("option",{value:"WY"},"Wyoming")),l.a.createElement("p",null,"Zip Code"),l.a.createElement("input",{name:"zipcode",onChange:i,placeholder:"Zip Code"})),l.a.createElement("div",{className:"right checkbox"},l.a.createElement("input",{type:"checkbox"}),l.a.createElement("span",null,"Billing address same as shipping")))),l.a.createElement(p.b,{to:"./complete"},l.a.createElement("button",{className:"button right"},"Place Order")))}t(35);function b(){return l.a.createElement("section",{id:"order-complete-page"},l.a.createElement("div",{className:"complete-title"},l.a.createElement("h2",null,"Order Complete")),l.a.createElement("h4",{className:"order-text center"},"Hooray! Way to order those products."),l.a.createElement("div",{className:"center"},l.a.createElement(p.b,{to:"./"},l.a.createElement("button",{className:"button"},"Go Home"))))}t(36);i.a.render(l.a.createElement(p.a,{basename:"/"},l.a.createElement((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:E}),l.a.createElement(c.a,{path:"/billing",component:h}),l.a.createElement(c.a,{path:"/complete",component:b})))}),null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fdc79b9f.chunk.js.map