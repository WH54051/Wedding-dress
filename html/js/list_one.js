$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8888/list_one",
        dataType: "json",
        success: function (result) {
            var html="";
            html+=`<video src="${result[0].img}" controls loop></video>`;
            $('.back').html(html);
            /*图*/
            var html="";
            for(var i=1;i<=17;i++){
                html+=`
                <a href="javascript:;">
                    <img src="${result[i].img}" alt=""> 
                </a>
                `;
                $('#list_one').html(html); 
            }
        }
    });
})