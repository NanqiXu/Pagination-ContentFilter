function showPage(pageNum,students){
  students.hide();
  let $studentPointer = students.first();
  let $linkPointer = $(".pagination ul li").first();
  if(pageNum === 1){
    students.first().show();
    $linkPointer.children().addClass("active");
  }
  if(pageNum !== 1){
    $linkPointer.children().removeClass();
  }
  for(let i = 2; i <= students.length; i++){
    var currentStudent = $studentPointer.next();
    if(Math.ceil(i/10) === pageNum){
      currentStudent.show();
    }
    $studentPointer = currentStudent;
  }
  for(let i = 2; i <= Math.ceil(students.length/10);i++){
    var $currentLink = $linkPointer.next();
    if(i === pageNum){
      $currentLink.children().addClass("active");
    } else{
      $currentLink.children().removeClass();
    }
    $linkPointer = $currentLink;
  }
}

function appendPageLinks(studentList){
  let page = Math.ceil(studentList.length/10);
  $('.page').append("<div class=\"pagination\">"
      +"<ul>");
  for(let i = 1; i <= page; i++){
    $(".pagination ul").append("<li> <a href = \"#\" onclick = showPage(" +i +","+"\$(\".student-item\"))>" + i + "</a> </li>");
  }
  $('.page').append("</ul>" + "</div>")
}
appendPageLinks($(".student-item"));
showPage(1,$(".student-item"));
