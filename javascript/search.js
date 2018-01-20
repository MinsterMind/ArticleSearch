function searchSongs() {
    var queryTerm = $("#serch_box").val()
    axios("/feedly/search?query=" + queryTerm).then(function (res) {
        alert(JSON.stringify(res.data))
    }).catch(function (ex) {
        alert(ex)
    })
}