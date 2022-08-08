const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (expr.length$10) {
        alert('error');
    } else {
        let string = '';
        for (let i = 0; i <= expr.length - 10;) {
            let letter = expr.substr(i, 10);
            string = string + decodeSymbl(letter);
            i = i + 10;
        }
        return string;
    }

}

function decodeSymbl(expr) {
    let dot = '.';
    let dash = '-';
    let result = ''; 

    for (let i = 0; i < 10;) {
        let exstr = expr.substr(i, 2);
        if (exstr === '10') {
            result = result + '.';
            i = i + 2;
        } else if (exstr === '11') {
            result = result + '-';
            i = i + 2;
        } else if (exstr === '**') {
            return ' ';
        } else {
            i += 2;
        }
    }
    return MORSE_TABLE[result];
}

module.exports = {
    decode
}   