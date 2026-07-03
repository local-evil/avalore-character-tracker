# Avalore Character Tracker

A web-based character tracker for the Avalore tabletop RPG system.

**Live site:** https://local-evil.github.io/avalore-character-tracker/

---

## How the data works

Game content (feats, spells, weapons, hindrances, costs) lives in the `data/` folder as plain JavaScript files. The app loads these when the page opens — no network requests, no external dependencies, instant load.

Character saves are stored in two places:
- **Locally** in the browser (autosaves every 60 seconds after a change)
- **In the cloud** via the Save button, which writes to a Google Sheet through Apps Script and returns a short 8-character code you can use to restore your character on any device

---

## Making suggestions

The best way to suggest changes to game content is to open a GitHub Issue:

1. Click the **Issues** tab at the top of this repo
2. Click **New issue**
3. Describe what you'd like to change and why — include the spell/feat/weapon name, what's wrong or missing, and what it should say

If you have edit access to the repo, you can edit the files in `data/` directly. See the format guide below before doing so.

For code changes to the app itself, fork the repo, make your changes, and open a Pull Request.

---

## Data file format guide

All five files in `data/` follow the same basic structure — a JavaScript array or object assigned to a `window` variable. **Do not change the variable names** (`window.FEATS_DEFAULT`, etc.) or the app won't find the data.

Each entry is a JSON object. The fields for each file are described below.

---

### `data/feats.js`

Each feat is an object with these fields:

| Field | Type | What to put |
|-------|------|-------------|
| `name` | string | The feat name. Capitalise each word. |
| `cat` | string | Category — see valid values below. |
| `req` | string | Stat requirement — see format below. |
| `desc` | string | Plain prose describing the feat's effect. |
| `limited` | boolean | `true` if the feat can only be used once per turn, `false` otherwise. |

**Valid `cat` values:**
```
Combat
Utility
Magic
Mutation
Vampiric
Social
```
Must match exactly — the app groups feats by this value.

**`req` format:**

Write requirements exactly like these examples:
```
None
Str: Athletics +2
Dex: Acrobatics +1
Har: Arcana +2
Vampire
Mutant
```
The app parses these to check whether a character meets them. If the format is wrong the check will silently fail and the feat will always appear unlocked — so take care here. The stat abbreviations are `Str`, `Dex`, `Int`, `Har`, and the skill names must match exactly as shown in the stat panel.

---

### `data/hindrances.js`

Two arrays: `ARCANE_HINDRANCES_DEFAULT` and `MUTANT_HINDRANCES_DEFAULT`. Each entry has:

| Field | Type | What to put |
|-------|------|-------------|
| `name` | string | The hindrance name. Capitalise each word. |
| `desc` | string | Plain prose describing the hindrance's effect. |

Make sure you add arcane hindrances to the arcane array and mutant hindrances to the mutant array — the app uses these separately.

---

### `data/costs.js`

Two objects: `COSTS_DEFAULT` (XP values) and `LABELS_DEFAULT` (display names). This tab controls the XP costs shown in the Expenditure tab and is unlikely to need changes. If a new expenditure type is added:

- The key in `COSTS_DEFAULT` is the internal type string used by the app — lowercase, underscores for spaces (e.g. `skill_up`, `mage1`)
- The matching key in `LABELS_DEFAULT` is the human-readable name shown in the dropdown (e.g. `Skill upgrade`, `Mage 1`)
- The value in `COSTS_DEFAULT` is a whole number XP cost. Use `0` for free expenditures

---

### `data/weapons.js`

Each weapon is an object with these fields:

| Field | Type | What to put |
|-------|------|-------------|
| `cat` | string | Range category — see valid values below. |
| `name` | string | The weapon name. Capitalise each word. |
| `req` | string | Comma-separated stat requirements, or `None`. Same format as feats. |
| `hit` | number or null | To hit bonus. Use `null` for armour. |
| `hands` | number or null | `1` or `2`. Use `null` for armour. |
| `dmg` | number or null | Damage value. Use `null` for armour. |
| `acts` | number or null | Actions to attack. Use `null` for armour. |
| `dpt` | number or null | Damage per turn (dmg ÷ acts). Use `null` for armour. |
| `notes` | string | Special properties, or empty string `""` if none. |

**Valid `cat` values:**
```
Melee (0-2)
Skirmishing (2-8)
Ranged (6-30)
Armour
Magic
```

Armour rows use `null` for all the stat columns — just fill in `cat`, `name`, `req`, and `notes`.

---

### `data/spells.js`

Each spell is an object with these fields:

| Field | Type | What to put |
|-------|------|-------------|
| `branch` | string | The spell's branch — see valid values below. |
| `name` | string | The spell name. Capitalise each word. |
| `anima` | number | `0`, `2`, `4`, `6`, or `10`. |
| `actions` | string | Number of actions to cast, as a string: `"0"`, `"1"`, `"2"`, `"10"`, etc. |
| `cmd` | string | The `/cast` command — lowercase, no spaces (e.g. `"/cast fireball"`). |
| `req` | string | Stat requirement. Use `"None"` if there is no requirement. |
| `patron` | string | For patron cantrips only — see valid patron values below. Empty string `""` for all other spells. |
| `capstone` | boolean | `true` if this is a capstone spell, `false` otherwise. |
| `targeted` | boolean | `true` if the spell requires a specific target, `false` otherwise. |
| `desc` | string | Plain prose describing the spell's effect. Keep it concise — it's displayed inline. |

**Valid `branch` values:**
```
General Cantrip
Patron Cantrip
Ichor Cantrip
Cursesmithy Cantrip
Ether Cantrip
Artifice Cantrip
Force Cantrip
Tellurgy Cantrip
Ichor
Cursesmithy
Ether
Artifice
Force
Tellurgy
```
Branch names must match exactly including capitalisation or the spell won't appear in the tracker.

**Valid `patron` values** (for Patron Cantrip branch only):
```
Myo
The Fey Coterie
The Dreaming One
Facet
Ciren'na
```

**Rules the app enforces automatically:**
- Capstone spells only appear for characters whose primary discipline matches the spell's branch
- Opposing branches are locked: Ichor↔Artifice, Tellurgy↔Ether, Force↔Cursesmithy
- Patron cantrips only appear if the character has chosen the matching patron
- Spells with a stat requirement the character doesn't meet appear greyed out

---

## Adding new content

**New feat** — add an entry to the array in `data/feats.js`. The app picks it up on next load.

**New spell** — add an entry to the array in `data/spells.js` with the correct branch. If it belongs to a branch not listed above, open an issue — the app will need a small code change to handle it.

**New weapon** — add an entry to the array in `data/weapons.js`. Make sure `cat` matches one of the existing values exactly.

**New hindrance** — add an entry to the correct array in `data/hindrances.js`.

**New expenditure type** — this requires a code change to the app. Open an issue.

---

## Repo structure

```
index.html              — The app (all logic and layout in one file)
data/
  feats.js              — Feat data
  hindrances.js         — Hindrance data (arcane and mutant)
  costs.js              — Expenditure types and XP costs
  weapons.js            — Weapon and armour data
  spells.js             — Spell data for all branches
avalore-logo.png        — Logo used in the top bar and Discord embeds
README.md               — This file
```

Character cloud saves are handled separately via Google Apps Script and do not touch any files in this repo.
