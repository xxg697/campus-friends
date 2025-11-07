import { createApp } from 'vue'
import App from './App.vue'
import {Icon, NavBar, Tabbar, TabbarItem} from 'vant';

const app = createApp(App);

app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app');

