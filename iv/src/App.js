import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage.js'
import HomePage from './pages/HomePage.js'
import SectionPage from './pages/SectionPage'
import _, {debounce} from 'lodash'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <AppNav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/articles/:articleID" element={<ArticlePage />}/>
          <Route path="/sections/:sectionName" element={<SectionPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
