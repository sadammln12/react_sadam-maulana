const { PreventRemoveContext } = require("@react-navigation/native");

function validateForm() {
    const product = document.getElementById('name').value;
    const price =document.getElementById('price').value;
    let forbiddenChar = ["@","#","/","{}"];
    // const select = document.getElementById('select')

    if (product == "" || price == "") {
        alert('Form Tidak Boleh Kosong')
        return;
    }
    if (product.includes(forbiddenChar)) {
        alert('Name must not contain symbols')
    }
    if (product.length > 25) {alert('Last Name must not exceed 25 characters.');}

    if(document.form.select.selectedIndex == ""){
        alert("silahkan pilih kategori")
    }

}
