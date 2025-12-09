import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import StyleMatch from "../pages/StyleMatch";
import StyleResult from "../pages/StyleResult";
import BrandRecommend from "../pages/BrandRecommend";
import AIGeneration from "../pages/AIGeneration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/style-match",
    Component: StyleMatch,
  },
  {
    path: "/style-result",
    Component: StyleResult,
  },
  {
    path: "/brands",
    Component: BrandRecommend,
  },
  {
    path: "/ai-generation",
    Component: AIGeneration,
  },
]);
