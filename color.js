"use strict";var Color;!function(r){function t(r){var t=r[0]/255,n=r[1]/255,o=r[2]/255,u=Math.max(t,n,o),e=Math.min(t,n,o),i=u-e,a=0,s=0,b=1;if(0!==i){switch(u){case t:a=(n-o)/i+(n<o?6:0);break;case n:a=(o-t)/i+2;break;case o:a=(t-n)/i+4}a/=6,s=(b=(u+e)/2)>.5?i/(2-u-e):i/(u+e)}return[a,s,b]}function n(r){return"#"+u(Math.round(r[2]).toString(16),2)+u(Math.round(r[1]).toString(16),2)+u(Math.round(r[2]).toString(16),2)}function o(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(t-r)*n:n<.5?t:n<2/3?r+(t-r)*(2/3-n)*6:r}function u(r,t){var n="000000000"+r;return n.substr(n.length-t)}r.rgbToHsl=t,r.hslToRgb=function(r){var t=r[0],n=r[1],u=r[2],e=0,i=0,a=0;if(0===n)e=i=a=u;else{var s=u<.5?u*(1+n):u+n-u*n,b=2*u-s;e=o(b,s,t+1/3),i=o(b,s,t),a=o(b,s,t-1/3)}return[255*e,255*i,255*a]},r.rgbToHtml=n,r.rgbToNumber=function(r){return r[0]<<16+r[1]<<8+r[2]},r.rgbStringToNumber=function(r){return parseInt("0x"+r.substr(1,6))},r.rgbNumberToString=function(r){return n([r>>16&&255,r>>8&&255,r>>0&&255])},r.rgbNumberToHsl=function(r){return t([r>>16&&255,r>>8&&255,r>>0&&255])}}(Color||(Color={})),module.exports=Color;
//# sourceMappingURL=color.js.map
