window.onload = function() {
    document.getElementsByTagName('header')[0].innerHTML = `
    <ul id="navbar-items">
            <li class="logo"><img src="/Belle Maison/img/logo.png" alt="Belle Maison Logo"></li>
            <li class="navbar-list"><a href="index.html">Home</a></li>
            <li class="navbar-list menu">Properties
                <ul class="submenu">
                    <li><a href="house.html">Houses</a></li>
                    <li><a href="condos.html">Condos</a></li>
                </ul>
            </li>
            <li class="navbar-list"><a href="clientInfo.html">Client Info</a></li>
            <li class="actualDate"> </li>
        </ul>`;
    document.getElementsByTagName('footer')[0].innerHTML = `
    <span>&copy;Belle Maison</span>`;

    showDate();
}

function showDate() {
    var date = new Date(),
        fullDate = (date.toDateString()).split(' ');

    document.getElementsByClassName('actualDate')[0].innerHTML = `${ fullDate[ 0 ] } ${ fullDate[ 2 ] } ${ fullDate[ 1 ] } ${ fullDate[ 3 ] }`;
}