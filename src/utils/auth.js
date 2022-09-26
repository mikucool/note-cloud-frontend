import Cookies from 'js-cookie'

const uToken = 'u_token'

// 获取Token
export function getToken() {
    return Cookies.get(uToken);
}

// 设置Token，1天,与后端同步
export function setToken(token) {
    return Cookies.set(uToken, token, {expires: 1})
}

// 删除Token
export function removeToken() {
    return Cookies.remove(uToken)
}
// 用于退出登录时删除所有 cookie
export function removeAll() {
    return Cookies.Cookies.removeAll()
}
