function sendMail(contactForm) {
    emailjs.send("service_u36nneq","template_tackgkn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#successOrFailure-en").text("Your mail has been sent.")
            $("#successOrFailure-fr").text("Votre mail a été reçu.")
        },
        function(error) {
            console.log("FAILED", error);
            $("#successOrFailure-en").html("<p>An error occured. Please try again.</p><a href='mailto: justin.sawyer.dev@gmail.com'>Or Click Here</a>")
            $("#successOrFailure-fr").html("<p>Une erreur s'est produite. Veuillez réessayer.</p><a href='mailto: justin.sawyer.dev@gmail.com'>Ou cliquez ici</a>")
        }
    );
    return false;  // To block from loading a new page
}