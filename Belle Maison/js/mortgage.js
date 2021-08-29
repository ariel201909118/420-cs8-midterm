document.getElementById('mc').innerHTML = `
<form>
    <h2>Mortgage Calculator</h2>
    <label for="price">Price:</label>
    <input type="number" id="price" name="price" required><br>
    <label for="downpayment">DownPayment:</label>
    <input type="number" id="downpayment" name="downpayment" required><br>
    <label for="interest">Interest(%):</label>
    <input type="number" id="interest" name="interest" step=".01" min="2.15" required><br>
    <label for="period">Period(Years):</label>
    <input type="number" id="period" name="period" min="3" max="30" required><br>
    <button onclick="calculate()">Calculate</button>
</form>
<table class="loanResult">
    
    <tr><td>Price: </td><td id="rPrice" class="result"> </td></tr>
    <tr><td>Down Payment: </td><td id="rDownpayment" class="result"> </td></tr>
    <tr><td>Interest (%):</td><td id="rInterest" class="result"> </td></tr>
    <tr><td>Period (Years):</td><td id="rPeriod" class="result"> </td></tr>
    <tr><td>Mortgage: </td><td id="mortgage" class="result"> </td></tr>
    <tr><td>Total:</td><td id="rTotal" class="result"> </td></tr>
</table>
`;

var form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

function calculate() {

    var values = [document.getElementById('price').value,
        document.getElementById('downpayment').value,
        document.getElementById('interest').value,
        document.getElementById('period').value
    ];
    for (let x = 0; x < values.length; x++) {
        values[x] = parseFloat(values[x]);
    }
    document.getElementById('rPrice').innerHTML = values[0];
    document.getElementById('rDownpayment').innerHTML = values[1];
    document.getElementById('rInterest').innerHTML = values[2];
    document.getElementById('rPeriod').innerHTML = values[3];
    document.getElementById('mortgage').innerHTML = (((values[0] - values[1]) * (1 + (values[2] * .01))) / (values[3] * 12)).toFixed(2);
    document.getElementById('rTotal').innerHTML = ((values[0] - values[1]) * (1 + (values[2] * .01 * values[3]))).toFixed(2);
    document.getElementsByClassName('loanResult')[0].style.opacity = 1;

}
var index = 1;

function plusSlides(n) {
    showphoto(index += n);
}

function showphoto(n) {
    var slides = document.getElementsByClassName('framephoto');

    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}

showphoto(index);