$( "li" ).click(function() {
    var show = $( this ).attr( "id" ) + "-content";
    var hide = $( "li.active" ).attr( "id" ) + "-content";

    $( "li.active" ).toggleClass( "active inactive" );
    $( "#"+hide ).toggleClass( "active inactive" );
    $( this ).toggleClass( "inactive active" );
    $( "#"+show ).toggleClass( "inactive active" );

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