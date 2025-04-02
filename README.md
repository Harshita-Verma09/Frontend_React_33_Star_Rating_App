# Star Rating Component

This is a simple and interactive star rating component built with React and styled with Tailwind CSS. It allows users to easily rate a product or service by clicking on the stars.

## Features

* **Interactive Star Rating:** Users can click on the stars to select their rating.
* **Hover Effect:** Stars change color and scale up slightly on hover, providing visual feedback.
* **Dynamic Styling:** Uses Tailwind CSS classes for easy customization of appearance.
* **Clear Display:** Shows the current rating or a "Hover to rate" message.
* **React Hooks:** Implements `useState` for managing the rating and hover states.

## Installation

1.  Make sure you have Node.js and npm (or yarn) installed on your system.
2.  If you don't have a React project set up with Tailwind CSS, you'll need to create one. You can use Create React App and then configure Tailwind CSS:

    ```bash
    npx create-react-app my-rating-app
    cd my-rating-app
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Then, configure your `tailwind.config.js` and update your CSS files as per the Tailwind CSS documentation.

3.  Copy the `Star.js` component code into your React project (e.g., in a `components` folder).

## Usage

1.  Import the `Star` component into the React component where you want to use it:

    ```jsx
    import Star from './components/Star'; // Adjust the path if needed
    ```

2.  Render the `Star` component within your JSX:

    ```jsx
    function App() {
      return (
        <div className="App">
          <Star />
        </div>
      );
    }

    export default App;
    ```

## Customization

You can easily customize the appearance of the star rating component by modifying the Tailwind CSS classes within the `Star.js` file:

* **Container Styling:** The outer `div` with the class `flex flex-col items-center space-y-3 p-6 bg-white shadow-md rounded-lg w-72` controls the overall layout, spacing, background, shadow, rounded corners, and width.
* **Heading:** The `h2` element with classes `text-lg font-semibold text-gray-700` styles the rating title.
* **Star Styling:** The `span` element containing the star character uses classes like `cursor-pointer`, `transition-all`, `duration-300`, `text-yellow-400`, `scale-110`, `drop-shadow-lg`, and `text-gray-300` to control the appearance, hover effects, and colors of the stars. You can change the colors, size, and transition properties here.
* **Rating Text:** The `p` element with classes `text-sm text-gray-600` styles the text that displays the current rating or the "Hover to rate" message.

Feel free to adjust these classes to match your application's design.

## Example

Here's a basic example of how you might use this component in an `App.js` file:

```jsx
import React from 'react';
import Star from './components/Star';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Star />
    </div>
  );
}

export default App;
