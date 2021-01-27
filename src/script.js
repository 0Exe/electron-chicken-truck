function start() {
    let page = document.getElementById("page");
    page.innerHTML = 
    `
    <div style="display:none" id="amounttoadd">1</div>
        <div class="nav">
            <div id="truck">
            <img src="https://imgur.com/AHypY3h.png" width="100px">
            </div>
            <h3 class="counter2" id="counter2">$1 / click</h3>
            <h1 class="counter" id="counter">$0</h1>
            </div>
        
            <div class="clicker" onclick="updateCounter()"><img src="https://imgur.com/343Tu5l.png" class="clickerin"></div>

            <div class="shop" id="shop">
                <div class="item" onclick="buyitem('1', '50')">
                + 1$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('5', '200')">
                + 5$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('10', '500')">
                + 10$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('20', '1000')">
                + 20$ / click <div class="shopbtn">BUY</div>

                <div class="item" onclick="buyitem('50', '5000')">
                + 50$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('100', '16000')">
                + 100$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('250', '70000')">
                + 250$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('500', '120000')">
                + 500$ / click <div class="shopbtn">BUY</div>

                <div class="item" onclick="buyitem('1000', '3000000')">
                + 1000$ / click <div class="shopbtn">BUY</div>


                <div class="item" onclick="buyitem('5000', '1000000')">
                + 5000$ / click <div class="shopbtn">BUY</div>
            </div>

            </div>
    `
}
function updateCounter() {

    let counter = document.getElementById("counter");
    let amounttoadd = document.getElementById("amounttoadd");
    let counter2 = document.getElementById("counter2");
    counter.innerHTML = "$" + String(Number(counter.innerHTML.replace("$", "")) + Number(amounttoadd.innerHTML));
    counter2.innerHTML = `$${amounttoadd.innerHTML} / click`

}

function msp() {
    let start = document.getElementById("startpage");
    start.innerHTML = `
    <div id="page">
        <div class="page">
            <img src="https://imgur.com/AHypY3h.png" width="60px"> <div onclick="start()" class="sbtn"><div class="stext">Start</div></div>
        </div>
    </div>
`
}

function buyitem(item, cost) {
    let amount = document.getElementById("amounttoadd");
    let counter = document.getElementById("counter");
    let shop = document.getElementById("shop");
    let shopbtn = document.getElementById("shopbtn1");
    if (Number(counter.innerHTML.replace('$', '')) - Number(cost) >= 0) {
        counter.innerHTML = "$" + String(Number(counter.innerHTML.replace("$", "")) - Number(cost));
        amount.innerHTML = Number(amounttoadd.innerHTML) + Number(item);

        shop.innerHTML = shop.innerHTML.replace(cost, Math.round(Number(cost) * 1.1 + 50));
    }

}