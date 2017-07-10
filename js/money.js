$("#begin").click(function(){
	$("#back").show();
	$("#page1").show();
	$("#biao").css("display","block");
	$("#shadow").show();
})
$("#back").click(function(){
	$("#back").hide();
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	$("#page5").hide();
	$("#shadow").hide();
})
$("#btn1").click(function(){
	$("#back").show();
	$("#page2").show();
	$("#biao2").css("display","block");
	$("#shadow").show();
})
$("#btn2").click(function(){
	$("#back").show();
	$("#page3").show();
	$("#biao3").css("display","block");
	$("#shadow").show();
})
$("#btn3").click(function(){
	$("#back").show();
	$("#page4").show();
	$("#biao4").css("display","block");
	$("#shadow").show();
})
$("#btn4").click(function(){
	$("#back").show();
	$("#page5").show();
	$("#biao5").css("display","block");
	$("#shadow").show();
})
$("#tijiao").click(function(){
	$("#big").hide();
	$("#big2").show();
	$("#shadow").hide();
	$("#beijin").attr('src','img/背景2.png')
})
var num=0;
var timer=setInterval(function(){
	num++;
	if (num>3) {
		$("#tip>ul").css("left","0");
		num=0;
	}else{
		$("#tip>ul").animate({"left": "-="+$('#wid').width()}, "slow");
	};    
},2000);
timer;

var numt=0;
touch.on("#yibai2","swipeup",function(){
	$("#yibai2").addClass("yibaiact");	
	$("#yibai3").removeClass("yibaiact");
	$("#yibai3").addClass("yibaiact2");
	$("#yibai2").removeClass("yibaiact2");

	$("#shou").css("display","none");
	numt++;
	console.log(numt);
	$("#bai").html(parseInt(numt/100));
    $("#shi").html(parseInt(numt/10));
    $("#ge").html(numt%10);

    //第三页结果
    $("#end1").html("￥"+numt*100);
    if (numt>40) {
    	$("#end2").html("没办法！你已经强到没对手了");
    }else{
    	$("#end2").html("你太客气了，这不是你的挑战极限吧");
    }
    $("#end3").html("我的辉煌战绩:￥"+numt*100+"当前排名:"+numt+"位");

    if (numt==1) {
		var nums=20;
		var timed=setInterval(function(){
		    nums--;
		    if (nums==0) {
		    	clearInterval(timed);
		    	// 切换场景三
		    	$("#big2").hide();
				$("#big3").show();
				$("#beijin").attr('src','img/背景3.png')
		    };
		    // console.log(nums);
		    $("#daojishi").html(nums);   
		},100);
	};
})
touch.on("#yibai3","swipeup",function(){
	$("#yibai2").removeClass("yibaiact");
	$("#yibai3").addClass("yibaiact");
	$("#yibai2").addClass("yibaiact2");
	$("#yibai3").removeClass("yibaiact2");

	$("#shou").css("display","none");
	numt++;
	// console.log(numt);
	$("#bai").html(parseInt(numt/100));
    $("#shi").html(parseInt(numt/10));
    $("#ge").html(numt%10);
    
    //第三页结果
    $("#end1").html("￥"+numt*100);
    if (numt>40) {
    	$("#end2").html("没办法！你已经强到没对手了");
    }else{
    	$("#end2").html("你太客气了，这不是你的挑战极限吧");
    }
    $("#end3").html("我的辉煌战绩:￥"+numt*100+"当前排名:"+numt+"位");

    if (numt==1) {
		var nums=20;
		var timed=setInterval(function(){
		    nums--;
		    if (nums==0) {
		    	clearInterval(timed);
		    	// 切换场景三
		    	$("#big2").hide();
				$("#big3").show();
				$("#beijin").attr('src','img/背景3.png')
		    };
		    // console.log(nums);
		    $("#daojishi").html(nums);   
		},100);
	};
})

//第三页
$("#zailai").click(function(){
	numt=0;
	$("#yibai2").removeClass("yibaiact");	
	$("#yibai3").removeClass("yibaiact");
	$("#yibai3").removeClass("yibaiact2");
	$("#yibai2").removeClass("yibaiact2");
	$("#daojishi").html(20); 
	$("#bai").html(0);
    $("#shi").html(0);
    $("#ge").html(0);
	$("#big3").hide();
	$("#big").show();
	$("#beijin").attr('src','img/背景.png')
})
$("#fenxiang").click(function(){
	$("#shadow2").show();
})
$("#shadow2").click(function(){
	$("#shadow2").hide();
})





	
	


