import Vue from "vue";
import Vuex from "vuex";

import error from "../store/modules/errors";
import log from "../store/modules/logs";
import statistic from "../store/modules/statistics";
import * as notification from "@/store/modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    error,
    log,
    statistic,
    notification
  }
});
