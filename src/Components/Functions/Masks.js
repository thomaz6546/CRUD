export const phoneMask = (value) => {
    let aux = value
    let a = aux.replace(/[^0-9]/g, '');
    switch (a.length) {
        case 0:
            a = ''
            break;
        case 1:
            a = a.charAt(0)
            break;
        case 2:
            a = a.charAt(0) + a.charAt(1)
            break;

        case 3:
            a = '(' + a.charAt(0) + a.charAt(1) + ') ' + ' ' + a.charAt(2);
            break;

        case 4:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3);
            break;

        case 5:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4);
            break;

        case 6:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5);
            break;

        case 7:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6);
            break;

        case 8:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6) + '-' + a.charAt(7);
            break;

        case 9:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6) + '-' + a.charAt(7) + a.charAt(8);
            break;

        case 10:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6) + '-' + a.charAt(7) + a.charAt(8) + a.charAt(9);
            break;

        case 11:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6) + '-' + a.charAt(7) + a.charAt(8) + a.charAt(9) + a.charAt(10);
            break;
        default:
            a = '(' + a.charAt(0) + a.charAt(1) + ')' + ' ' + a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5) + a.charAt(6) + '-' + a.charAt(7) + a.charAt(8) + a.charAt(9) + a.charAt(10);

    }
    return a

}

export const cpfMask = (value) => {
    let auxTwo = value
    let a = auxTwo.replace(/[^0-9]/g, '')
    let b = a
    switch (b.length) {
        case 0:
            a = ''
            break;
        case 1:
            b = b.charAt(0)
            break;

        case 2:
            b = b.charAt(0) + b.charAt(1)
            break;

        case 3:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2)
            break;

        case 4:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3)
            break;

        case 5:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4)
            break;

        case 6:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5)
            break;

        case 7:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6)
            break;

        case 8:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6) + b.charAt(7)
            break;

        case 9:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6) + b.charAt(7) + b.charAt(8)
            break;

        case 10:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6) + b.charAt(7) + b.charAt(8) + "-" + b.charAt(9)
            break;

        case 11:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6) + b.charAt(7) + b.charAt(8) + "-" + b.charAt(9) + b.charAt(10)
            break;

        default:
            b = b.charAt(0) + b.charAt(1) + b.charAt(2) + "." + b.charAt(3) + b.charAt(4) + b.charAt(5) + "." + b.charAt(6) + b.charAt(7) + b.charAt(8) + "-" + b.charAt(9) + b.charAt(10)

    }
    return b;
}


export const dateMask = (value) => {
    let aux = value
    let a = aux.replace(/[^0-9]/g, '');
    switch (a.length) {
        case 0:
            a = ''
            break;
        case 1:
            a = a.charAt(0)
            break;

        case 2:
            a = a.charAt(0) + a.charAt(1)
            break;

        case 3:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2)
            break;

        case 4:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3)
            break;

        case 5:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3) + "/" + a.charAt(4)
            break;

        case 6:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3) + "/" + a.charAt(4) + a.charAt(5)
            break;

        case 7:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3) + "/" + a.charAt(4) + a.charAt(5) + a.charAt(6)
            break;

        case 8:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3) + "/" + a.charAt(4) + a.charAt(5) + a.charAt(6) + a.charAt(7)
            break;

        default:
            a = a.charAt(0) + a.charAt(1) + "/" + a.charAt(2) + a.charAt(3) + "/" + a.charAt(4) + a.charAt(5) + a.charAt(6) + a.charAt(7)

    }
    return a

}
