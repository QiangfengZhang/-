/**
 *	
 *	轮播图的实现
 *	张强锋编写，2017.04.10
 *	 
 */

window.onload = function() {
	// 获取DOM节点
	var banner = document.querySelector('.banner'),
		imgs = document.querySelector('.bannerPic');
	// 获取导航圆点
	var dots = document.querySelector('.bannerDot')
	var pic1 = dots.children[0],
		pic2 = dots.children[1],
		pic3 = dots.children[2],
		pic4 = dots.children[3],
		pic5 = dots.children[4];

	// 导航圆点样式事件
	function clearDot(picChoose) {
		// 清空className current
		for (var i = 0; i < dots.children.length; i++) {
			dots.children[i].className = " ";
		}
		// 为当前选中的添加className
		picChoose.className = "current";
	}

	// 导航圆点单击事件
	function picOnclick(pic, marginLeft) {
		pic.onclick = function() {
			target = marginLeft;
			clearDot(this);
		}
	}

	// 为每个圆点绑定 onclick 事件
	picOnclick(pic1, 0);
	picOnclick(pic2, -1226);
	picOnclick(pic3, -2452);
	picOnclick(pic4, -3678);
	picOnclick(pic5, -4904);

	// 缓冲动画及无限轮播效果
	var target = 0;
	setInterval(function() {
		if (target < -4904) {
			target = 0;
		}else {
			imgs.style.marginLeft = target + 'px';
		}
		// 导航圆点跟随图片
		switch (target) {
			case 0: clearDot(pic1);
					break;
			case -1226: clearDot(pic2);
					break;
			case -2452: clearDot(pic3);
					break;
			case -3678: clearDot(pic4);
					break;
			case -4904: clearDot(pic5);
					break;

		}
	}, 20);

	// 自动轮播
	function autoPlay() {
		target -= 1226;
	}

	var timer = setInterval(autoPlay, 2500);
	// 鼠标移到轮播图上，停止轮播
	banner.onmouseover = function() {
		clearInterval(timer);
	}
	// 鼠标移开轮播图，开始轮播
	banner.onmouseout = function() {
		timer = setInterval(autoPlay, 2500);
	}
}