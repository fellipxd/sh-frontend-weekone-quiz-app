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
import { questionDataLoader } from "./hook/loader";
import ScoreCard from "./pages/ScoreCard";
import Question from "./pages/Question";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="questions"
        element={<QuestionLayout />}
        loader={questionDataLoader}
      >
        <Route path=":id" element={<Question />} loader={questionDataLoader} />
      </Route>
      <Route path="score" element={<ScoreCard />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
