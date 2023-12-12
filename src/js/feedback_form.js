document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector("#form-feedback");
    form.addEventListener('submit', function(event)
    {
        event.preventDefault();
        const nameInput = form.querySelector("#FormControlInput1");
        const emailInput = form.querySelector("#FormControlInput2");
        const telInput = form.querySelector("#FormControlInput3");
        const textInput = form.querySelector("#FormControlTextarea1");

        const name = nameInput.value;
        const email = emailInput.value;
        const tel = telInput.value;
        const text = textInput.value;

        console.log(name);
        console.log(email);
        console.log(tel);
        console.log(text);
    });
});