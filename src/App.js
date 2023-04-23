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
import AppProvider from "./state/provider";
import Login from "./pages/Login";
import HighScores from "./pages/HighScores";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { highScoreLoader } from "./hook/loader";
import ScoreCard from "./pages/ScoreCard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="questions" element={<QuestionLayout />} />
        <Route path="score" element={<ScoreCard />} />
        <Route
          path="highscore"
          element={<HighScores />}
          loader={highScoreLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
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
