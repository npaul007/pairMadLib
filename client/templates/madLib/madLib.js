if (Meteor.isClient) {
  Meteor.startup(function(){

  	 $('#btn-submit').click(function() {
        var exclamation = $('#exclamation').val();

        var adverb = $('#adverb').val();
        var noun = $('#noun').val();
        var verb = $('#verb').val();

        var madLib = "'" + exclamation + 
        "!' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";
        
        $('#mad_lib').hide();

        $('#mad_lib').text(madLib).fadeIn("slow").css("color", "#0000ff");

     });

  });
   
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
