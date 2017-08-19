$(function() {

  // your code will go here
	$.ajax({
	    url: 'https://www.codeschool.com/users/JanR.json',
	    dataType: 'jsonp',
	    success: function(response) {
	      // handle response
	    	addUser(response.user);
	    	addCourses(response.courses.completed);
	    }
	});
	function addUser(user){
		$('h1').replaceWith($('<h1 />', {
			text: user.username + '\'s Completed Courses at Code School'
		}));
	}
	function addCourses(courses){
		var $badges = $('#badges');
		courses.forEach(function(course){
		var $course =	$('<div />', {
				'class': 'course'
			}).appendTo($badges);
		$('<h3 />', {
			text: course.title
		}).appendTo($course);
		$('<img />', {
			src: course.badge
		}).appendTo($course);
		$('<a />', {
			'class': 'btn btn-primary',
			target: '_blank',
			href: course.url,
			text: 'See Course'
		}).appendTo($course);
		})
	}
});
