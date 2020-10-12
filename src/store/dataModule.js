

const state = {
    data: null,
    selectedMonitor: 0,
};

const getters = {
    getMonitorTypes: (state) => state.data.MonitorType,
    getMonitors: (state) => (monitorTypeId) => {
        return state.data.Monitor.filter(monitor=>monitor.MonitorTypeId === monitorTypeId);
    },
    getLegend: (state) => {
        let m = state.data.Monitor.find(monitor=>monitor.Id === state.selectedMonitor);
        m = state.data.MonitorType.find(monitorType=>monitorType.Id === m.MonitorTypeId);
        return state.data.Legends.find(legend=>legend.Id === m.LegendId);
    },
    getSelectedMonitor: (state) => {
        return state.data.Monitor.find(monitor=>monitor.Id === state.selectedMonitor);
    },
};

const actions = {
    fetchData({commit}, data) {
        commit('setData', data);
    },
    setMonitor({commit}, monitor) {
        commit('setMonitor', monitor);
    },
};

const mutations = {
    setData: (state, data) => {
        state.data = data;
    },
    setMonitor: (state, monitor) => {
        state.selectedMonitor = monitor;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}