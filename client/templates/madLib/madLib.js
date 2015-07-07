if (Meteor.isClient) {
  Template.hello.rendered = function() {
    $('#btn-submit').click(function() {
        console.log("Hello World");
    });
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
