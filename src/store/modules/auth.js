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
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push({ name: 'homePage' });
        })
        .catch(function(error) {
          alert(error.message);
          commit('setUser', null);
          commit('setIsAuthenticated', false);
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push({ name: 'homePage' });
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          throw new Error('Credential incorrect');
          //router.push({ name: 'homePage' });
        });
    },
    userSignOut({ commit, getters }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          console.log(getters.isAuthenticated);
          //router.push({ name: 'homePage' });
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          //router.push('/');
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined
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
