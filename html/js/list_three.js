$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8888/list_three",
        dataType: "json",
        success: function (result) {
            var html="";
            for(var i=0;i<=20;i++){
                html+=`
                <a href="javascript:;">
                    <img src="${result[i].img}" alt="">
                </a>
                `;
                $('#list_three').html(html); 
            }
        }
    });
})