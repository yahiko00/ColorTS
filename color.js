"use strict";var Color;!function(r){function t(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(t-r)*n:n<.5?t:n<2/3?r+(t-r)*(2/3-n)*6:r}function n(r,t){var n="000000000"+r;return n.substr(n.length-t)}r.rgbToHsl=function(r){var t=r[0]/255,n=r[1]/255,o=r[2]/255,e=Math.max(t,n,o),u=Math.min(t,n,o),a=0,i=0,s=(e+u)/2;if(e===u)a=i=0;else{var c=e-u;switch(i=s>.5?c/(2-e-u):c/(e+u),e){case t:a=(n-o)/c+(n<o?6:0);break;case n:a=(o-t)/c+2;break;case o:a=(t-n)/c+4}a/=6}return[a,i,s]},r.hslToRgb=function(r){var n=r[0],o=r[1],e=r[2],u=0,a=0,i=0;if(0===o)u=a=i=e;else{var s=e<.5?e*(1+o):e+o-e*o,c=2*e-s;u=t(c,s,n+1/3),a=t(c,s,n),i=t(c,s,n-1/3)}return[255*u,255*a,255*i]},r.rgbToHtml=function(r){return"#"+n(Math.round(r[0]).toString(16),2)+n(Math.round(r[1]).toString(16),2)+n(Math.round(r[2]).toString(16),2)},r.rgbToNumber=function(r){return r[0]<<16+r[1]<<8+r[2]}}(Color||(Color={})),module.exports=Color;