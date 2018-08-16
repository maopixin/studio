export const tips = function(obj){
    let str = '';
    for (const key in obj) {
        str += obj[key]
    };
    return str
};
export const getNavNow = function(obj,id){
    if(!id){
        return false;
    }
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
export const getQuery = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}