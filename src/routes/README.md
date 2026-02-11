# Routes Folder

This folder contains all routing-related files for the application.

## Files:

- `index.js` - Main routes configuration
- `AppRoutes.jsx` - React Router component
- `README.md` - This file

## Usage:

Once `react-router-dom` is properly installed, you can use the routing like this:

```jsx
// In App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  )
}
```

## Current Status:

⚠️ **Note**: React Router is not yet installed. The app is currently running without routing.
To enable routing, install react-router-dom:

```bash
npm install react-router-dom
```

Then update App.jsx to use the Router component.
