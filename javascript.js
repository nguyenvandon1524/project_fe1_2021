const formSubmit = document.querySelector('#form-Submit');
const email = document.querySelector('#exampleInputEmail1');
const name1 = document.querySelector('#exampleInputName1');
const description = document.querySelector('#exampleInputDescription1');

//Buoc 2: Viet su kien submit
formSubmit.addEventListener('submit', function (e) {
    //Kiem tra email
    if (!checkMail(email.value)) {
        setError(email)
        e.preventDefault();
    }
    else {
        setSucess(email)
    }
    //Kiem tra name
    if (!checkName(name1.value)) {
        setError(name1)
        e.preventDefault();
    }
    else {
        setSucess(name1)
    }
    //Kiem tra description
    if (!checkDescription(description.value)) {
        setError(description)
        e.preventDefault();
    }
    else {
        setSucess(description)
    }

});

//Kiem tra name
function checkName(inputValue) {
    const regex = /^\w{6,}$/;
    return regex.test(inputValue);
}


//Kiem tra email
//Kiem tra nhap vao phai co duoi @gmail.com.vn

function checkMail(inputValue) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(inputValue);
}

//Kiem tra description
function checkDescription(inputValue) {
    const regex = /^\w{10,}$/;
    return regex.test(inputValue);
}
//Kiem tra neu sai thi to do o input
function setError(input) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
}

//Kiem tra neu dung thi to xanh o input
function setSucess(input) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}