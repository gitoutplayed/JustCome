$(document).ready(function() {
  //This is te code for enqueuing
  $("#submit").click(function() {
    var id = $("#id").val();
    var number = $("#phoneNumber").val();
    var priority = $("#priority-select").val();
    $.ajax({
            url:"/JustCome/waitlist/enqueue",
            type: "GET",
            data: {
              patientID: id,
              phoneNumber: number,
              priority: priority,
            },
            success: function(response) {
              location.reload(true);
            },
            failure: function(xhr) {
              alert("failed");
            },
          });
  });

  $(".patient_button").click(function() {
    var dropdown = $(this).siblings('.dropdown-content');
    dropdown.toggle();
  });

  // window.onclick = function(event) {
  //   if (!event.target.matches('.patient_button')) {
  //     var dropdowns = document.getElementsByClassName(".dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropDown = dropdowns[i];
  //       if (openDropDown.classList.contains('show')) {
  //         openDropDown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
});

//Function to dequue a patient
function dequeue(phoneNumber){
  $.ajax({
    url: "/JustCome/waitlist/dequeue",
    data:{
      phoneNumber : phoneNumber,
    },
    type: "GET",
    success: function(data) {
      location.reload(true);
    },
    failure: function(xhr) {
      alert(xhr);
    },
  });
}

function movePrioritys(patientID){
  $.ajax({
    url: "/JustCome/waitlist/dequeue",
    data:{
      patientID : patientID,
    },
    type: "GET",
    success: function(data) {
      location.reload(true);
    },
    failure: function(xhr) {
      alert(xhr);
    },
  });
}
