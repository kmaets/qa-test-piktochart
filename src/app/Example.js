export function doSomething(a, b) {
    if (a < 100) {
        if (b > 0) {
            return 'You can open the window';
        } else {
            return 'You cannot open the window';
        }
    } else if (a >= 100 && a < 500) {
        return 'You are allowed to open the doors';
    } else {
        return 'You are allowed to turn on the light';
    }
}
