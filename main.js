$.ajax({
	url: 'https://randomuser.me/api/',
	dataType: 'json',
	success: function(data) {
  //     console.log(typeof(data));
	  console.log(data);
	  var result = data.results[0];
	  var pictureUrl = result.picture.thumbnail;
	  var name = result.name.title+' '+result.name.first+' '+result.name.last;
	  var phone = result.phone;
	  var email = result.email;
	  
	  var imgDom =$('<img>');
	  imgDom.prop('src', pictureUrl);
	  
	  var nameDom =$('<div class="name">');
	  nameDom.text(name);
	  
	  var phoneDom =$('<a class="phone">');
	  phoneDom.prop('href', 'tel:'+phone).text(phone);
	  
	  var emailDom =$('<a class="email">');
	  emailDom.prop('href', 'mailto:'+email).text(email);
	  
	  $('#user').append(imgDom).append(nameDom).append(phoneDom).append(emailDom);
	}
  });