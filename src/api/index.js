import axios from 'axios'
import qs from 'qs'
// 获取研究院下所有工作室列表：institute_id: int [必传]page: int [必传] pre_page: int
export function getStudioList(payload){
    return axios.get('/studio/api/page_list',{
        params:payload
    }).then(data=>{
        return data.data
    }).catch(error=>{
        console.log(error)
    })
}