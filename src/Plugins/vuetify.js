import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = { icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                accent: '#375f7d',
                secondary: '#e3ecf6',
                tertiary: '#f0f8fa',
                outbound: '#cce09b'
            }
        }
    }}

export default new Vuetify(opts)
