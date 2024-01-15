import {BrowserRouter, Routes, Route} from "react-router-dom";
import StoryPage from "./components/StoryPage";
import AddStoryPage from "./components/AddStoryPage";
import DashboardPage from "./components/DashboardPage";
import AddChapterPage from "./components/AddChapterPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage/>}></Route>
      <Route path="/story" element={<StoryPage/>}></Route>
      <Route path="/add" element={<AddStoryPage/>}></Route>
      <Route path="/addChapter" element={<AddChapterPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
