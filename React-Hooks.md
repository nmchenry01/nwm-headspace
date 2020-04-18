# React Native Hooks

## Articles

- <https://reactjs.org/docs/hooks-intro.html>
- <https://www.youtube.com/watch?v=eX_L39UvZes>

## Description

Hooks are an improvement to the React ecosystem that offers improvements over the previous class-based paradigm. The motivation behind hooks is to reduce boilerplate and simplify the React code that is being written, by allowing you to reuse stateful logic without modifying your component hierarchy (think removing HOCs). Hooks are used in the body of function components, and can not be used with classes. Ultimately, hooks are functions that let you “hook into” React state and lifecycle features from function components. When writing custom hooks, it is common practice to name them with the `use` prefix (for example `useTasks`).

## Hook Types

- **useState** - The useState function takes in an initial state and returns a pair of values, one of which is the state value and the other a function used for updating it. It is used with the array destructuring syntax. It is incredibly useful for setting and updating state in a component.

- **useEffect** - The purpose of useEffect is to allow side effects to occur within a component (such as an API call, subscription, or DOM manipulation). Whereas previously these things would be handled in lifecycle methods (componentWillMount, componentDidMount, etc), this functionality is now available through useEffect. useEffect takes a function that will be run after the component renders, and can optionally return a function that handles cleanup or a second paramater of an array of variables to watch and only re-run when those variables change. If the array is empty, it is analgous to putting a side effect in componentDidMount and componentWillUnmount (indicating it never needs to re-run).

- **useContext** - Takes in a React context object and returns the current context value for that context. Good for working with React Context.

- See the [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#usecontext) for info on other hooks! Note, there are some for working with Redux as well.

## Code Examples

### useState

```Javascript
import React, { useState } from 'react'

export const myComponent = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <div>
      <p>isVisible ? 'This text is visible': '' </p>
      <button onClick={() => setIsVisible(isVisible ? false : true)}>Click me</button>
    </div>
  )
}
```

### useEffect

```Javascript
import React, { useState, useEffect } from 'react'

export const myComponent = () => {
  const [ count, setCount ] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```
