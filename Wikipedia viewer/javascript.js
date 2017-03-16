$(document).ready(function(){

  $("#search").click(function(){
    //getting search imput
    var searchBox = $("#searchBox").val();
    //API url with searchItem;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchBox+"&format=json&callback=?";

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success:function(data){
        $("#output").html("");
        for(var i=0; i<data[1].length; i++)
          $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        },
      error:function(errorMessage){
        alert("Error");
      }
    });
  });

  $("#searchBox").keypress(function(k){
    if(k.which==13)
      $("#search").click();
  });

});
