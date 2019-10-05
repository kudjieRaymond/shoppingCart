import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import AppNavigation from '@/components/AppNavigation.vue';

const localVue = createLocalVue();

describe('AppNavigation.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('show the name of the app', () => {
    //const title = 'Buy-Something';
    const wrapper = mount(AppNavigation, {
      localVue,
      vuetify
		});
		
    expect(wrapper.html()).toMatchSnapshot();

    //const title = wrapper.find('.v-toolbar-title');

    //expect(title.text()).toBe('Buy-Something');
    //const div = wrapper.find('div .v-toolbar__title');
    //expect(wrapper.contains('v-toolbar-title')).toBe(true);
  });
});
