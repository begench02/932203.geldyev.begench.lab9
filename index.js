function insert (number) {
    document.form.result.value = document.form.result.value + number;
}

function clean () {
    document.form.result.value = "";
}

function back () {
    let temp = document.form.result.value;
    document.form.result.value = temp.substring(0, temp.length - 1);
}

function equal () {
    let res = document.form.result.value;
    if(res) document.form.result.value = eval(res);
}