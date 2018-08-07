import axios from 'axios'
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response.data) 
    });

// const domin = http://institute.dljy.com/studio/api/page_list
// 获取研究院下所有工作室列表：institute_id: int [必传]page: int [必传] pre_page: int
export function getStudioList(payload){
    return axios.get('/studio/api/page_list',{
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
    return axios.get('/source/api/studio_latest',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}
export function getInstituteLatest(payload){
    return axios.get('/source/api/institute_latest',{
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
    return axios.get('/activity/api/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
};
// 参加活动
export function joinActivity(payload){
    return axios.post('/api/activity_auth/join',{
        params:payload
    }).then(data=>{
        return data.data;
    }).catch(error=>{
        return error;
    })
}
// 获取工作室详情
export function getStudioDetail(payload){
    return axios.get('/studio/api/detail',{
        params:payload
    }).then(data=>{
        return data.data;
    }).catch(erroe=>{
        console.log(error)
    })
}