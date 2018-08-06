import fetch from './fetch.js'

// const domin = http://institute.dljy.com/studio/api/page_list
// 获取研究院下所有工作室列表：institute_id: int [必传]page: int [必传] pre_page: int
export function getStudioList(payload){
    return fetch.get('/studio/api/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 获取研究院/工作室最新动态列表
// 研究院URL：http://institute.dljy.com/source/api/institute_latest
// 工作室URL：http://institute.dljy.com/source/api/studio_latest
export function getStudioLatest(payload){
    return fetch.get('/source/api/studio_latest',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}
export function getInstituteLatest(payload){
    return fetch.get('/source/api/institute_latest',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 获取活动列表
// URL：http://institute.dljy.com/activity/api/page_list
// process_status 否 int 0:未开始;1:进行中;2:已结束
export function getActivityList(payload){
    return fetch.get('/activity/api/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}