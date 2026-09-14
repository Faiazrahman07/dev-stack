# Dev Stack

Dev Stack is a web application where users can explore different development technologies and create their own technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

- Explore different development technologies
- Add and remove technologies from your own stack
- Responsive design for mobile, tablet, and desktop

## Questions & Answers

### 1. What is JSX and why do we use it?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript or TypeScript.

We use JSX because it makes creating and managing UI easier in React.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data inside a component.

### 3. What is useState and where did you use it?

`useState` is a React Hook used to store data that can change over time.

I used `useState` to manage the selected technologies in the user's stack.

### 4. What is useEffect and why is it useful?

`useEffect` is a React Hook used to perform side effects.

It can be used to fetch data when a component loads.

### 5. Why do we need a unique key when using map()?

A unique key helps React identify which items have changed, been added, or removed from a list.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

For example, when the stack is empty, I show:

"Your stack is empty."

When technologies are added, the selected technologies are shown instead.

### 7. How does data flow from parent to child and child to parent?

Data can be passed from parent to child using props.

For child to parent communication, the parent can pass a function as a prop, and the child can call that function to send data back to the parent.