let mutations = {
    // 侧边栏折叠
    hadndleCollapse(state, data) {
        state.collapse = data;
    },
    setTagsItem(state, data) {
        state.tagsList.push(data)
    },

}
export default mutations
