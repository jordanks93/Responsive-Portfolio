$(function() {
    $("#contactForm").on("submit", function(event){
        
        event.preventDefault();
        var confirmMsg = $("#confirmMsg")

        console.log("Contact info submitted");

        let name = $("#name").val().trim();
        let  email = $("#email").val().trim();
        let  message = $("#message").val().trim();

        let contactObj = {
            "name": name,
            "email": email,
            "message": message
        }

        confirmMsg = confirmMsg.text("Contact Info and Message Saved!");
        $("#contactForm")[0].reset();

        $.ajax("/api/contact", {
            type: "POST",
            data: contactObj
        }).then(
           console.log("contact ajax request sent")
        );
    });   
});