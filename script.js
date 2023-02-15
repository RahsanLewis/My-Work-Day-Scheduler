    var date = moment().format("MMMM Do YYYY h:mm a");
    $("#currentDay").text(date);
    console.log(date);
  
    function updateTimeBlocks() {
      var currentTime = moment().hours();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        console.log(blockHour, currentTime);
  
        if (blockHour === currentTime) {
          $(this).addClass("present");
        } else if (blockHour < currentTime) {
          $(this).addClass("past");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    updateTimeBlocks();
  
    
    $(".save-btn").on("click", function () {

      var description = $(this).siblings(".description").val().trim();
      var blockId = $(this).closest(".time-block").attr("id");

      console.log(description, blockId);
  
      localStorage.setItem(blockId, description);
    });
  
    $(".description").each(function () {
      var blockId = $(this).closest(".time-block").attr("id");
      var savedDescription = localStorage.getItem(blockId);
  
      if (savedDescription) {
        $(this).val(savedDescription);
      }
    });