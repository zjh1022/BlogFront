const state = {
    /**
     * 备案号
     */
    F_ICP: '粤ICP备18120120号-1',
    F_Title: 'Jianghai\'Blog',
    F_Title_Desc: '欢迎来到我的博客',
    /**
     * 版权
     */
    F_Copyright: "版权所有 © 2022",
    F_Copyright_Desc_En: "All content is made available under the CC BY-NC 4.0 for non-commercial use. Commercial use of this content is prohibited without explicit permission.",
};

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
};

const actions = {
    changeSetting({commit}, data) {
        commit('CHANGE_SETTING', data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

