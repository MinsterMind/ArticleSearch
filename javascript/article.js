function loadArticles() {
    $("#wrapper").html("<div class=\"text-center\">\n" +
        "            <h4>loading websites...</h4>\n" +
        "        </div>\n"+
        "<div class=\"animationload\" align='center'>\n" +
        "            <div class=\"osahanloading\" align='center'></div>\n" +
        "        </div>")
    var searchKeyword = $('#search_box').val()
    var Article = Backbone.Model.extend()
    var Articles = Backbone.Collection.extend({
        model: Article,
        url: '/feedly/search?query=' + searchKeyword
    })
    var tableArticle = Backbone.View.extend({
        el: $('#wrapper'),
        initialize: function () {
            this.render()
        },
        render: function () {
            var that = this
            var articles = new Articles()
            articles.fetch({
                success: function (articles) {
                    var variable = {articles:articles.models}
                    var template = _.template($('#table_template').html())
                    that.el.html(template(variable))
                    $("#article_table").tablesorter();
                }
            })
        }
    })
    new tableArticle()
    return false
}