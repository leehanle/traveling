$(function () {
  $("header li").on("mouseenter", function () {
    $(this).css({
      "background-color": "#f1927b",
      "border-radius": "50%",
      color: "#fff",
    });
    $(this).find("span").css("color", "#fff");
  });
  $("header li").on("mouseleave", function () {
    $(this).css({
      "background-color": "transparent",
      "border-radius": "none",
      color: "#4f3737",
    });
    $("header li:last-child").css("color", "#f1927b");
  });
  $(".Our_Brands .leftBox li").on("click", function () {
    let a = $(this).index();
    $(".Our_Brands .leftBox li").removeClass("on");
    $(this).addClass("on");
    $(".Our_Brands .leftBox li div").removeClass("to");
    $(".Our_Brands .leftBox li div").eq(a).addClass("to");
    $(".Our_Brands .leftImg1 div").removeClass("sh");
    $(".Our_Brands .leftImg1 div").eq(a).addClass("sh");
    $(".Our_Brands .rightBox .text li").removeClass("ow");
    $(".Our_Brands .rightBox .text li").eq(a).addClass("ow");
    $(".Our_Brands .rightBox .img li h4").removeClass("tx");
    $(".Our_Brands .rightBox .img .leftImg h4").eq(a).addClass("tx");
    $(".Our_Brands .rightBox .img .rightImg h4").eq(a).addClass("tx");
    $(".Our_Brands .rightBox .img li div div").removeClass("im");
    $(".Our_Brands .rightBox .img li .leftImg div").eq(a).addClass("im");
    $(".Our_Brands .rightBox .img li .rightImg div").eq(a).addClass("im");
  });
  $(".inter .topBox ul li").on("click", function () {
    let b = $(this).index();
    $(".inter .topBox ul div").removeClass("ab");
    $(".inter .topBox ul div").eq(b).addClass("ab");
  });
  $(".inter .topBox ul li:first-child").on("click", function () {
    $(".inter .bottomBox").removeClass("ef");
    $(".inter .centerBox").addClass("cd");
  });
  $(".inter .topBox ul li:last-child").on("click", function () {
    $(".inter .centerBox").removeClass("cd");
    $(".inter .bottomBox").addClass("ef");
  });
});
