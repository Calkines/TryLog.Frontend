let nextId = 1;
export const namespaced = true;
export const state = {
  notifications: []
};
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      ntfy => ntfy.id !== notificationToRemove.id
    );
  }
};
export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  remove({ commit }, notificationToRemove) {
    commit("DELETE", notificationToRemove);
  }
};
export const gatters = {};
