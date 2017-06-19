var profileImg = "<img src='https://uwm.edu/eqi/wp-content/plugins/uwmpeople/images/profile-default.jpg' class='img-circle' height='60' width='60'>";
var icon = "<span class='glyphicon glyphicon-time'></span>";
var commentImg = "<img src='https://uwm.edu/eqi/wp-content/plugins/uwmpeople/images/profile-default.jpg' class='img-circle' height='30' width='30'>";


$(document).ready(function(){


  $("#buttonPost").click(function(){
        $("#post").toggle();
    });



$.ajax({
  type: "GET",
  url: "http://127.0.0.1:8000/api/todos/", success: function(response){
    console.log(response);

    
    


    for(i=0;i<response.length;i++){

    	var string = JSON.stringify(response[i]);
    	var obj = JSON.parse(string);

    	var date = new Date(obj.updatedAt);
    	var local = date.toLocaleString([], { hour12: true});

var form = "<form style='margin-top:10px;'><div class='form-group'><input type='text' class='form-control input-sm' id='first"+obj.id+"' placeholder='First name...' required></div><div class='form-group'><input type='text' class='form-control input-sm' id='last"+obj.id+"' placeholder='Last name...' required></div><div class='form-group'><textarea class='form-control input-sm' placeholder='Comment...' id='Textcomment"+obj.id+"' required maxlength='250' required></textarea></div><input type='submit' class='btn btn-default' style='margin-bottom: 10px;' onclick='$.ajax({type:`POST`,url: `http://127.0.0.1:8000/api/todos/"+obj.id+"/items`,data:{first_name : $(`#first"+obj.id+"`).val(),last_name: $(`#last"+obj.id+"`).val(),comment: $(`#Textcomment"+obj.id+"`).val()}, success: function(response){console.log(response);}})'></form>";


        var check;

        if(obj.todoItems.length == 0){
            check = "NO COMMENTS:";
        }else{
            check = "COMMENTS:";
        }

        var update;

    	if(obj.updatedAt != obj.createdAt){

            update = "edited";
        }else{
            update = "";
        }


    	$('#content').append(profileImg+"<h1 id='name'>"+obj.first_name+" "+obj.last_name+"<h5 class='postDate'>"+icon+" posted: "+local+ update+"</h5><h3>"+obj.title+"</h3><p>"+obj.body+
    		"</p><div class='container'><div class='row'><hr><h6>"+check+"</h6><div class='col-md-8' style='margin-left: 50px; overflow-y:scroll; max-height: 200px; width: 80%;' id='commentBelow"+obj.id+"'></div></div></div><hr>");
        

        if(obj.todoItems == 0 || obj.todoItems == null){
            
            $('#commentBelow'+obj.id).append("<button class='btn btn-link' id='buttonLink' onclick='$(`#under-here"+obj.id+"`).toggle();'>write a comment...</button><div id='under-here"+obj.id+"' style='display:none;'></div>");
            $('#under-here'+obj.id).append(form);

        }else{

            
            for(i=0;i<obj.todoItems.length;i++){
            var arr = JSON.stringify(obj.todoItems[i]);

            var comments = JSON.parse(arr);

            var date = new Date(comments.updatedAt);
            var time = date.toLocaleString([], { hour12: true});

            $('#commentBelow'+obj.id).append("<hr>"+commentImg+"<h1 id='commentName'>"+comments.first_name+" "+comments.last_name+"</h1><h5>"+icon+" posted: "+time+"</h5><p>"+comments.comment+"</p>");
            
            if(i+1 == obj.todoItems.length){

            $('#commentBelow'+obj.id).append("<button class='btn btn-link' id='buttonLink' onclick='$(`#under-here"+obj.id+"`).toggle();'>write a comment...</button><div id='under-here"+obj.id+"' style='display:none;'></div>");
            $('#under-here'+obj.id).append(form);
            }

            }

            
        }
    }
}


});

});


function register(){

var fname = $('#fname').val();
var lname = $('#lname').val();

var subject = $('#subject').val();
//console.log(subject);
var message = $('#body').val();
//console.log(textcomment);

$.ajax({
	type: "POST",
	url: "http://127.0.0.1:8000/api/todos",
	data:{
        first_name : fname,
        last_name: lname,
		title: subject,
		body: message
	}, success: function(response){
		console.log(response);
	}
})

}



