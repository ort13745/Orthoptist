$(document).ready(function() {
    
    $(".accordion-title a").click(function() {
        // 同じsection内の.accordion-contentを選択
        var content = $(this).closest("section").find(".accordion-content");

        // .accordion-contentが非表示の場合は
        if ( !content.is(":visible") ) {
            
            $(".accordion-content:visible").slideUp();

            
            content.slideDown();
        }

        return false;
    });
});

// chart.js
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["正常眼圧緑内障", "開放隅角緑内障", "閉塞隅角緑内障", "続発緑内障"],
    datasets: [{
      backgroundColor: [
        "#ff9999",
        "#999fff",
        "#f9f900",
        "#59dd95",
      ],
      data: [3.6, 0.3, 0.6, 0.5]
    }]
  }
});


