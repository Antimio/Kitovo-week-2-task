import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReposList from './components/ReposList';
import RepoDetails from './components/RepoDetails';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ReposList />} />
            <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
