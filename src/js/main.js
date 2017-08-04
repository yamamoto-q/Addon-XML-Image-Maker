(function($) {
  $(document).ready(function(){
    // ここに処理を記述
    console.log("ready");

    var iconFont = 'Questetra-Icon-Font-A';
    var lineHeight = 1.5;

    

    var canvases = [
    	{
    		id:"canvas-1200x630",
    		ctx:null,
    		size:{
    			width:1200,
    			height:630,
    			padding:60
    		},
    		viewSize:{
    			width:300,
    			height:157.5
    		},
    		withSub:1,
    		title:{
    			size:64
    		},
    		subTitle:{
    			size:46
    		},
    		subIcon:{
    			power:0.5
    		}
    	},
    	{
    		id:"canvas-600x315",
    		ctx:null,
    		size:{
    			width:600,
    			height:315,
    			padding:30
    		},
    		viewSize:{
    			width:300,
    			height:157.5
    		},
    		withSub:1,
    		title:{
    			size:32
    		},
    		subTitle:{
    			size:24
    		},
    		subIcon:{
    			power:0.5
    		}
    	},
    	{
    		id:"canvas-220x220",
    		ctx:null,
    		size:{
    			width:220,
    			height:220,
    			padding:20
    		},
    		viewSize:{
    			width:220,
    			height:220
    		},
    		withSub:0.9,
    		title:{
    			size:18
    		},
    		subTitle:{
    			size:12
    		},
    		subIcon:{
    			power:0.5
    		}
    	},
    	{
    		id:"canvas-32x32",
    		ctx:null,
    		size:{
    			width:32,
    			height:32,
    			padding:3
    		},
    		viewSize:{
    			width:32,
    			height:32
    		},
    		type:"icon",
    		title:{
    			size:0
    		},
    	}
    ];

    for (var i = 0; i < icons.length; i++) {
    	var icon = icons[i];
    	console.log(icon);
    	$(".icon-selector").each(function(index, el) {
    		$(this).append('<option value="' + icon.value + '" data-color="' + icon.color + '">' + icon.label + '</option>');
    	});
    }

    for (var i = canvases.length - 1; i >= 0; i--) {
    	console.log(canvases[i]);
    	
    	var c = document.getElementById(canvases[i].id);
    	var ctx = c.getContext('2d');
    	console.log(ctx);
    	console.log(canvases[i].ctx);
    	
    	canvases[i].ctx = ctx;

    	$("#" + canvases[i].id).css({
	    	width: canvases[i].viewSize.width,
	    	height: canvases[i].viewSize.height
	    });
    }

    var mainIcon;
    var subIcon;
    var title;
    var subTitle;
    var bgdolor = {};



    $('#bgcolor').change(function(event) {
    	onChangeBgColor();
    	redraw();
    });

    $('#main-icon').change(function(event) {
    	onMainIconChange();
    	redraw();
    });

    $('#sub-icon').change(function(event) {
    	onSubIconChange();
    	redraw();
    });

    $('#title').change(function(event) {
    	onTitleChange();
    	redraw();
    });

    $('#sub-title').change(function(event) {
    	onSubTitleChange();
    	redraw();
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    function onChangeBgColor(){
    	var selectVal = $('#bgcolor').val().split(',');
    	bgdolor = {
    		r:selectVal[0],
    		g:selectVal[1],
    		b:selectVal[2]
    	}
    };

    function onMainIconChange(){
    	mainIcon = $('#main-icon').val();
    	var colorStr = $("#main-icon option:selected").data('color');
    	if(colorStr && colorStr.length > 0){
    		$('#bgcolor').val(colorStr);
    		onChangeBgColor();
    	}
    }

    function onSubIconChange(){
    	subIcon = $('#sub-icon').val();
    }

    function onTitleChange(){
		title = $('#title').val();
    }

    function onSubTitleChange(){
    	subTitle = $('#sub-title').val();
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    function redraw(){
    	drawBg();
    	drawMainIcon();
    	drawSubIcon();
    	drawTitle();
    	drawSubTitle();
    }

    function calcSubTitlePos(camvasNum){
    	var size = canvases[camvasNum].subTitle.size;
    	var width = canvases[camvasNum].size.width;
    	var height = canvases[camvasNum].size.height;
    	var padding = canvases[camvasNum].size.padding;

    	if(subTitle && subTitle.length != 0){
    		return calcFontXY(size, width / 2 + size / 2, height - padding - size / 2);
    	}
    	return false;
    }

    function calcTitlePos(camvasNum){
    	var size = canvases[camvasNum].title.size;
    	var width = canvases[camvasNum].size.width;
    	var height = canvases[camvasNum].size.height;
    	var padding = canvases[camvasNum].size.padding;
    	var subTitleSize = canvases[camvasNum].subTitle.size;
    	
    	var fontPos = calcFontXY(size, width / 2 + size / 2, height - padding - size / 2);
    	if(subTitle && subTitle.length != 0){
    		fontPos.y -= subTitleSize * lineHeight;
    	}
    	return fontPos;
    };

    function calcSubIcon(camvasNum){
    	var width = canvases[camvasNum].size.width;
    	var height = canvases[camvasNum].size.height;
    	var padding = canvases[camvasNum].size.padding;
    	var titleSize = canvases[camvasNum].title.size;
    	var subTitleSize = canvases[camvasNum].subTitle.size;
    	var power = canvases[camvasNum].subIcon.power;

    	var bottom = height - padding;
    	var right = width - padding; // 両端パターン
    	if(height * 1.618 < width){
    		right = height * 1.618; // 黄金比パターン
    	}


    	if(subTitle && subTitle.length != 0){
    		bottom -= subTitleSize;
    	}
    	if(title && title.length != 0){
    		bottom -= titleSize * lineHeight;
    	}
    	if(title && title.length != 0 || subTitle && subTitle.length != 0){
    		bottom -= padding / 2;
    		right = (width / 2) + height / 2 - padding; // 内部正方形パターン
    	}

    	var maxHeight = bottom - padding;
    	var fontSize = maxHeight * power;

    	var centerX = right - (fontSize / 2);
    	var centerY = bottom - (fontSize / 2);

    	var fontPos = calcFontXY(fontSize, centerX, centerY);

    	return {
    		x:fontPos.x,
    		y:fontPos.y,
    		size:fontSize,
    		centerX:centerX,
    		centerY:centerY
    	}

    }

    function calcMainIcon(camvasNum){
    	var width = canvases[camvasNum].size.width;
    	var height = canvases[camvasNum].size.height;
    	var padding = canvases[camvasNum].size.padding;
    	var titleSize = canvases[camvasNum].title.size;
    	var subTitleSize = canvases[camvasNum].subTitle.size;
    	var withSubTitle = canvases[camvasNum].withSub;

    	var top = padding;

    	var maxHeight = height - padding - padding;
		var left = padding;
    	if(width - height * 1.618 > 0){
    		left = width - height * 1.618;
    	}
		if(subTitle && subTitle.length != 0){
    		maxHeight -= subTitleSize;
    	}
    	if(title && title.length != 0){
    		maxHeight -= titleSize * lineHeight;
    	}
    	if(title && title.length != 0 || subTitle && subTitle.length != 0){
    		maxHeight -= padding / 2;
    		left = (width / 2) - height / 2 + padding; // 内部正方形パターン
    	}


    	if(subIcon && subIcon != 'none'){
    		maxHeight = maxHeight * withSubTitle;
    	}
    	 
    	var x = left + maxHeight / 2;

    	if(!subIcon || subIcon == 'none'){
    		x = width / 2;
    	}

    	var fontPos = calcFontXY(maxHeight, x, top + maxHeight / 2);
    	
    	return {
    		x:fontPos.x,
    		y:fontPos.y,
    		size:maxHeight
    	}
    }

    function drawBg(){
    	for (var i = canvases.length - 1; i >= 0; i--) {
    		var ctx = canvases[i].ctx;
    		ctx.fillStyle = 'rgb(' + bgdolor.r + ', ' + bgdolor.g + ', ' + bgdolor.b + ')';

    		//console.log(canvases[i].type);
    		if(canvases[i].type && canvases[i].type == "icon"){
    			console.log(canvases[i].type);
    			ctx.beginPath();
    			ctx.arc(canvases[i].size.width / 2, canvases[i].size.height / 2, Math.round(canvases[i].size.width / 2) - 1, 0, Math.PI*2, true);
    			ctx.fill();

    		}else{
    			ctx.fillRect(0, 0, canvases[i].size.width, canvases[i].size.height);
    		}
    	}
    }

    /**
     * Fontのサイズとセンター位置を指定してFont描画位置を計算
     **/
    function calcFontXY(size, x, y){
    	return {
    		x: Math.round(x - size / 2),
    		y: Math.round(y + (size * 0.87) / 2)
    	}
    }

    function drawMainIcon(){
    	for (var i = canvases.length - 1; i >= 0; i--) {

    		var ctx = canvases[i].ctx;
    		ctx.textAlign = "start";
    		ctx.fillStyle = 'rgb(256, 256, 256)';

    		var workAreaWidth = canvases[i].size.width - canvases[i].size.padding * 2;
    		var workAreaHeight = canvases[i].size.height - canvases[i].size.padding * 2;

    		if(canvases[i].type && canvases[i].type == "icon"){
    			var fontSize = Math.round(workAreaHeight * 0.8 * 0.5) * 2 - 1;
				var fontPos = calcFontXY(fontSize, canvases[i].size.width / 2, canvases[i].size.height / 2);

				

				ctx.font = fontSize + "px '" + iconFont  + "'";
				ctx.fillText(mainIcon, fontPos.x * 0.90, fontPos.y);

    		}else{
    			var fontPos = calcMainIcon(i);
    			ctx.font = fontPos.size + "px '" + iconFont  + "'";
    			/*
    			ctx.fillStyle = 'rgb(' + Math.round(bgdolor.r * 0.8) + ', ' + Math.round(bgdolor.g * 0.8) + ', ' + Math.round(bgdolor.b * 0.8) + ')';
    			for(var ii = 0; ii < 100; ii++){

    				ctx.fillText(mainIcon, fontPos.x + ii, fontPos.y + ii);
				}
				*/
				ctx.fillStyle = 'rgb(256, 256, 256)';
				ctx.fillText(mainIcon, fontPos.x, fontPos.y);
    		}
    	}
    }

    function drawSubIcon(){
    	for (var i = canvases.length - 1; i >= 0; i--) {
    		var ctx = canvases[i].ctx;

    		var workAreaWidth = canvases[i].size.width - canvases[i].size.padding * 2;
    		var workAreaHeight = canvases[i].size.height - canvases[i].size.padding * 2;

    		if(canvases[i].type && canvases[i].type == "icon"){
    			// なにもしない
    		}else{
    			if(subIcon && subIcon != 'none'){

    				var fontPos = calcSubIcon(i);
					ctx.font = fontPos.size + "px '" + iconFont  + "'";
		    		ctx.textAlign = "start";
		    		ctx.fillStyle = 'rgb(' + bgdolor.r + ', ' + bgdolor.g + ', ' + bgdolor.b + ')';

					for(var ii = 0; ii < 360; ii += 10){
						var _radian = Math.PI / 180 * ii;
						var _x = Math.cos(_radian) * fontPos.size * 0.075;
						var _y = Math.sin(_radian) * fontPos.size * 0.075;
						console.log(_x, _y);
						ctx.fillText(subIcon, fontPos.x + _x, fontPos.y + _y);
					}

		    		ctx.fillStyle = 'rgb(256, 256, 256)';

					ctx.fillText(subIcon, fontPos.x, fontPos.y);
					
    			}
    		}
    	}
    }

    function drawTitle(){
    	var f = 'arial, helvetica, clean, sans-serif';
    	for (var i = canvases.length - 1; i >= 0; i--) {
    		if(canvases[i].type && canvases[i].type == "icon"){
    		}else{
	    		var ctx = canvases[i].ctx;
	    		if(title && title.length != 0){
	    			ctx.font = 'bold ' + canvases[i].title.size + "px '" + f  + "'";
	    			ctx.fillStyle = 'rgb(256, 256, 256)';
	    			ctx.textAlign = "center";
	    			var fontPos = calcTitlePos(i);

	    			ctx.fillText(title, fontPos.x, fontPos.y);
	    		}
    		}
    	}
    }

    function drawSubTitle(){
    	var f = 'arial, helvetica, clean, sans-serif';
    	for (var i = canvases.length - 1; i >= 0; i--) {
    		if(canvases[i].type && canvases[i].type == "icon"){
    		}else{
	    		var ctx = canvases[i].ctx;
	    		if(subTitle && subTitle.length != 0){
	    			ctx.font = canvases[i].subTitle.size + "px '" + f  + "'";
	    			ctx.fillStyle = 'rgb(256, 256, 256)';
	    			ctx.textAlign = "center";

	    			var fontPos = calcSubTitlePos(i);

	    			ctx.fillText(subTitle, fontPos.x, fontPos.y);
	    		}
    		}
    	}
    }

    /*
    syncCamvasSize();
    */
    onChangeBgColor();
    onMainIconChange();
    onTitleChange();
    drawSubTitle();
    redraw();
  });
})(window.jQuery);