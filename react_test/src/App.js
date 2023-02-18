import './App.scss';
import { Route, Routes } from 'react-router-dom';

import { Layout, LayoutPage, CurrentNeedsPage, SuccessfulStoriesPage, OurGoal } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LayoutPage />} />
          <Route path="CurrentNeedsPage" element={<CurrentNeedsPage />} />
          <Route path="SuccessfulStoriesPage" element={<SuccessfulStoriesPage />} />
          <Route path="OurGoal" element={<OurGoal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
