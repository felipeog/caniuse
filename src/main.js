import App from "./App.svelte";
import "./css/reset.css";
import "./css/base.css";
import "./css/variables.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
