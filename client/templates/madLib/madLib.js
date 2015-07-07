if (Meteor.isClient) {
  Meteor.startup(function(){

  	 $('#btn-submit').click(function() {
        var exclamation = $('#exclamation').val();

        var adverb = $('#adverb').val();
        var noun = $('#noun').val();
        var verb = $('#verb').val();

        var madLib = "I went to get " + noun + 
        " while " + verb + ", I saw a(n) " + adverb + " " + noun + " and got " + adverb;
        console.log(madLib); 

     });

  });
   
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
