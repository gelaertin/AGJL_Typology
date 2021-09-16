// Form 
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted.")

    const request = new XMLHttpRequest();
    request.open("post", "data.php");

    request.onload = function () {
        console.log(request.responseText);
    }
    request.send(new FormData(myForm));
});