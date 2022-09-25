import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
    return request({
        url: '/note-cloud/user/register',
        method: 'post',
        data: userDTO
    })

}