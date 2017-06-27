$(function() {

	if($('.ah-accord__link').length>0){

		$('.ah-accord__link').click(function(){
			$(this).siblings('.ah-accord__content').slideToggle(500);
			return false;
		});
	}


	if($('.ah-accord__close').length>0){

		$('.ah-accord__close').click(function(){
			$(this).parents('.ah-accord__content').slideToggle(500);
			return false;
		});
	}

 

	if($('.ah-tabsheader').length>0){

		$('.ah-tabsbox').each(function(){

			var tabContainers = $(this).children('div');
	    tabContainers.hide().filter(':first').show();
	 
	    $(this).parents('.ah-tabs').find('ul.ah-tabsheader li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $(this).parents('ul.ah-tabsheader').find('a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
      }).filter(':first').click();
	     
		});

  }

	if($('.ah-select1').length>0){
	 
	    $('.ah-select1').selectpicker({
		  size: 4
		});

	}

	if($('.ah-select2').length>0){
	 
	    $('.ah-select2').selectpicker({
		  size: 4
		});

	}

	if($("#slider-range-min").length>0){

	    $( "#slider-range-min" ).slider({
	      range: "min",
	      value: 100,
	      min: 1,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.value + "%");
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "%" );

    }

    if($("#slider-range-min1").length>0){

	    $( "#slider-range-min1" ).slider({
	      range: "min",
	      value: 100,
	      min: 1,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount1" ).val( ui.value + "%");
	      }
	    });
	    $( "#amount1" ).val( $( "#slider-range-min1" ).slider( "value" ) + "%" );

    }

	

});
