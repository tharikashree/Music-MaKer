## Interactive Drum Pad Website

This repository contains a webpage that simulates a drum pad experience. Clicking on designated areas triggers corresponding drum sounds and visual effects.

### Description

This webpage provides a fun and engaging interactive experience. It utilizes JavaScript to detect clicks on specific webpage sections and respond with corresponding audio and visual effects.

### Technologies Used

* HTML
* CSS (likely for styling the drum pads and visual effects)
* JavaScript

### Running the Drum Pad

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.

**Note:** Ensure the HTML file references the necessary sound files (`.mp3` or other compatible audio formats) for the drum sounds.

### Functionality

The webpage consists of clickable areas (likely styled as drum pads) and a visual display area. Here's how it works:

* Upon loading the webpage, JavaScript code is executed.
    * It retrieves references to the drum pad elements (identified by class `.pads div`) and stores them in a variable `pads`.
    * It retrieves references to the audio elements containing the drum sounds (likely with a class `.sound`) and stores them in a variable `sound`.
    * It retrieves a reference to the element designated for visual effects (likely with a class `.visual`) and stores it in a variable `visual`.
    * It defines an array `colors` containing color names to be used for the visual effects.
* For each drum pad element:
    * An event listener is attached that listens for clicks on the pad.
    * When a pad is clicked:
        * The corresponding audio element from the `sound` array (based on the pad's index) is rewound to the beginning (using `currentTime=0`).
        * The audio element is played (using `play()`).
        * The `createBubbles` function is called, passing the clicked pad's index as an argument.
* The `createBubbles` function:
    * Creates a new DOM element (`div`) to represent a visual bubble.
    * Appends the bubble element to the visual display area (`visual`).
    * Sets the background color of the bubble using the color from the `colors` array corresponding to the clicked pad's index.
    * Applies a CSS animation named "jump" (defined in your CSS) to the bubble element for a 1-second duration with an easing effect.
    * Attaches an event listener to the bubble element that listens for the "animationend" event.
    * When the animation ends, the bubble element is removed from the visual display area using `removeChild`.

### Customization

* You can customize the appearance of the drum pads and visual effects using CSS.
* You can modify the `colors` array to change the color scheme of the visual bubbles.
* You can replace the audio files with your own drum sounds.
