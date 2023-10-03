function shuffle (mod) {
    var text = document.getElementById ("text");
    mod ++;
    if (mod == 5) {
        var pos = order.shift ();
        fixed [pos] = true;
        mod = 0;
    }
    var result = "";
    for (var i = 0; i < string.length; i ++) {
        if (fixed [i]) result += string [i];
        else result += base [Math.floor (Math.random () * (base.length))];
    }
    text.innerHTML = result;
    if (order.length) setTimeout (shuffle, 40, mod);
}

const base = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const string = "WORK IN PROGRESS";
fixed = [];
order = [];
for (var i = 0; i < string.length; i ++) {
    if (string [i] != ' ') {
        fixed.push (false);
        order.push (i);
    } else fixed.push (true);
}
for (var i = 0; i < order.length; i ++) {
    var pos = Math.floor (Math.random () * (order.length - i));
    var temp = order [order.length - i - 1];
    order [order.length - i - 1] = order [pos];
    order [pos] = temp;
}

setTimeout (shuffle, 40, 0);
