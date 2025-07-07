# Product Listing App – Case Study Project

This is a full-stack product listing application developed as part of a case study assignment. The project includes both a **Node.js/Express backend** and a **React frontend**. The application displays a list of products along with dynamic pricing based on real-time gold prices.

---

## Project Overview

### Objective

Build a product listing application consisting of:

-  A **backend API** serving product data and calculating dynamic prices.
-  A **frontend interface** that displays product information with carousel, filtering, and color selection features.

---

## Features

### Backend (Node.js + Express)

- Serves product data from a local JSON file.
- Calculates product prices using the formula:
price = (popularityScore + 1) * weight * goldPrice


- Fetches real-time gold price from [goldapi.io](https://www.goldapi.io).
- Provides filtering by:
- Price range (`minPrice`, `maxPrice`)
- Popularity score (`minPopularity`, `maxPopularity`)

### Frontend (React + Tailwind CSS)

- Fetches product data from backend API.
- Displays products in a responsive carousel (desktop and mobile).
- Shows product name, price (in USD), and popularity score (out of 5).
- Includes a **color picker** to switch between product images.
- Implements a **filter component** for dynamic query-based product filtering.
- Carousel supports arrows and swiping gestures.

---

## ⚙️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | React, Tailwind CSS, React Slick    |
| Backend     | Node.js, Express, Axios             |
| API         | Gold API (https://www.goldapi.io)   |
| Deployment  | Render (Backend & Frontend)         |
| Version Control | Git & GitHub                    |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/esrefyapici/Case-Study.git
cd Case-Study

*** Backend Setup
cd backend
npm install

Create a .env file in backend/ with the following:
GOLD_API_KEY=your_goldapi_key
PORT=5001

npm start

*** Frontend Setup
cd frontend
npm install
npm run dev

