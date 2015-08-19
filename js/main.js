$('.nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('.nav a li.active').removeClass('active');
    $(this).children().addClass('active');

    $('#container').remove();
    $('.content').load(url + ' #container').hide().fadeIn('slow');
});

$('.content').on('click', '#resources-nav a', function(e) {
    e.preventDefault();
    var url = this.href;

    $('#resources-nav li.active').removeClass('active');
    $(this).parent().parent().addClass('active');

    $('#resources-container').remove();
    $('.resources-content').load(url + ' #resources-container').hide().fadeIn('slow');
});

$('.content').on('click', '.proj a', function(e) {
    e.preventDefault();
    var url = this.href;

    $('#container').remove();
    $('.content').load(url + ' #container').hide().fadeIn('slow');

    // var c = document.getElementByID('container');
    // var script = document.getElementByID('syntax');
    // eval(script.innerHTML);
});