export const tips = function(obj){
    let str = '';
    for (const key in obj) {
        str += obj[key]
    };
    return str
};
export const getNavNow = function(obj,id){
    for (let i = 0; i < obj.length; i++) {
        if(obj[i].id==id){
            return obj[i];
        }
    };
    if(obj.length>0){
        return false;
    }else{
        return {child:[]}
    }
};
