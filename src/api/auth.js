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
export function login(loginDTO) {
    return request({
        url: '/note-cloud/user/login',
        method: 'post',
        data: loginDTO
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
export function logout() {
    return request({
        url: '/note-cloud/user/logout',
        method: 'get',
    })
}

