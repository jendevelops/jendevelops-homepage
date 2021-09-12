document.getElementById("dark-mode").addEventListener("change", (e) => {
    console.log(document.querySelectorAll("body *"));
    if (e.target.checked){
        document.querySelector("label[for=dark-mode]").innerHTML="🌞";
        document.querySelector("body").classList.remove("dark");
    } else{
        document.querySelector("label[for=dark-mode]").innerHTML="🌙";
        document.querySelector("body").classList.add("dark");
    }
})