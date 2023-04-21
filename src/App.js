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
<<<<<<< HEAD
import HighScores from "./pages/HighScores";
import { highScoreLoader } from "./hook/loader";
=======
import HighScoreCard from "./pages/highScore";
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
<<<<<<< HEAD
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="questions" element={<QuestionLayout />}>
        <Route path=":id" element={<Question />} />
      </Route>
      <Route path="score" element={<ScoreCard />} />
      <Route path="highscore" element={<HighScores />} loader={highScoreLoader} />

=======
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="questions" element={<QuestionLayout />} />
      <Route path="score" element={<ScoreCard />} />
      <Route path="high-score" element={<HighScoreCard />} />
>>>>>>> d6927db3e24fe83639c20ab4c6ac140d61b0a81c
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
