function mobile() {
	return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? !0 : !1
}

function screenWidth() {
	var a = $(window).width();
	return a
}

function backToTop() {
	return vph = $(window).height(), $("html, body").animate({
		scrollTop: 0
	}, 600), !1
}

function toggleNav() {
	$(".navigation").toggleClass("navigation-active"), $(".navigation").hasClass("navigation-active") && $(".menu").removeClass("light").addClass("dark"), !$(".menu").hasClass("intro-active") && $(".hamburger").hasClass("close") && $(".menu").removeClass("dark").addClass("light"), $(".hamburger").toggleClass("close")
}

function setMargins() {
	vph = $(window).height(),
	headline = $(".intro h1").height(),
	menunavigation = $("ul.main-navigation").height(),
	headerheight = $(".header").height(),

	$("ul.main-navigation").css({
		"margin-top": vph / 2 - menunavigation / 2 + "px"
	}), $(".intro h1").css({
		"margin-top": vph / 2 - headline / 2 - 30 + "px"
	})
}

function hasScrolled() {
	var a = $(this).scrollTop();
	Math.abs(lastScrollTop - a) <= delta || (a > lastScrollTop && a > navbarHeight ? $(".menu").addClass("navigation-up") : a + $(window).height() < $(document).height() && $(".menu").removeClass("navigation-up"), lastScrollTop = a)
}

function screenW() {
	return width = $(window).width(), width
}

function animateS() {
	$(".fade-in").each(function(a) {
		var i = $(this),
			e = $(window),
			t = (i.offset().top + i.outerHeight(), e.scrollTop() + e.height());
		i.offset().top <= t - .1 * e.height() ? i.addClass("show") : i.offset().top > t - .1 * e.height() && i.removeClass("show")
	})
}

$(document).ready(function() {
	mobile() && ($("body").addClass("mobile"), $(".card").addClass("touch")), $("ul.main li").click(function() {
		toggleNav()

	}),
		$("a#exit").click(function(a) {
			a.preventDefault();
			var i = this.href;
			$(this).hasClass("logo") ? ($(".is-exiting").addClass("dark"), $(".menu").addClass("dark").removeClass("light")) : $(".menu").removeClass("dark").addClass("light"), $(".is-exiting").fadeIn(300), setTimeout(function() {
			window.location = i
		}, 1e3)

	}),
		$(".hamburger").click(function() {
			toggleNav()
	}),
		animateS(), setMargins(), $(".navigation .overlay").click(function() {
			toggleNav()
	}),
		$(".skills-menu div").click().mouseover(function(a) {
			a.preventDefault(), a.stopPropagation()
	}),
		retinajs()
}),
	window.onresize = function(a) {
		setMargins()
},
	$(window).scroll(function() {
		animateS(), $(".arrow").hasClass("visible") || ($(this).scrollTop() > 100 ? $(".arrow").fadeIn() : $(".arrow").fadeOut())
});

var didScroll, lastScrollTop = 0,
	delta = 1,
	navbarHeight = $(".menu").outerHeight();

$(window).scroll(function(a) {
	didScroll = !0
}),

setInterval(function() {
	didScroll && (hasScrolled(), didScroll = !1)
}, 250);