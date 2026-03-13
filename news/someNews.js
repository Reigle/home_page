$.ajax({
    url: "/news/someNews.html",
    cache: false,
    success: function(html){
        $('.news').append(html)
    }
});
