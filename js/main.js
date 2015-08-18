/*$( ".nav li" ).click(function() {
    var show = $( this ).attr( "id" ) + "-content";
    var hide = $( ".nav li.active" ).attr( "id" ) + "-content";

    $( ".nav li.active" ).toggleClass( "active inactive" );
    $( "#"+hide ).toggleClass( "hidden" );
    $( this ).toggleClass( "inactive active" );
    $( "#"+show ).toggleClass( "hidden" );

});

$( "#resources-nav li" ).click(function() {
    var show = $( this ).attr( "id" ) + "-content";
    var hide = $( "#resources-nav li.active" ).attr( "id" ) + "-content";

    $( "#resources-nav li.active" ).toggleClass( "active inactive" );
    $( "#"+hide ).toggleClass( "hidden" );
    $( this ).toggleClass( "inactive active" );
    $( "#"+show ).toggleClass( "hidden" );

});

$( ".proj" ).click(function() {
    var id = $( this ).attr( "id" ) + "-content";

    $( "#proj-desc" ).toggleClass( "show hide" );
    $( "#project-list" ).toggleClass( "show hide" );
    $( "#"+id ).toggleClass( "hide show" );
});

$( "#back-icon" ).click(function() {
    $( this ).parent().toggleClass( "show hide" );
    $( "#proj-desc" ).toggleClass( "hide show" );
    $( "#project-list" ).toggleClass( "hide show" );
});*/

// $('.nav li').on('click', function() {
//     var show = $( this ).attr( "id" ) + "-content";
//     var hide = $( ".nav li.active" ).attr( "id" ) + "-content";

//     $( ".nav li.active" ).toggleClass( "active inactive" );
//     $( "#"+hide ).toggleClass( "hidden" );
//     $( this ).toggleClass( "inactive active" );
//     $( "#"+show ).toggleClass( "hidden" );
// });

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

    // $('#resources-nav li.active').removeClass('active');
    // $(this).parent().parent().addClass('active');
});

// $('.content').on('click', '#resources-nav a', function() {
//     var show = $(this).attr('id') + '-content';
//     var hide = $('#resources-nav li.active').attr('id') + '-content';

//     $('#resources-nav li.active').toggleClass('active inactive');
//     $('#' + hide).toggleClass('hidden');
//     $(this).toggleClass('inactive active');
//     $('#' + show).toggleClass('hidden');
// });