# Aulakh Electronics Website

This is a modern, responsive website built for Aulakh Electronics using React and Tailwind CSS. It showcases both consumer electronics retail and industrial automation imports.

## Features

- **Product Catalog**: Categorized listing of Home Appliances, Robotics, and Industrial Automation.
- **Global Sourcing Section**: Highlights international trade connections.
- **Contact Form**: Integrated inquiry form for potential clients.
- **Responsive Design**: Fully mobile-friendly layout.

## Deployment on Vercel

To deploy this website to Vercel, follow these steps:

### Option 1: Vercel CLI (Recommended for quick deployment)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   Run the following command in the project root directory:
   ```bash
   vercel
   ```
   Follow the prompts to configure the project. Vercel will automatically detect that this is a Vite/React application.

### Option 2: GitHub Integration

1. Push this code to a GitHub repository.
2. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New...** -> **Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect the framework (Vite).
6. Click **Deploy**.

## Configuration

The included `vercel.json` file ensures that all routes are correctly handled by the Single Page Application (SPA) routing logic, redirecting requests to `index.html`.

## Development

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
