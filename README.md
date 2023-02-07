# Plush Pals - eShop <!-- omit in toc -->

> Matthew Chhay's imaginary eCommerce website.
> [Open Live Preview](https://chhaymatt.github.io/plushpals/)

## Preview <!-- omit in toc -->

![Preview of Matthew Chhay's eShop website](https://i.imgur.com/TPHIERK.png)

## Table of Contents <!-- omit in toc -->

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Screenshots](#screenshots)
-   [MVP](#mvp)
-   [Going beyond the MVP](#going-beyond-the-mvp)
-   [Setup](#setup)
    -   [For viewing locally and further development](#for-viewing-locally-and-further-development)
    -   [For publishing to GitHub Pages after initial setup](#for-publishing-to-github-pages-after-initial-setup)
-   [Tools Used](#tools-used)
-   [Project Status](#project-status)
-   [Room for Improvement](#room-for-improvement)
-   [Acknowledgements](#acknowledgements)

## Introduction

An eCommerce website where a user can view products. Built using React JS, React Router and Google Firestore database.

## Features

-   Browse a range of products
-   Ability to add and remove products from the bag
-   Interactive carousel of featured products

## Technologies Used

-   React JavaScript with Vite
-   React Router
-   SCSS/CSS
-   Google Firestore

## Screenshots

![A product page](https://i.imgur.com/8f0gCU0.png)
![A bag page](https://i.imgur.com/HUMimHq.png)
![Responsive design](https://i.imgur.com/NJzbTJI.png)

## MVP

-   Contains at least two pages (homepage and products page)
-   Homepage contains a grid of products and a carousel of featured products
-   All product information is stored in Firestore
-   Product information contains quantity, variants, price, name, image url, favourited or not

## Going beyond the MVP

-   Has a cart/bag page allowing users to view their added to bag products or remove products from the bag

## Setup

### For viewing locally and further development

1. Git clone this repo `git clone git@github.com:chhaymatt/plushpals.git`
2. Create `config` folder inside `/src` and paste Plush Pal specific code from firebase
3. Run `npm install`
4. Run `npm run dev`

### For publishing to GitHub Pages after initial setup

1. Run `bash deploy.sh`

## Tools Used

-   Vite - creating a starting React app.
-   React Router - for navigating to other products and pages.
-   Google Firebase/Firestore - all product information is stored in a database.
-   Prettier - to tidy up code in spacing and structure. [Get Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   Favicon.io - generate a favicon. [Generate favicon](https://favicon.io/favicon-generator/)
-   Meta Tags - generate metadata. [Generate metadata](https://metatags.io/)
-   Coolors - colour palette generator. [Generate colour palette](https://coolors.co/generate)
-   Google Fonts - a library of free fonts. [Get Google Fonts](https://fonts.google.com/)

## Project Status

Project is ongoing

## Room for Improvement

-   [x] Hamburger navigation for better responsiveness
-   Check if an existing product/variant/size is in the cart and should increase the quantity by 1
-   Bag should calculate the total
-   Change database structure and link each variant to a product image
-   Change the main product image based on the variant and size and associate it with the bag image
-   Carousel should automatically go to the next featured product after 5 seconds
-   User should be able to sort products alphabetically and based on rating, reviews and starting price
-   User should be able to add/remove a product from their favourites

## Acknowledgements

-   Subtle Asian Treats - for all product images and information
