import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
    return request({
        url: '/note-cloud/user/register',
        method: 'post',
        data: userDTO
    })

}
// 登录
export function login(loginInfo) {
    return request({
        url: '/note-cloud/user/login',
        method: 'post',
        data: loginInfo
    })
}
// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/note-cloud/user/info',
        method: 'get',
    })
}
// 退出登录
export function logout(token) {
    return request({
        url: '/note-cloud/user/logout',
        method: 'get',
        params: {
            token: token
        }
    
    })
}

