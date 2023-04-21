import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import QuestionLayout from "./layouts/QuestionLayout";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import ScoreCard from "./pages/ScoreCard";
import AppProvider from "./state/provider";
import Login from "./pages/Login";
import HighScores from "./pages/HighScores";
import { highScoreLoader } from "./hook/loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="questions" element={<QuestionLayout />} />
      <Route path="score" element={<ScoreCard />} />
      <Route path="highscore" element={<HighScores />} loader={highScoreLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />;
    </AppProvider>
  );
}

export default App;
