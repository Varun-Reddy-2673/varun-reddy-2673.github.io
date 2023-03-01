let stringArray = [
    ['Hey there!', 'I am Varun Reddy Padala.', 'Welcome to my website! :)'],
    ['Bonjour!', 'Je suis Varun Reddy Padala.', 'Bienvenue sur mon site web! :)'],
    ['Hola!', 'Soy Varun Reddy Padala.', 'Bienvenidos a mi sitio web! :)'],
    ['Hallo!', 'Ich bin Varun Reddy Padala.', 'Willkommen auf meiner Website! :)'],
    ['Namaste!', 'Main Varun Reddy Padala hoon.', 'Mera website pe aapka swaagat hai! :)']
];

function editText (a, b, c) {
    const text = document.getElementById ('h1-text-' + (b + 1));
    text.innerHTML = stringArray [a] [b].slice (0, c + 1);
    var repeat = true;
    if (c == stringArray [a] [b].length - 1) {
        b += 1;
        c = 0;
        if (b == stringArray [a].length) {
            repeat = false;
            a += 1;
            if (a == stringArray.length) {
                a = 0;
            }
            setTimeout (resetText, 3000, a);
        }
    } else {
        c += 1;
    }
    if (repeat) {
        setTimeout (editText, 120, a, b, c);
    }
}

function resetText (a) {
    for (var index = 0; index < 3; index ++) {
        const text = document.getElementById ('h1-text-' + (index + 1));
        text.innerHTML = '';
    }
    setTimeout (editText, 120, a, 0, 0);
}

setTimeout (editText, 120, 0, 0, 0);
