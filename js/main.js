$(document).ready(function() {
	// Anchors
    $(document).on("click", "[data-anchor]", function(e) {
    	e.preventDefault();

        var scrollElement = $(this).attr("href"); 

        if ($(scrollElement).length != 0) { 
        	$("html, body").animate({scrollTop: $(scrollElement).offset().top}, 500);
        }
    });	

    // Input Masks
    $("[name='phone']").mask("+7 (999) 999-99-99");   

	// Spoilers
	$(".spoiler__header").click(function() {
		var spoiler = $(this).parents(".spoiler");

		spoiler.find(".spoiler__content").animate({opacity: "toggle", height: "toggle"}, 200);

		setTimeout(function() {
			spoiler.toggleClass("spoiler_active");	
		}, 200);			
	});	

    // Modal Windows
    $(document).on("click", "[data-modal]", function(e) {
    	e.preventDefault();

        openModal($(this), $(this).attr("href"));
    });   

    $(".modal__close").click(function(e) {
    	parent.$.fancybox.getInstance().close();
    });

    function openModal(el, modal) {
    	$.fancybox.close();

        $.fancybox.open({
            src: modal,
            opts: {
            	autoFocus: false,
                touch: false      
            }
        });     
    }  
	
	// Calculator
	var investmentAmount = 10000;
	var investmentPeriod = 6;
	var annualInterestRate = 23.55;
	var interestRateQty = 12;

    $("#investment-amount-input").ionRangeSlider({
        type: "single",
        hide_from_to: true,
        min: investmentAmount,
        max: 500000,
        from: investmentAmount,
        step: 1000,
        skin: "torus",
        onStart: function(data) {
        	$("#investment-amount-value").html("$" + (data.from).toLocaleString("ru-RU"));

        	calculateInvestmentProfit();
        },
        onChange: function(data) {
        	investmentAmount = data.from;

        	$("#investment-amount-value").html("$" + (data.from).toLocaleString("ru-RU"));

        	calculateInvestmentProfit();
        }
    });  

    $("#investment-period-input").ionRangeSlider({
        type: "single",
        hide_from_to: true,
        min: investmentPeriod,
        max: 60,
        from: investmentPeriod,
        step: 1,
        postfix: " мес",
        skin: "torus",
        onStart: function(data) {
        	$("#investment-period-value").html(data.from + " мес");

        	calculateInvestmentProfit();
        },
        onChange: function(data) {
        	investmentPeriod = data.from;

        	$("#investment-period-value").html(data.from + " мес");

        	calculateInvestmentProfit();
        }
    }); 

    function calculateInvestmentProfit() {
    	var investmentProfit = Math.floor(investmentAmount * Math.pow(1 + (annualInterestRate / 100) / interestRateQty, interestRateQty * (investmentPeriod / 12)));

    	$(".calculator__results-profit").html("$" + investmentProfit.toLocaleString("ru-RU"));
    }         
});