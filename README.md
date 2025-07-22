## React.js spoonacular Recipe App

This project was built by following Tech With Tim's **"Learn React With This ONE Project"** using a different API and topic to practice my understanding.
(uploaded November 24, 2024)

Watch the video [HERE](https://www.youtube.com/watch?v=G6D9cBaLViA&ab_channel=TechWithTim)

---

## spoonacular Recipe App

This is a recipe search API web app built as a follow-up from Tech With Tim's YouTube course. The project was developed using **React.js** and the [**spoonacular API**](https://spoonacular.com/food-api). The UI is styled with same **Custom CSS** from my movie-api-app. This project was done in order to code and understand the **React.js** concepts that I wasn't fully sure and confident on.

---

## Description

This app allows users to search for recipes via the spoonacular API. Similar to the movie-api-app I built following along, the styles and layout are exactly the same but uses a different API. Everytime the user reloads the page, it displays 20 different popular recipes. You can heart recipes to add them to your favorites list. In addition to these base features, I added a feature of clicking into recipes for exact details (preparation duration, ingredients, description of recipe, procedural steps) of the recipe. 

### Features
- **Recipe Search** 
- **Popular Recipes**
- Each recipe displays:
  - Poster
  - Title
  - Ready In Minutes Value
- **Loading...** text
-  Responsive layout with **Custom CSS**

---

## Tech Stack

- **React.js**
- **Custom CSS**
- **spoonacular API**

---

## Concepts Learned

<details>
<summary>Click to view concepts</summary>

- Custom CSS setup 
- React hooks:  
  - `useState`  
  - `useEffect`  
- Working with third-party APIs (spoonacular)  
- Routing for different tabs

</details>

---

## Deployment

This project is deployed on **Vercel**. You can visit the live site [here](https://recipe-api-web-app-s4fp.vercel.app/).

---

## Installation

1. Clone the repo  
```bash
git clone https://github.com/TomChimorin/recipe-api-web-app.git
```

2. Navigate to the project directory 
  ```bash
   cd recipe-web-app
  ```

3. Install dependencies
  ```bash
   npm install
  ```
4. Run the development server
  ```bash
   npm run dev
  ```
5. Open the deployed app in your browser at: https://recipe-api-web-app-s4fp.vercel.app/
