!function(e){e(document).ready(function(){function i(){var i=e("#bgcolor").val().split(",");T={r:i[0],g:i[1],b:i[2]}}function t(){p=e("#main-icon").val();var t=e("#main-icon option:selected").data("color");t&&t.length>0&&(e("#bgcolor").val(t),i())}function n(){x=e("#sub-icon").val()}function l(){b=e("#title").val()}function o(){w=e("#sub-title").val()}function a(e){var i=m[e].subTitle.size,t=m[e].size.width,n=m[e].size.height,l=m[e].size.padding;return!(!w||0==w.length)&&g(i,t/2+i/2,n-l-i/2)}function s(e){var i=m[e].title.size,t=m[e].size.width,n=m[e].size.height,l=m[e].size.padding,o=m[e].subTitle.size,a=g(i,t/2+i/2,n-l-i/2);return w&&0!=w.length&&(a.y-=o*S),a}function h(e){var i=m[e].size.width,t=m[e].size.height,n=m[e].size.padding,l=m[e].title.size,o=m[e].subTitle.size,a=m[e].subIcon.power,s=t-n,h=i-n;1.618*t<i&&(h=1.618*t),w&&0!=w.length&&(s-=o),b&&0!=b.length&&(s-=l*S),(b&&0!=b.length||w&&0!=w.length)&&(s-=n/2,h=i/2+t/2-n);var c=(s-n)*a,r=h-c/2,d=s-c/2,u=g(c,r,d);return{x:u.x,y:u.y,size:c,centerX:r,centerY:d}}function c(e){var i=m[e].size.width,t=m[e].size.height,n=m[e].size.padding,l=m[e].title.size,o=m[e].subTitle.size,a=m[e].withSub,s=n,h=t-n-n,c=n;i-1.618*t>0&&(c=i-1.618*t),w&&0!=w.length&&(h-=o),b&&0!=b.length&&(h-=l*S),(b&&0!=b.length||w&&0!=w.length)&&(h-=n/2,c=i/2-t/2+n),x&&"none"!=x&&(h*=a);var r=c+h/2;x&&"none"!=x||(r=i/2);var d=g(h,r,s+h/2);return{x:d.x,y:d.y,size:h}}function g(e,i,t){return{x:Math.round(i-e/2),y:Math.round(t+.87*e/2)}}function r(){d(),u(),f(),z(),v()}function d(){for(var e=m.length-1;e>=0;e--){var i=m[e].ctx;i.fillStyle="rgb("+T.r+", "+T.g+", "+T.b+")",m[e].type&&"icon"==m[e].type?(console.log(m[e].type),i.beginPath(),i.arc(m[e].size.width/2,m[e].size.height/2,Math.round(m[e].size.width/2)-1,0,2*Math.PI,!0),i.fill()):i.fillRect(0,0,m[e].size.width,m[e].size.height)}}function u(){for(var i=m.length-1;i>=0;i--){var t=m[i].ctx;t.textAlign="start",t.fillStyle="rgb(256, 256, 256)";m[i].size.width,m[i].size.padding;var n=m[i].size.height-2*m[i].size.padding;if(m[i].type&&"icon"==m[i].type){var l=2*Math.round(.8*n*.5)-1,o=g(l,m[i].size.width/2,m[i].size.height/2);t.font=l+"px '"+y+"'",t.fillText(p,.9*o.x,o.y);var a=document.getElementById("canvas-32x32").toDataURL("image/png").replace("data:image/png;base64,","");console.log(a),e("#base64").val(a)}else{o=c(i);t.font=o.size+"px '"+y+"'",t.fillStyle="rgb(256, 256, 256)",t.fillText(p,o.x,o.y)}}}function f(){for(var e=m.length-1;e>=0;e--){var i=m[e].ctx;m[e].size.width,m[e].size.padding,m[e].size.height,m[e].size.padding;if(m[e].type&&"icon"==m[e].type);else if(x&&"none"!=x){var t=h(e);i.font=t.size+"px '"+y+"'",i.textAlign="start",i.fillStyle="rgb("+T.r+", "+T.g+", "+T.b+")";for(var n=0;n<360;n+=10){var l=Math.PI/180*n,o=Math.cos(l)*t.size*.075,a=Math.sin(l)*t.size*.075;console.log(o,a),i.fillText(x,t.x+o,t.y+a)}i.fillStyle="rgb(256, 256, 256)",i.fillText(x,t.x,t.y)}}}function z(){for(var e=m.length-1;e>=0;e--)if(m[e].type&&"icon"==m[e].type);else{var i=m[e].ctx;if(b&&0!=b.length){i.font=m[e].title.size+"px 'noto-b'",i.fillStyle="rgb(256, 256, 256)",i.textAlign="center";var t=s(e);i.fillText(b,t.x,t.y)}}}function v(){for(var e=m.length-1;e>=0;e--)if(m[e].type&&"icon"==m[e].type);else{var i=m[e].ctx;if(w&&0!=w.length){i.font=m[e].subTitle.size+"px 'noto'",i.fillStyle="rgb(256, 256, 256)",i.textAlign="center";var t=a(e);i.fillText(w,t.x,t.y)}}}console.log("ready");for(var p,x,b,w,y="Questetra-Icon-Font-A",S=1.5,T={},m=[{id:"canvas-1200x630",ctx:null,size:{width:1200,height:630,padding:60},viewSize:{width:300,height:157.5},withSub:1,title:{size:64},subTitle:{size:46},subIcon:{power:.5}},{id:"canvas-600x315",ctx:null,size:{width:600,height:315,padding:30},viewSize:{width:300,height:157.5},withSub:1,title:{size:32},subTitle:{size:24},subIcon:{power:.5}},{id:"canvas-220x220",ctx:null,size:{width:220,height:220,padding:20},viewSize:{width:220,height:220},withSub:.9,title:{size:18},subTitle:{size:12},subIcon:{power:.5}},{id:"canvas-32x32",ctx:null,size:{width:32,height:32,padding:3},viewSize:{width:32,height:32},type:"icon",title:{size:0}}],I=0;I<icons.length;I++){var M=icons[I];e(".icon-selector").each(function(i,t){e(this).append('<option value="'+M.value+'" data-color="'+M.color+'">'+M.label+"</option>")})}e("#main-icon option:eq(0)").attr("selected",!0);for(I=m.length-1;I>=0;I--){console.log(m[I]);var A=document.getElementById(m[I].id).getContext("2d");m[I].ctx=A,e("#"+m[I].id).css({width:m[I].viewSize.width,height:m[I].viewSize.height})}e("#bgcolor").change(function(e){i(),r()}),e("#main-icon").change(function(e){t(),r()}),e("#sub-icon").change(function(e){n(),r()}),e("#title").change(function(e){l(),r()}),e("#sub-title").change(function(e){o(),r()}),i(),t(),l(),v(),r()})}(window.jQuery);