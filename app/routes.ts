import {
  index,
  layout,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layout/index.tsx", [route("chat", "routes/chat/index.tsx")]),
] satisfies RouteConfig;
