import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import AppNavigation from '@/components/AppNavigation.vue';
import Vuex from 'vuex'
import auth from '@/store/modules/auth';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AppNavigation.vue', () => {
	let vuetify;
	let store;
	let state;

  beforeEach(() => {
		vuetify = new Vuetify();
		state= {
			isAuthenticated: true,
			user:{
				email:'johndoe@gmail.com'

			}
		}
		store = new Vuex.Store({
			modules:{
				auth:{
					state,
					getters:auth.getters

				}
			}
		})
  });
  it('show the name of the app', () => {
    //const title = 'Buy-Something';
    const wrapper = mount(AppNavigation, {
      localVue,
			vuetify,
			store
		});
		
			expect(wrapper.html()).toMatchSnapshot();

    //const title = wrapper.find('.v-toolbar-title');

    //expect(title.text()).toBe('Buy-Something');
    //const div = wrapper.find('div .v-toolbar__title');
    //expect(wrapper.contains('v-toolbar-title')).toBe(true);
  });
});
