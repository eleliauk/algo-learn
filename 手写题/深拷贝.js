function clone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = clone(source[i]); 
            } else {
                target[i] = source[i];
            }
        }
    }

    return target;
}