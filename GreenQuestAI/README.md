# GreenQuest AI 🌿

**Less scrolling. More exploring.**

GreenQuest AI is a beginner-friendly website that encourages people to
take small outdoor challenges, explore nature, and track their progress.

## Project files

Keep these three files in the same folder:

``` text
GreenQuest-AI/
├── index.html
├── style.css
├── script.js
└── README.md
```

-   `index.html` --- the structure and content of the website.
-   `style.css` --- the colours, layout, animations, and responsive
    design.
-   `script.js` --- mission cards, XP, levels, and the random adventure
    button.
-   `README.md` --- this project guide.

## How to run the website

### Option 1: VS Code Live Server (recommended)

1.  Open the `GreenQuest-AI` folder in Visual Studio Code.
2.  Install the **Live Server** extension if you do not already have it.
3.  Open `index.html`.
4.  Right-click inside the HTML editor and select **Open with Live
    Server**, or click **Go Live** in the bottom-right corner.
5.  Your browser should open the website at a local address, often
    something like `http://127.0.0.1:5500/index.html`.

If the browser says `ERR_CONNECTION_REFUSED`, the local server may not
be running. Return to VS Code and start Live Server. Do not assume that
port `8080` is correct; use the address opened by Live Server.

### Option 2: Open the HTML file directly

You can also open `index.html` from File Explorer in your browser. Some
features may behave differently depending on the browser, so Live Server
is recommended while developing.

## How to use the website

1.  Scroll to the Missions section.
2.  Click **Complete Mission** to earn XP.
3.  Check the XP, level, and completed-mission count in the progress
    section.
4.  Click **Generate Another Adventure** to receive a suggestion from
    the available missions.

## Current limitations

-   Player progress currently resets when the page is refreshed.
-   Adventures are selected from a predefined list; the generator does
    not use an AI model yet.
-   This is an early project version. Saving progress and connecting an
    AI model can be added later.

## Troubleshooting

### The page says `ERR_CONNECTION_REFUSED`

Start Live Server in VS Code and use the browser address it opens.

### The website appears without styling

Check that the stylesheet is named exactly `style.css` and is in the
same folder as `index.html`. The HTML should contain:

``` html
<link rel="stylesheet" href="style.css">
```

### Mission cards do not appear

Check that `script.js` is in the same folder as `index.html` and that
the HTML contains this near the end of the body:

``` html
<script src="script.js"></script>
```

Open the browser developer tools with **F12**, select **Console**, and
look for red error messages.

## Built with

-   HTML
-   CSS
-   JavaScript

------------------------------------------------------------------------

Made as a learning project: take a break from scrolling and explore the
outdoors. 🌱
