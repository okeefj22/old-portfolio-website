$( ".nav li" ).click(function() {
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
});