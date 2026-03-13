$.ajax({
    url: "/component/footer.html",
    cache: false,
    success: function(html){
        $('.footer').append(html)
    }
});