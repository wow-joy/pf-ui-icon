import { createApp } from 'vue';
import * as AntdIcons from '../src/icons';
import './index.less';

const allIcons = AntdIcons;

const iconsList = Object.keys(allIcons).map(iconName => allIcons[iconName]);

const AllIconDemo = {
  data() {
  },
  computed: {
    Icons() {
      return iconsList
        .map(Component => (
          <div class="card" key={Component.displayName}>
            <Component style={{ fontSize: '24px' }} />
            <p class="name-description">{Component.displayName}</p>
          </div>
        ));
    },
  },
  methods: {
    handleSelectChange(e) {
      const value = e.currentTarget.value;
      this.currentTheme = value;
    },
  },
  render() {
    console.log(this.currentTheme);
    return (
      <div class="all-icons-wrap" style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>All Icons</h1>
        <div class="container">{this.Icons}</div>
      </div>
    );
  },
};

createApp(AllIconDemo).mount('#root');
