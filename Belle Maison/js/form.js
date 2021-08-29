//window.onload = function() {
document.getElementById('reset').addEventListener('click', function() {
    var data = [document.getElementById('fname'), document.getElementById('lname'),
        document.getElementById('usrmail'), document.getElementById('address')
    ];

    for (let x = 0; x < data.length; x++) {
        data[x].value = "";
    }
});
//}