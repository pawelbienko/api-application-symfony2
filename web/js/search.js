$("#search_form").submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url : "{{path('AcmeHomeBundle_ajax_update_mydata')}}",
        data: $(this).serialize()
    })
    .done(function(data){
        $('#result').removeClass().html('');
        var text = $.parseJSON(data);
        if($.type(text) === "string"){
            $('#result').addClass( "alert alert-info" )
            .html('<p>'+text+'</p>');
        }else{
            var content = "<table class='table'>\n\
                <th>Id</th><th>Name</th><th>Address</th>\n\
                <th>Latitude</th><th>Longitude</th>";
            $.each( text, function( key, value ) {
                content +="<tr>";
                $.each(value, function(k, v){
                    content += "<td>"+v+"</td>";
                });
                content +="</tr>";
            });
            content += "</table>";
            $('#result').html(content);
        }
            $('#search_form')[0].reset();
    })
    .fail(function(){
        alert("Searching failed"); 
    });
    return false;           
});  


