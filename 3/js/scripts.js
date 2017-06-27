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

$(function() {

	$(window).click(function(){
		$(".az-menu-list").removeClass("on");
		$(".az-menu-list ul").removeClass("on");
	});

	$(".az-menu-icon").click(function(event){
		event.stopPropagation();
		$(".az-menu-list").toggleClass("on");
		if(!$(".az-menu-list").hasClass("on")){
			$(".az-menu-list ul").removeClass("on");
		}
	});

	$(".az-menu-list a").click(function(event){
		event.stopPropagation();
		if($(this).next("ul").length>0){
			$(this).next("ul").toggleClass("on");
		}
	});
	
	$(".az-sidebar-item-head").click(function(){
		if(window.matchMedia( "(max-width: 767px)" ).matches){
			$(this).siblings(".az-sidebar-item-list").slideToggle(300);
		}
	})

	$('.az-carousel').owlCarousel({
		items: 1,
		dots: true,
		margin: 10
	});

	$('.az-select').selectpicker({
	  style: 'btn-info',
	  size: 4
	});

	jQuery("#az-slider").slider({
		min: parseInt($("input#minCost").val()),
		max: parseInt($("input#maxCost").val()),
		values: [parseInt($("input#startCost").val()),parseInt($("input#endCost").val())],
		range: true,
	    stop: function(event, ui) {
			jQuery("input#startCost").val(jQuery("#az-slider").slider("values",0));
			jQuery("input#endCost").val(jQuery("#az-slider").slider("values",1));
		},
		slide: function(event, ui){
			jQuery("input#startCost").val(jQuery("#az-slider").slider("values",0));
			jQuery("input#endCost").val(jQuery("#az-slider").slider("values",1));
		}
	}).draggable();

	$(".az-DistSpan").focus(function(){
		$(this).val("");
	});

	$(".az-DistSpan").keypress(function(event){
		if(event.which == 13 || event.keyCode == 13){
			$(this).trigger("blur");
			return false;
		}
	});

	$("#startCost").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider").slider("values",0));
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider").slider("values",0));
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#minCost").val())&&az_check_max_min<=parseInt($("input#endCost").val())){
				$(this).val(parseInt($(this).val()));
				jQuery("#az-slider").slider("values", 0, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider").slider("values",0));
			}
		}
	});

	$("#endCost").blur(function(){
		if($(this).val() == ""){
			$(this).val(jQuery("#az-slider").slider("values",1));
		} else if(isNaN(parseInt($(this).val()))){
			$(this).val(jQuery("#az-slider").slider("values",1));
		} else{
			var az_check_max_min = parseInt($(this).val());
			if(az_check_max_min>=parseInt($("input#startCost").val())&&az_check_max_min<=parseInt($("input#maxCost").val())){
				$(this).val(parseInt($(this).val()));
				jQuery("#az-slider").slider("values", 1, parseInt($(this).val()));
			} else{
				$(this).val(jQuery("#az-slider").slider("values",1));
			}
		}
	});

});
