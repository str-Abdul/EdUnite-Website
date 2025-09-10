# Edunite - Student Consultancy Platform

A modern, responsive web application built with React and Tailwind CSS for student consultancy services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Routing**: React Router for seamless navigation
- **Animations**: Framer Motion for engaging user interactions
- **Contact Form**: React Hook Form with Web3Forms integration
- **Component-Based**: Modular, reusable components

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section component
│   ├── Features.jsx    # Features showcase
│   ├── ContactForm.jsx # Contact form with validation
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── utils/              # Utility functions and constants
│   └── constants.js    # Static data and configuration
├── assets/             # Static assets
│   └── logo.svg        # Edunite logo
├── App.jsx             # Main app component
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-consultancy-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🔧 Configuration

### Web3Forms Setup

To enable the contact form functionality:

1. Visit [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/ContactForm.jsx`

### Tailwind CSS

The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax.

## 📱 Pages

### Home (`/`)
- Hero section with call-to-action
- Features showcase
- Statistics and social proof

### About (`/about`)
- Company mission and vision
- Core values
- Company story and statistics



### Contact (`/contact`)
- Contact form with validation
- Company information
- Office hours and location

## 🎨 Design System

- **Primary Color**: Blue (#2563EB)
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's scale
- **Shadows**: Subtle shadows for depth
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

