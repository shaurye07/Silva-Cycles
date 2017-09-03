$(document).ready(function(){
var feed=new Instafeed({
get: "user",
resolution: "standard_resolution",
sortBy: "most-recent",
template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
userId: "5985435269",
accessToken: "5985435269.1677ed0.dddf24c67cff4a889882cf60e1a81de4"
});
feed.run();

$('.gallery').magnificPopup({
  type: 'image',
  delegate: 'a',
  gallery:{
    enabled:true
  }
});
});