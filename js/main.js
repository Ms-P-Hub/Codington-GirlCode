(function ($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
  
    $('#subject').parent().append('<ul class="list-item" id="newsubject" name="subject"></ul>');
    $('#subject option').each(function(){
        $('#newsubject').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#subject').remove();
    $('#newsubject').attr('id', 'subject');
    $('#subject li').first().addClass('init');
    $("#subject").on("click", ".init", function() {
        $(this).closest("#subject").children('li:not(.init)').toggle();
    });

    $('#role').parent().append('<ul class="list-item" id="newrole" name="role"></ul>');
    $('#role option').each(function(){
        $('#newrole').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#role').remove();
    $('#newrole').attr('id', 'role');
    $('#role li').first().addClass('init');
    $("#role").on("click", ".init", function() {
        $(this).closest("#role").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#subject").children('li:not(.init)');
    $("#subject").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#subject").children('.init').html($(this).html());
        allOptions.toggle();
    });

    var RoleOptions = $("#role").children('li:not(.init)');
    $("#role").on("click", "li:not(.init)", function() {
        RoleOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#role").children('.init').html($(this).html());
        RoleOptions.toggle();
    });
})(jQuery);

var Users = function(name, subjects,){

}
