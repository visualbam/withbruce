import { createDefine } from "fresh";

// Shared state type threaded through middlewares, layouts, and routes.
export interface State {
  // Add shared middleware state here as needed.
}

export const define = createDefine<State>();
