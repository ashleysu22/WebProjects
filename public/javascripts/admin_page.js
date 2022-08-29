
function showForm(){
    //const bttn = document.getElementById("btn");

    document.getElementById("show_form").style.display = "block";
}

function cancelForm(){
    document.getElementById("show_form").style.display = "none";
}

function checkProduct(imageCheck,descriptionCheck,priceCheck){
    imageCheck = document.getElementById("image").value();
    descriptionCheck = document.getElementById("description").value();
    priceCheck = document.getElementById("price").value();

    //if(imageCheck==null || descriptionCheck==null ||priceCheck==null){
    //    alert("You must complete the product in details.");
    //}
}