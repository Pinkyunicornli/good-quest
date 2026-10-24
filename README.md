# Good Quest

A volunteer finder for high school students. Browse real community-service listings, skip or save them one at a time, and log hours toward an XP goal.

Built with **HTML, CSS, and vanilla JavaScript** only. No accounts, no server, and no paid APIs.

## How to open

1. Open this folder.
2. Double-click `index.html`, or right-click it and choose **Open with** Chrome, Edge, or Firefox.
3. You can also drag `index.html` onto a browser window.

Keep `index.html`, `style.css`, and `script.js` in the same folder. The Bungee font loads from Google Fonts, so you need internet the first time.

## What it does

- **Map** — one quest at a time. **Skip** or **Save**. Filters for cause and weekday/weekend. Arrow keys: left = Skip, right = Save.
- **Saved** — quests you kept. Uncheck to remove.
- **XP** — set an hour goal, log an activity from a dropdown, date, and hours. Delete rows. Empty or negative hours are rejected.
- **New quest** — add your own listing at the bottom of Map.

Listings came from a school volunteer sheet. Contact emails on the cards are from that sheet. Saved quests, custom listings, and XP logs stay **in this browser** (`localStorage`). Clearing site data removes them.

The look uses Mario Kart-style colors and chunky block buttons. It is original. It is **not** an official Nintendo or Roblox product.

## Files

| File | Role |
| --- | --- |
| `index.html` | Pages: Map, Saved, XP |
| `style.css` | Colors, layout, 3D block buttons |
| `script.js` | Quests array, filters, save/skip, XP log |
| `README.md` | How to run the project |
| `AI-USAGE.md` | Required record of AI help vs student work |

To change or add a listing, edit the `OPPORTUNITIES` array at the top of `script.js`.

## Congressional App Challenge
