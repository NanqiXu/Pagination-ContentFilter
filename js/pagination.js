/* showPage function takes a intager page number and a student list jQuary object
    this function will calculate which students is going to be show on the page, and hide all students that is not on the page.
    then function will mark targe page a tag by give it a class name active;
*/

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
/*
  appendPageLinks function is going to take a student list jQuary object
  it will calculate how many links should be create for each page,
  it will add a div block to the html page, contain all links, each link for 10 students.
*/
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
