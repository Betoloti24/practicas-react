import { createMachine, assign } from 'xstate';

export const sesionMachine = createMachine({
  id: 'sesionDataFetch',
  initial: 'unauthorized',
  context: {
    user: null,
    password: null
  },
  states: {
    unauthorized: {
      entry: 'logout',
      on: {
        VERIFYYING: { target: 'verifying' }
      }
    },
    verifying: {
      on: {
        AUTHORIZED: { target: 'authorized'},
        UNAUTHORIZED: { target: 'unauthorized' }
      }
    },
    authorized: {
      entry: 'login',
      on: {
        UNAUTHORIZED: { target: 'unauthorized' }
      }
    }
  }
}, {
  actions: {
    login: assign((context, event) => {
      const data = context.event.data;
      document.cookie = `state=authorized;`;
      return { user: data.user, password: data.password };
    }),
    logout: assign((context, event) => {
      return { user: null, password: null };
    })
  }
});

