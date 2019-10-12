//import { firebaseAuth } from '../../config/firebase';
import firebase from 'firebase';
import router from '@/routes';

const auth = {
  namespaced: true,

  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    userRegister({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          // commit('setUser', user);
          // commit('setIsAuthenticated', true);
          router.push({ name: 'homePage' });
        })
        .catch(function(error) {
					
					
          commit('setUser', null);
					commit('setIsAuthenticated', false);
					throw new Error('Credential incorrect');

        });
    },
    userLogin(_, { email, password }) {
			firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
					router.push({ name: 'homePage' });
        })
        .catch(err => {
					//this.error = err.message;
					throw new Error('Credential incorrect');
        });
      
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
					//show message;
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
         
        });
    },
    fetchUser({commit}, user) {
			//console.table(user)
			commit('setIsAuthenticated', user !== null);
			user ? commit('setUser', user.email) : commit('setUser', null)
        
    
		}
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
    currentUser(state) {
      if (state && state.user) {
        return {
          email: state.user.email,
          emailVerified: state.user.emailVerified,
          uid: state.user.uid
        };
      } else {
        return {};
      }
    }
  }
};

export default auth;
