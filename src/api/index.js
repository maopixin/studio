import axios from 'axios';
axios.defaults.withCredentials = true;
// 请求拦截器，后端无法识别请求，加上xhr特征码

axios.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 服务器响应拦截器 在出错是拦截错误 根据状态码 添加不同的错误信息
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    err.message = `请求地址出错`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }

        return Promise.reject(err)
    }
);

// const domin = http://institute.dljy.com/studio/api/page_list

// 获取研究院下所有工作室列表：institute_id: int [必传]page: int [必传] pre_page: int
export function getStudioList(payload) {
    return axios.get('/studio/api/page_list', {
        params: payload
    }).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
};
// http://institute.dljy.lzdev/api/index/index?studio=1
// 获取首页所有内容

export function getStudioAllInfo(payload) {
    return axios.get('/api/index/index', {
        params: payload
    }).then(data => {
        return data.data
    })
};

// 获取研究院/工作室最新动态列表
// 研究院URL：http://institute.dljy.com/source/api/institute_latest
// 工作室URL：http://institute.dljy.com/source/api/studio_latest
export function getStudioLatest(payload) {
    return axios.get('/source/api/studio_latest', {
        params: payload
    }).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
}
export function getInstituteLatest(payload) {
    return axios.get('/source/api/institute_latest', {
        params: payload
    }).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
};
// 获取活动列表
// URL：http://institute.dljy.com/activity/api/page_list
// process_status 否 int 0:未开始;1:进行中;2:已结束
export function getActivityList(payload) {
    return axios.get('/activity/api/page_list', {
        params: payload,

    }).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
};
// 参加活动
export function joinActivity(payload) {
    return axios.post('/api/activity_auth/join', payload).then(data => {
        return data.data;
    }).catch(error => {
        return error;
    })
}
// 取消参加活动
export function quitActivity(payload) {
    return axios.post('/api/activity_auth/quit', payload).then(data => {
        return data.data;
    }).catch(error => {
        return error;
    })
}
// 获取工作室详情 
// id 工作室id
export function getStudioDetail(payload) {
    return axios.get('/studio/api/detail', {
        params: payload
    }).then(data => {
        return data.data;
    }).catch(error => {
        console.log(error)
    })
}
// 获取工作室下所有成员
// duty_code	否	int	头衔编码【1：管理员；2：学科带头人；3：普通成员；4：专家；5：助教
// _sort	否	string	排序 【积分正序：+integral；积分倒序 -integral
export function getStuidoMembers(payload) {
    return axios.get('/api/member/studio', {
        params: payload
    }).then(data => {
        return data.data;
    }).catch(error => {
        console.log(error)
    })
}

// 关注用户:
// URL：http://institute.dljy.com/api/follow/confirm
export function followPerson(payload) {
    return axios.post('/api/follow/confirm', payload).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
}
// 取消关注
export function followCancel(payload) {
    return axios.post('/api/follow/cancel', payload).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
}
// 获取用户信息
export function getUserInfo(payload) {
    return axios.get('/api/user/info', {
        params: payload,
        headers: {
            isAjax: true
        }
    }).then(data => {
        return data.data
    }).catch(error => {
        console.log(error)
    })
}

// 获取研究院/工作室下所有栏目
export function getCategory(payload) {
    return axios.get('/api/index/nav', {
        params: payload
    }).then(data => {
        return data.data
    })
}
// 获取研究院/工作室数据列表
// /source/api/studio_data
export function getStudioData(payload) {
    return axios.get('/source/api/studio_data', {
        params: payload
    }).then(data => {
        return data.data
    })
}

// 获取工作室状态信息
export function getStudioState(payload) {
    return axios.get('/api/Imitation/data', {
        params: payload
    }).then(data => {
        return data.data;
    })
}
// 获取工作室数据
export function getStudioObj(payload) {
    return axios.get('/api/index/more', {
        params: payload
    }).then(data => {
        return data.data;
    })
}
// 获取活动详情
export function getActivityDetail(payload) {
    return axios.get('/activity/api/detail', {
        params: payload
    }).then(data => {
        return data.data;
    })
}
// 获取已参与活动
export function getUserJoined() {
    return axios.get('/api/activity_auth/user_joined').then(data => {
        return data.data;
    })
}
// 添加评论
export function activityUserComment(payload) {
    return axios.post('/api/activityUserComment/create', payload).then(data => {
        return data.data;
    })
}
// 添加评价
export function activitiyUserAppraisal(payload) {
    return axios.post('/api/activityUserAppraisal/create', payload).then(data => {
        return data.data;
    })
}
// 获取更多课程
export function getLessonMore(payload) {
    return axios.get('/api/schoolRoom/more', {
        params: payload
    }).then(data => {
        return data.data;
    })
}

export function getLessonIndex(payload) {
    return axios.get('/api/schoolRoom/index', {
        params: payload
    }).then(data => {
        return data.data;
    })
}

// /api/studio/registry
export function studioApply(payload) {
    return axios.post('/api/studio/registry', payload).then(data => {
        return data.data;
    })
}

// /api/user/joinStudio
export function studioJoin(payload) {
    return axios.post('/api/user/joinStudio', payload).then(data => {
        return data.data;
    })
}
