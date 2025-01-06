# Webpack React Redux TypeScript Starter

This is a boilerplate for a modern React application using Webpack, TypeScript, Redux, Tailwind CSS, Redux Persist, ESLint, Jest, and React Testing Library. It serves as a starting point for building scalable and maintainable React applications.

## Features 🔧

- **React** with **TypeScript** for type-safe development
- **Redux** with **Redux Toolkit** for efficient state management
- **Tailwind CSS** for utility-first styling
- **Redux Persist** for persisting state across sessions
- **Webpack** for module bundling
- **PostCSS** for modern CSS transformations
- **ESLint** for code linting and maintaining consistent code quality
- **Jest** for unit and integration testing
- **React Testing Library** for testing React components in a user-centric manner

## Prerequisites 📋

Before you begin, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (>= 14.0.0)
- [npm](https://www.npmjs.com/) (>= 6.0.0)

## Installation 🚀

1. Clone this repository:

   ```bash
   git clone https://github.com/dioarafll/WebpackReactBoilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WebpackReactBoilerplate
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   This will start the development server at `http://localhost:8080`. 🌐

5. Build the project for production:

   ```bash
   npm run build
   ```

   The build will be available in the `dist/` folder. 📦

## Library Used 📚

Here are the main libraries used in this project:

### [React](https://reactjs.org/)

React is a JavaScript library for building user interfaces. It enables the development of single-page applications with a component-based architecture. React focuses on the "view" in the MVC (Model-View-Controller) paradigm.

### [TypeScript](https://www.typescriptlang.org/)

TypeScript is a superset of JavaScript that provides static typing. By adding types to JavaScript, TypeScript helps developers write more predictable and error-free code, improving both the development experience and application maintainability.

### [Redux](https://redux.js.org/)

Redux is a predictable state container for JavaScript applications. It helps manage the application's state in a centralized store, ensuring that the state is consistent across different components. In this project, we use **Redux Toolkit** for simplified Redux setup and better developer ergonomics.

### [Redux Toolkit](https://redux-toolkit.js.org/)

Redux Toolkit is the official, recommended library for efficient Redux development. It provides a set of tools to simplify Redux usage, including utilities for creating reducers, actions, and configuring the store. It also helps reduce boilerplate code and improves code maintainability.

### [Redux Persist](https://github.com/rt2zz/redux-persist)

Redux Persist is a library that allows you to persist and rehydrate Redux state between page reloads. It stores the Redux state in a storage engine, such as **localStorage** or **sessionStorage**, so that data remains available even after the user refreshes the page.

### [Tailwind CSS](https://tailwindcss.com/)

Tailwind CSS is a utility-first CSS framework. It provides low-level utility classes that allow developers to build custom designs without writing custom CSS. This makes styling more flexible and maintainable, especially for responsive layouts and custom components.

### [Webpack](https://webpack.js.org/)

Webpack is a module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules. In this project, Webpack is used to bundle JavaScript, CSS, and other assets, as well as to handle the build process.

### [PostCSS](https://postcss.org/)

PostCSS is a tool for transforming CSS with JavaScript plugins. It is used to enable modern CSS features like autoprefixing (with `autoprefixer`), and it works with CSS frameworks like Tailwind CSS to process the styles during the build process.

### [ESLint](https://eslint.org/)

ESLint is a tool for identifying and fixing problems in JavaScript/TypeScript code. It helps maintain a consistent coding style and prevents common programming errors. It is configured to ensure high-quality code and integrates smoothly with TypeScript.

### [Jest](https://jestjs.io/)

Jest is a testing framework developed by Facebook for JavaScript applications. It is used for running unit tests, integration tests, and end-to-end tests. Jest provides a simple API for writing tests and integrates well with modern front-end frameworks like React.

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

React Testing Library is a testing library that provides utilities to test React components in a way that resembles how the user would interact with them. It encourages testing the components in a more realistic manner and avoids testing implementation details.

## Folder Structure 📂

```
/src
  /assets          # Static assets like images, fonts, etc.
  /components      # Reusable React components
  /pages           # React pages or views
  /store           # Redux store and slices
  /styles          # Global styles (Tailwind CSS)
  /utils           # Utility functions
  index.tsx        # Application entry point
  App.tsx           # Main application component
  tailwind.config.js # Tailwind CSS configuration
  postcss.config.js # PostCSS configuration
  webpack.config.js # Webpack configuration
  .eslintrc.js      # ESLint configuration
  jest.config.js    # Jest configuration
  tsconfig.json     # TypeScript configuration
```

## Contributing 🤝

Feel free to submit issues, pull requests, or suggestions for improvements! Contributions are welcome.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

For any questions or feedback, feel free to reach out to me at:

- Email: [dioarafi00@gmail.com](mailto:dioarafi00@gmail.com)
- GitHub: [https://github.com/dioarafll](https://github.com/dioarafll/WebpackReactBoilerplate.git)
