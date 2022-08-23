## Introduction

This project was created as a simulation of ecommerce web app. Data displayed are fetched from several endpoints provided by [FakeProducts API](https://fakestoreapi.com/). Thanks to Web Storage API, all the data inputs from users are maintained across multiple open browser windows or after refreshing/restarting the app.

## Screenshot
![alt text](https://i.postimg.cc/yYV2Mvgh/n-t1.png)

## Functionality

Users can:
- browse between products by their different categories
- search for specific product or its keyword mentioned in products description
- view specific product, its description, price and rating
- add product to cart on product page
- modify quantity on cart page
- open web app in several browser tabs with cart contents maintained (localStorage)
- finish the order which empties the cart

## Built with

- JavaScript
- CSS
- React - Functional components, Hooks (useState, useEffect, useContext, useRef) + few custom hooks
- Axios
- React Router v6
- Web Storage API
- [FakeProducts API](https://fakestoreapi.com/)

## Getting started

In the project directory, you must run:

### `npm install`

Command for installing all packages and necessary dependencies.

### `npm start`

Launches the app the development mode and opens [http://localhost:3000](http://localhost:3000) automatically.

## Link

https://needful-things.herokuapp.com/
