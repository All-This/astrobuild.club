const rive = require("@rive-app/canvas");

// ----
// LOCAL RIVE EXAMPLE
// ----

const layout = new rive.Layout({
  fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
  alignment: rive.Alignment.Center,
});

const riveCanvas = document.getElementById("rive-canvas")

const riveInstance = new rive.Rive({
  // Load a local riv `clean_the_car.riv` or upload your own!
  src: "astro-ani.riv",
  // Be sure to specify the correct state machine (or animation) name
  stateMachines: "Motion", // Name of the State Machine to play
  canvas: riveCanvas,
  //layout: layout, // This is optional. Provides additional layout control.
  autoplay: true,
  onLoad: () => {
    // Prevent a blurry canvas by using the device pixel ratio
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
});

// Resize the drawing surface if the window resizes
window.addEventListener(
  "resize",
  () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
  false
);