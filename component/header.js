$.ajax({
    url: "/component/header.html",
    cache: false,
    success: function(html){
        $('.header').append(html)
    }
});
