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
import HighScoreCard from "./pages/highScore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="questions" element={<QuestionLayout />} />
      <Route path="score" element={<ScoreCard />} />
      <Route path="high-score" element={<HighScoreCard />} />
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
