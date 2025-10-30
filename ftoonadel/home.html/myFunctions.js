let clickCount = 0;

$(document).ready(function() {
  $(".toggle").click(function() {
    $(this).closest("tr").next(".details").toggle();

    clickCount++;
    if (clickCount === 25) {
      $("#ratingModal").fadeIn();
    }
  });

  // عند الضغط على نجمة
  $(".star").click(function() {
    const value = $(this).data("value");
    $(".star").removeClass("active");
    $(this).addClass("active").prevAll(".star").addClass("active");

    $("#ratingMessage").text(`شكراً! لقد منحتنا ${value} نجوم ⭐`);

    // ✅ حفظ التقييم في LocalStorage
    localStorage.setItem("ftoon_rating", value);
  });

  // ✅ عند تحميل الصفحة، جلب آخر تقييم محفوظ
  const savedRating = localStorage.getItem("ftoon_rating");
  if (savedRating) {
    $(".star").each(function() {
      if ($(this).data("value") <= savedRating) {
        $(this).addClass("active");
      }
    });
    $("#ratingMessage").text(`تقييمك السابق: ${savedRating} نجوم ⭐`);
  }

  // زر إغلاق
  $("#closeModal").click(function() {
    $("#ratingModal").fadeOut();
    clickCount = 0;
  });
});
