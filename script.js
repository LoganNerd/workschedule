// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(save(), {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var save9 = localStorage.getItem("hour-9");
  var save10 = localStorage.getItem("hour-10");
  var save11 = localStorage.getItem("hour-11");
  var save12 = localStorage.getItem("hour-12");
  var save1 = localStorage.getItem("hour-1");
  var save2 = localStorage.getItem("hour-2");
  var save3 = localStorage.getItem("hour-3");

  var hourNine = document.getElementById("hour-9")
  localStorage.setItem("hour-9", hourNine.value);
  var hourTen = document.getElementById("hour-10")
  localStorage.setItem("hour-10", hourTen.value);
  var hourEleven = document.getElementById("hour-11")
  localStorage.setItem("hour-11", hourEleven.value);
  var hourNoon = document.getElementById("hour-12")
  localStorage.setItem("hour-12", hourNoon.value);
  var hourOne = document.getElementById("hour-1")
  localStorage.setItem("hour-1", hourOne.value);
  var hourTwo = document.getElementById("hour-2")
  localStorage.setItem("hour-2", hourTwo.value);
  var hourThree = document.getElementById("hour-3")
  localStorage.setItem("hour-3", hourThree.value);
 

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentTime = dayjs().format('hh:mm:ss');
  $('#present').text(time);
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

document.getElementById("saveBtn").addEventListener("click", save());
