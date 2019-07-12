$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8888/details_two",
        dataType: "json",
        success: function (result) {
            var html="";
                html+=`
                <li><a href="javascript:;"><img src="${result[0].img}"></a></li>
                <li><a href="javascript:;"><img src="${result[1].img}"></a></li>
                <li><a href="javascript:;"><img src="${result[2].img}"></a></li>
                <li><a href="javascript:;"><img src="${result[3].img}"></a></li>
                <li><a href="javascript:;"><img src="${result[4].img}"></a></li>
                <li><a href="javascript:;"><img src="${result[0].img}"></a></li>
                `;
                $('#ul-imgs').html(html);
                /*九宫格*/
                var html="";
                html+=`
                <div class="d-flex">
                    <div class="">
                        <div class="box">
                            <img src="${result[5].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Williamson</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[6].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Kristiana</h3>
                                    <span class="post">Web Designer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[7].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <div class="">
                        <div class="box">
                            <img src="${result[8].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[9].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[10].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <div class="">
                        <div class="box">
                            <img src="${result[11].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[12].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pl-3">
                        <div class="box">
                            <img src="${result[13].img}">
                            <div class="box-content">
                                <div class="inner-content">
                                    <h3 class="title">Steve Thomas</h3>
                                    <span class="post">Web Developer</span>
                                </div>
                                <ul class="icon">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                $('#detalis_two').html(html);
            }
    });
})