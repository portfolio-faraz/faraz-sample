// Main routes configuration
// This file will be used when react-router-dom is properly installed

export const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.jsx'),
    name: 'Home'
  },
  {
    path: '/home',
    component: () => import('../pages/HomePage.jsx'),
    name: 'Home'
  },
  {
    path: '/components',
    component: () => import('../pages/ComponentsPage.jsx'),
    name: 'Components'
  }
]

// Future routes can be added here:
// {
//   path: '/about',
//   component: () => import('../pages/AboutPage.jsx'),
//   name: 'About'
// },
// {
//   path: '/services',
//   component: () => import('../pages/ServicesPage.jsx'),
//   name: 'Services'
// },
// {
//   path: '/contact',
//   component: () => import('../pages/ContactPage.jsx'),
//   name: 'Contact'
// }
