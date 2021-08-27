---
title: Redux-Concept
date: "2020-12-28"
description: "These days I am revising some concept which I learned while doing s....."
path: '/blog/Redux/Redux-Concept'
---

These days I am revising some concept which I learned while doing some projects. These concepts are useful if you are creating any website using react or some other technology. So we know that react uses props and states to manage the design and flow of data on any website. When working on small projects with a simple tree structure, it is easier to maintain the states of the components and pass the data between the components. For this, the data needs to reside in a single component so that it can be passed on to the sibling components. The method needed to update the state also needs to reside in the parent component and be passed to the sibling components as props.  So state management gets messy when the app gets complex. 

Here comes the concept called redux. Redux is an open-source JavaScript library for managing application state. 

![Image From https://miro.medium.com/max/1086/1*a15Fjk16s4CVlfHaTkO73w.png](https://miro.medium.com/max/1086/1*a15Fjk16s4CVlfHaTkO73w.png)

There are some terminology for the Redux.
* Types
* Reducers
* Actions

First of all, we need to create a store where our states will store. To change something in the state, we need to dispatch an action. Actions get the data (or something accordingly) and according to the data, it will call the reducers to change or update the state. Lets understand with an example.

```
import { createStore } from 'redux';
const USER_LOADING = 'USER_LOADING';

const initialState = {
  isLoading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    default:
      return state;
  }
}

const loading = () => (dispatch, getState) => {    //This is action.
  dispatch({
    type: USER_LOADING,
  });
};

const store = createStore(
  rootReducer,
);


```

So here in this example if we need to change the state of isLoading state to true we just need to call the action loading() in the component and it will automatically update the state for all.
This is it for now, if you have any question you can dm me.
Contact shared in my [portfolio](https://prashantpandey.ml/).