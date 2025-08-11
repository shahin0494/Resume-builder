import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import History from './pages/History';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import ResumeGenerator from './pages/ResumeGenerator';
import UserForm from './pages/UserForm';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/userform' element={<UserForm />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
