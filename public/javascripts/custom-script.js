var isopen = 0;
jQuery(document).ready(function(){
	$(".nav-trigger").click(function(){
		$(this).children("i").toggleClass("fa-angle-double-right fa-angle-double-left");
		$(this).parent(".sideBar").toggleClass("collapse-sidebar");
		$(".main-content").toggleClass("fullwidth");
		$('.gw-submenu').removeAttr("style");
	});	
	/*************************************MULTI SELECT JQUERY************************************/
	$(".navigation-section a").click(function(){
	 $("li.active").removeClass("active");
	 $(this).parent("li").addClass("active");
	 $(this).find("em").toggleClass("fa-angle-down fa-angle-up");
	});
	$('.sel-file').click(function(){
		$('.files-listing').hide();
		$('.fileupload-success').show();
		$(this).next('.create-voucher').show();
		$(this).prev('button').replaceWith('<button type="button" class="btn btn-default">Back</button>')
		$(this).hide();
	});
	$('#startDatePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the start date field
            $('#eventForm').formValidation('revalidateField', 'startDate');
        });

    $('#endDatePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            $('#eventForm').formValidation('revalidateField', 'endDate');
        });
	/**********************TOGGLE BUTTON***********************/
	var nav = function () {
        $('.gw-nav > li > a').click(function () {
            var gw_nav = $('.gw-nav');
            gw_nav.find('li').removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');
            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.gw-submenu')[0];
            if (ulDom == undefined) {
                checkElement.addClass('active');
                $('.gw-nav').find('li').find('ul:visible').slideUp();
                return;
            }
            if (ulDom.style.display != 'block') {
                gw_nav.find('li').find('ul:visible').slideUp();
                checkElement.addClass('active');
                checkElement.find('ul').slideDown(300);
            } else {

                checkElement.removeClass('active');
                checkElement.find('ul').slideUp(300);
            }
        });
        $('.gw-nav > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');
            $(this).parents().addClass('active')
        });
    };
    nav();
	
});

