var profPic;
var email;
var date;
var profTmpl = _.template($('#profilePicture').html());
var navTmpl =_.template($('#navPicture').html());
var contactTmpl = _.template($('#contact').html());
var followTmpl = _.template($('#following').html());
var organizationTmpl = _.template($('#organization').html());
var repoTmpl = _.template($('#repoCommentsScript').html());
var activeTmpl = _.template($('#repoActiveScript').html());

//////////////////
//DOCUMENT READY//
//////////////////

$(document).ready(function() {

  page.init();

});

/////////////////
//OBJECT  //
/////////////////

var page = {

  init: function(arguments) {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments) {
    $('.profileImg').append(profTmpl(gitUser));
    $('.right').prepend(navTmpl(gitUser));
    $('.contactWrapper').prepend(contactTmpl(gitUser));
    $('.followersWrapper').append(followTmpl(gitUser));
    $('.organizations').append(organizationTmpl(gitOrgs));

    _.each(gitRepos, function(el,index,array) {
      $('.repoComments').append(repoTmpl(el));
    });

    _.each(gitEvents, function(el,index,array) {
      $('.commentWrapped').append(activeTmpl(el));
    });
  },

  initEvents: function(arguments) {

    $('#repos').on('click',function(){
      $('.repoComments').removeClass('displayed');
      $('.publicActivty').addClass('displayed');
      console.log('hey');
    });

    $('#publicActivity').on('click',function(){
      $('.publicActivity').removeClass('displayed');
      $('.repoComments').addClass('displayed');
    });

  }

  ///////////////
  // Functions //
  ///////////////


}
