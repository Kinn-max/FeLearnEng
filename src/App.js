import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/web/Header';
import Footer from './layouts/web/Footer';
import CommonHome from './pages/web/CommonHome';
import AboutUs from './pages/web/AboutUs';
import Study from './pages/web/Study';
import Course from './pages/web/Course';
import Login from './pages/Login';
import Register from './pages/Register';
import Grammar from './pages/web/Grammar';
import DetailGrammar from "./components/web/details/DetailGrammar";
import DetailCourse from "./pages/web/DetailCourse";
import DetailVocabulary from "./components/web/details/DetailVocabulary";
import DetailVocabularyPractice from "./components/web/details/DetailVocabularyPractice";
import DetailParagraph from "./components/web/details/DetailParagraph";
import Exam from "./pages/web/Exam";
//
import AdminHome from "./pages/admin/AdminHome";
import Breadcrumb from './Utils/Breadcrumb';
import Cart from './pages/web/Cart';
import Profile from './pages/web/Profile';
import AnswerChart from './Utils/AnswerChart';
import ConfirmAccount from './pages/ConfirmAccount';
import CheckOut from './pages/web/CheckOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

function Content() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isRegisterRoute = location.pathname === '/register';
  const isLoginRoute = location.pathname === '/login';
  const isActivateRoute = location.pathname === '/activate';

  return (
    <>
      {(!isAdminRoute && !isRegisterRoute && !isLoginRoute && !isActivateRoute) && <Header />}
      <Routes>
        <Route path="/" element={<CommonHome />} />
        <Route path="/home" element={<CommonHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/study" element={<Study />} />
        <Route path="/book" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activate" element={<ConfirmAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/grammar/detail" element={<DetailGrammar />} />
        <Route path="/book/detail/:id" element={<DetailCourse />} />
        <Route path="/study/learn/:id" element={<DetailVocabulary />} />
        <Route path="/study/practice/:id" element={<DetailVocabularyPractice />} />
        <Route path="/study/result" element={<AnswerChart />} />
        <Route path="/study/paragraph-practice" element={<DetailParagraph />} />
        <Route path="/study/exam/:id" element={<Exam />} />
      </Routes>
      <Routes>
        <Route path="/admin/*" element={<AdminHome />} />
      </Routes>
      {(!isAdminRoute && !isRegisterRoute && !isLoginRoute && !isActivateRoute) && <Footer />}
    </>
  )
}

export default App;
