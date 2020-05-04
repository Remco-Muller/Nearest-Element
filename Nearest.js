function nearestElement(n, arr) {
    return arr.indexOf(arr.reduce((a, b, c)=> (Math.abs(b - n) < Math.abs(a - n) ? a = b:(c == 0 ? a = b:(Math.abs(b - n) == Math.abs(a - n) ? (b > a ? a = b: a):a)))))
}