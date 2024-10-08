// Implement the launch sequence function here and export it as the default export.
import { getNewRocket, getRocket } from "./core/rocket.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

window.rocket = getNewRocket();

loadPayload(getRocket());
fuel();
countdown();
liftoff();
deployPayload();
