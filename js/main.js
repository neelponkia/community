$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: true,
		lockAnchors: false,
		// anchors:['Home', 'About Us', 'Advantages', 'Projects', 'Contact Us'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'About Us', 'Advantages', 'Projects', 'Contact Us'],
		// scrollingSpeed: 5000,

		afterLoad: function(anchorLink, index){
			console.log(index, anchorLink);
			// startRotation();
			curr = index;
			// console.log(curr);
			// next = nextIndex;
			// diff = next-curr;
			// var l1, l2, l3;
			switch(index){
				case 1 : 
					// $('.scroll_line .scroll_text').animate({'bottom': '50em'}, 5000);
					break;
				case 2 :
					$('#aboutus_line').animate({left: '0em'}, 1000);
						$('#aboutus_header').animate({opacity: 1}, 1000, function() {
							$('.aboutus_content').animate({opacity: 1}, 700, function() {
								$('.readmore_button').animate({opacity: 1}, 500);
							});
							
						}); 
						// $('#aboutus_header').animate({opacity: 1}, 1000, function);	
					break;
				case 3 : 
					$('#advantage_line').animate({left: '0em'}, 1000);
						$('#advantage_header').animate({opacity: 1}, 1000, function () {
							$('#advantage-box1').animate({opacity: 1}, 500, function () {
							$('#advantage-box2').animate({opacity: 1}, 500, function () {
							$('#advantage-box3').animate({opacity: 1}, 500, function () {
							$('#advantage-box4').animate({opacity: 1}, 500, function () {
							$('#advantage-box5').animate({opacity: 1}, 500, function () {
							$('#advantage-box6').animate({opacity: 1}, 500, function () {
								
							});});});});});});
						});
					break;
				case 4 :
					$('#project_line').animate({left: '0em'}, 1000);
						$('#project_header').animate({opacity: 1}, 1000, function () {
							$('#project-box1').animate({opacity: 1}, 500, function () {
							$('#project-box2').animate({opacity: 1}, 500, function () {
							$('#project-box3').animate({opacity: 1}, 500, function () {
							$('#project-button').animate({opacity: 1}, 500, function () {
							
							});});});});
						});
					break;
				case 5 :
					$('#contact_line').animate({left: '0em'}, 1000);
						$('#contact_header').animate({opacity: 1}, 1000, function () {
							$('.contact-address').animate({opacity: 1}, 500, function () {
							$('.contact-no').animate({opacity: 1}, 500, function () {
								
							});});
						});
					break;
				}
			}

			// onLeave: function
	});
	// $.fn.fullpage.setScrollingSpeed(7000);
	
});

// $('#fullpage').fullpage({
//     	scrollOverflowOptions: {
// 	         click: true
// 	    },
// 	    scrollOverflow: true,
// 		scrollDelay: 1000,
// 		'navigation': true,
// 		'navigationPosition': 'right',
// 		'navigationColor' : '#fff',
// 		'navigationTooltips': ['ONCE UPON A TIME', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
// 		anchors: ['intro', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
// 		onLeave: function(index, nextIndex, direction){
// 			console.log(index, nextIndex, direction);
// 			// startRotation();
// 			curr = index;
// 			next = nextIndex;
// 			diff = next-curr;
// 			var l1, l2, l3;
// 			switch(next){
// 				case 1 : 
// 					tlItems.tweenFromTo("start", "enter12");
// 					tl.tweenTo("enter1").duration(1);	
// 					break;
// 				case 2 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter21");
// 					l3 = tlItems.getLabelTime("enter22");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter2").duration(1);	
// 					break;
// 				case 3 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter31");
// 					l3 = tlItems.getLabelTime("enter36");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter3").duration(1);	
// 					break;
// 				case 4 :
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter41");
// 					l3 = tlItems.getLabelTime("enter43");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter4").duration(1);	
// 					break;
// 				case 5 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter51");
					
// 					l3 = tlItems.getLabelTime("enter52");	
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter5").duration(1);	
// 					break;
// 				case 6 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter61");
// 					l3 = tlItems.getLabelTime("enter63");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter6").duration(1);	
// 					break;
// 				case 7 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter71");
// 					l3 = tlItems.getLabelTime("enter74");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter7").duration(1);	
// 					break;
// 				case 8 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter81");
// 					l3 = tlItems.getLabelTime("enter82");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter8").duration(1);	
// 					break;
// 				case 9 : 
// 					l1 = tlItems.time();
// 					l2 = tlItems.getLabelTime("enter91");
// 					l3 = tlItems.getLabelTime("enter93");	
					
// 					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
// 					function playSlide(){
// 						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
// 					}
// 					tl.tweenTo("enter9").duration(1);	
// 					break;					
// 			}
// 		}
// 	})