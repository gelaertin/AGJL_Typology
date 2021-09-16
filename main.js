// Form 
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e){
    e.preventDefault();
    console.log("Form has been submitted.")

    const formData = new FormData(this);

    fetch("data.php",{
        method: "post",
        body: formData,
    }).then(function (response){
        return response.text;
    }).then(function (text){
        console.log(text);
    }).catch(function(errow){
        console.error(error);
    })
});