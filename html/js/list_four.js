$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8888/list_four",
        dataType: "json",
        success: function (result) {
            var html="";
            for(var i=0;i<19;i++){
                html+=`
                <a href="javascript:;">
                    <img src="${result[i].img}" alt="">
                </a>
                `;
                $('#list_four').html(html); 
            }
        }
    });
})