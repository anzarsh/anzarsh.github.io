$(function() {


	if($('.ah-slid-partners').length>0){

		$(".ah-slid-partners").owlCarousel({
		    loop:true,
		    margin:30,
		    nav:true,
		    autoplay:false,
		    smartSpeed:1000,
		    autoplayTimeout:2000,
		    navText:['<span class="prev_arrs1"></span>', '<span class="next_arrs1"></span>'],
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});

	}

	if($('.ah-oneobj-slider').length>0){

		$(".ah-oneobj-slider").owlCarousel({
		    loop:true,
		    margin:20,
		    nav:true,
		    autoplay:false,
		    smartSpeed:1000,
		    autoplayTimeout:2000,
		    navText:['<span class="prev_1arrs"></span>', '<span class="next_1arrs"></span>'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});

	}

	if($('ul.ah-contact-list li a').length>0){

	    var tabContainers = $('.tabs-container > div');
	    tabContainers.hide().filter(':first').show();
	 
	    $('ul.ah-contact-list li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $('ul.ah-contact-list a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
	        }).filter(':first').click();
	}

	if($('ul.ah-allnews-list li a').length>0){

	    var tabContainers = $('.ah-allnews-tabs-container > div');
	    tabContainers.hide().filter(':first').show();
	 
	    $('ul.ah-allnews-list li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $('ul.ah-allnews-list a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
	        }).filter(':first').click();
	}

	if($('ul.ah-serviceone-list li a').length>0){

	    var tabContainers = $('.ah-serviceone-tabs-container > div');
	    tabContainers.hide().eq(1).show();
	 
	    $('ul.ah-serviceone-list li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $('ul.ah-serviceone-list a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
	        });
	}

	if($('.ah-oneobj-itemspan').length>0){

		$('.ah-oneobj-itemspan').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
			
		});

	}

	if($('.ah-reviews-link').length>0){

		$('.ah-reviews-link').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
			
		});

	}


});
