function render(data) {
    var html = "<div class='commentBox'><div class='leftPanelImg'> <img src='comment.png'/></div> <div class='rightPanel'><span>" + data.name + "</span><div class='data'>" + data.date + "</div><p>" + data.body + "</p></div><div class='clean'></div></div>";
    $('#container').append(html);
}
$(document).ready(function() {

    var comment = [{ "name": "Sanaa Abdullah", "date": "22 Nov 2020", "body": "this is a comment" }];

    for (var i = 0; i < comment.length; i++)

    {
        render(comment[i])
    }
    $('#addComment').click(function() {

        var addObj = {

            "name": $('#name').val(),

            "date": $('#date').val(),

            "body": $('#bodyText').val()

        };

        console.log(addObj);
        comment.push(addObj);
        render(addObj);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#bodyText').val('');

    });

});