!function(e){e(document).ready(function(){function i(){var i=e("#bgcolor").val().split(",");m={r:i[0],g:i[1],b:i[2]}}function t(){x=e("#main-icon").val();var t=e("#main-icon option:selected").data("color");t&&t.length>0&&(e("#bgcolor").val(t),i())}function n(){b=e("#sub-icon").val()}function l(){w=e("#title").val()}function o(){y=e("#sub-title").val()}function a(e){var i=I[e].subTitle.size,t=I[e].size.width,n=I[e].size.height,l=I[e].size.padding;return!(!y||0==y.length)&&r(i,t/2+i/2,n-l-i/2)}function h(e){var i=I[e].title.size,t=I[e].size.width,n=I[e].size.height,l=I[e].size.padding,o=I[e].subTitle.size,a=r(i,t/2+i/2,n-l-i/2);return y&&0!=y.length&&(a.y-=o*T),a}function s(e){var i=I[e].size.width,t=I[e].size.height,n=I[e].size.padding,l=I[e].title.size,o=I[e].subTitle.size,a=I[e].subIcon.power,h=t-n,s=i-n;1.618*t<i&&(s=1.618*t),y&&0!=y.length&&(h-=o),w&&0!=w.length&&(h-=l*T),(w&&0!=w.length||y&&0!=y.length)&&(h-=n/2,s=i/2+t/2-n);var c=(h-n)*a,g=s-c/2,d=h-c/2,u=r(c,g,d);return{x:u.x,y:u.y,size:c,centerX:g,centerY:d}}function c(e){var i=I[e].size.width,t=I[e].size.height,n=I[e].size.padding,l=I[e].title.size,o=I[e].subTitle.size,a=I[e].withSub,h=n,s=t-n-n,c=n;i-1.618*t>0&&(c=i-1.618*t),y&&0!=y.length&&(s-=o),w&&0!=w.length&&(s-=l*T),(w&&0!=w.length||y&&0!=y.length)&&(s-=n/2,c=i/2-t/2+n),b&&"none"!=b&&(s*=a);var g=c+s/2;b&&"none"!=b||(g=i/2);var d=r(s,g,h+s/2);return{x:d.x,y:d.y,size:s}}function r(e,i,t){return{x:Math.round(i-e/2),y:Math.round(t+.87*e/2)}}function g(){d(),u(),f(),z(),v(),p()}function d(){for(var e=I.length-1;e>=0;e--)I[e].ctx.clearRect(0,0,I[e].size.width,I[e].size.height)}function u(){for(var e=I.length-1;e>=0;e--){var i=I[e].ctx;i.fillStyle="rgb("+m.r+", "+m.g+", "+m.b+")",I[e].type&&"icon"==I[e].type?(console.log(I[e].type),i.beginPath(),i.arc(I[e].size.width/2,I[e].size.height/2,Math.round(I[e].size.width/2)-1,0,2*Math.PI,!0),i.fill()):i.fillRect(0,0,I[e].size.width,I[e].size.height)}}function f(){for(var i=I.length-1;i>=0;i--){var t=I[i].ctx;t.textAlign="start",t.fillStyle="rgb(256, 256, 256)";I[i].size.width,I[i].size.padding;var n=I[i].size.height-2*I[i].size.padding;if(I[i].type&&"icon"==I[i].type){var l=2*Math.round(.8*n*.5)-1,o=r(l,I[i].size.width/2,I[i].size.height/2);t.font=l+"px '"+S+"'",t.fillText(x,.9*o.x,o.y);var a=document.getElementById("canvas-32x32").toDataURL("image/png").replace("data:image/png;base64,","");console.log(a),e("#base64").val(a)}else{o=c(i);t.font=o.size+"px '"+S+"'",t.fillStyle="rgb(256, 256, 256)",t.fillText(x,o.x,o.y)}}}function z(){for(var e=I.length-1;e>=0;e--){var i=I[e].ctx;I[e].size.width,I[e].size.padding,I[e].size.height,I[e].size.padding;if(I[e].type&&"icon"==I[e].type);else if(b&&"none"!=b){var t=s(e);i.font=t.size+"px '"+S+"'",i.textAlign="start",i.fillStyle="rgb("+m.r+", "+m.g+", "+m.b+")";for(var n=0;n<360;n+=10){var l=Math.PI/180*n,o=Math.cos(l)*t.size*.075,a=Math.sin(l)*t.size*.075;console.log(o,a),i.fillText(b,t.x+o,t.y+a)}i.fillStyle="rgb(256, 256, 256)",i.fillText(b,t.x,t.y)}}}function v(){for(var e=I.length-1;e>=0;e--)if(I[e].type&&"icon"==I[e].type);else{var i=I[e].ctx;if(w&&0!=w.length){i.font=I[e].title.size+"px 'noto-b'",i.fillStyle="rgb(256, 256, 256)",i.textAlign="center";var t=h(e);i.fillText(w,t.x,t.y)}}}function p(){for(var e=I.length-1;e>=0;e--)if(I[e].type&&"icon"==I[e].type);else{var i=I[e].ctx;if(y&&0!=y.length){i.font=I[e].subTitle.size+"px 'noto'",i.fillStyle="rgb(256, 256, 256)",i.textAlign="center";var t=a(e);i.fillText(y,t.x,t.y)}}}console.log("ready");for(var x,b,w,y,S="Questetra-Icon-Font-A",T=1.5,m={},I=[{id:"canvas-1200x630",ctx:null,size:{width:1200,height:630,padding:60},viewSize:{width:300,height:157.5},withSub:1,title:{size:64},subTitle:{size:46},subIcon:{power:.5}},{id:"canvas-600x315",ctx:null,size:{width:600,height:315,padding:30},viewSize:{width:300,height:157.5},withSub:1,title:{size:32},subTitle:{size:24},subIcon:{power:.5}},{id:"canvas-220x220",ctx:null,size:{width:220,height:220,padding:20},viewSize:{width:220,height:220},withSub:.9,title:{size:18},subTitle:{size:12},subIcon:{power:.5}},{id:"canvas-32x32",ctx:null,size:{width:32,height:32,padding:3},viewSize:{width:32,height:32},type:"icon",title:{size:0}}],M=0;M<icons.length;M++){var A=icons[M];e(".icon-selector").each(function(i,t){e(this).append('<option value="'+A.value+'" data-color="'+A.color+'">'+A.label+"</option>")})}e("#main-icon option:eq(0)").attr("selected",!0);for(M=I.length-1;M>=0;M--){console.log(I[M]);var P=document.getElementById(I[M].id).getContext("2d");I[M].ctx=P,e("#"+I[M].id).css({width:I[M].viewSize.width,height:I[M].viewSize.height})}e("#bgcolor").change(function(e){i(),g()}),e("#main-icon").change(function(e){t(),g()}),e("#sub-icon").change(function(e){n(),g()}),e("#title").change(function(e){l(),g()}),e("#sub-title").change(function(e){o(),g()}),i(),t(),l(),p(),g()})}(window.jQuery);