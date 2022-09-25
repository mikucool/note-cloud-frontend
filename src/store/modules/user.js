import { login, getUserInfo, logout } from "@/api/auth";

const state = {
  user: "", // 用户对象
};

// state 只能利用 mutations 进行改变
const mutations = {
  SET_USER_STATE: (state, user) => {
    state.user = user;
  },
};

const actions = {
  // 用户登录
  // 参数：{ commit } 向 mutations 提交设置请求
  // 参数： userInfo 是接收的参数
  login({commit}, userInfo) {
    commit('SET_USER_STATE', userInfo)
    // 取出参数的三个属性
    const { username, password, rememberMe } = userInfo;
    // es6 的 许诺
    return new Promise((resolve, reject) => {
      
      // 调用 登录方法，向服务器发送请求
      login({ username: username.trim(), password: password, rememberMe: rememberMe })
        .then((response) => {
          // 收到回应登录成功，并进行处理
          console.log(response);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((response) => {
          const { data } = response;
          console.log(data)
          if (!data) {
            commit('SET_USER_STATE', '')
            resolve()
            reject('Verification failed, please Login again')
          }

          commit('SET_USER_STATE', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 注销
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then((response) => {
          console.log(response);
          commit("SET_USER_STATE", "");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
