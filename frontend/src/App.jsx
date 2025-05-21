import { Routes, Route } from "react-router-dom";
import SkillLevelSelector from "./components/SkillLevelSelector";
import LanguageRecommendations from "./components/LanguageRecommendations";
import Navbar from "./components/Navbar";
import CoursesPage from "./components/CoursesPage";
import AuthPage from "./pages/AuthPage";
import DashBoard from "./components/DashBoard";
import AboutUs from "./components/About";
import Compiler from "./components/Compiler";
import Blog from "./components/Blog";
import Games from "./components/Games";

function App() {
  return (
    <div className="min-h-screen flex flex-col space-y-3">
      <Navbar />
      <div className="flex-1 bg-blue-500 flex flex-col items-center justify-center text-center w-full pt-16">
        <Routes>
          <Route path="/" element={<SkillLevelSelector />} />
          <Route
            path="/beginner"
            element={
              <>
                <LanguageRecommendations skillLevel="beginner" />
              </>
            }
          />
          <Route
            path="/intermediate"
            element={
              <>
                <LanguageRecommendations skillLevel="intermediate" />
              </>
            }
          />
          <Route
            path="/expert"
            element={
              <>
                <LanguageRecommendations skillLevel="expert" />
              </>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/create-account" element={<AuthPage/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/compiler" element={<Compiler/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/games" element={<Games/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;