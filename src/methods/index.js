export const tips = function(obj){
    let str = '';
    for (const key in obj) {
        str += obj[key]
    };
    return str
}
