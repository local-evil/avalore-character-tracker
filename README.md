# Avalore Character Tracker

A community-run web tool for planning and tracking character builds in the Avalore tabletop RPG system.

**Live site:** https://local-evil.github.io/avalore-character-tracker/
**Converter tool:** https://local-evil.github.io/avalore-character-tracker/converter.html

---

## How the app works

When you open the tracker, it loads game data (spells, feats, weapons, etc.) directly from the `data/` folder in this repository. This means that when a data file is updated and merged, every player sees the change on their next page load, no app update required.

Character saves are handled separately through a cloud save system. Your character data is never stored in this repository.

---

## Submitting a change request

If you've spotted an error in a spell description, a missing feat, an outdated requirement, or anything else that needs correcting, there are two ways to flag it.

### Option A- Open an Issue (easiest, no GitHub experience needed)

1. Click the **Issues** tab at the top of this repository
2. Click **New issue**
3. Describe what needs changing:
   - What the entry is (spell name, feat name, weapon name, etc.)
   - What's currently wrong
   - What it should say instead, with a source if you have one (e.g. a link to the forum post)
4. Submit - the maintainer will review it and make the change

This is the best option if you just want to flag something and let someone else handle the edit.

---

### Option B - Edit the file directly and submit a Pull Request (faster for confident editors)

If you have a GitHub account and want to make the change yourself:

1. Navigate to the file you want to edit in the `data/` folder (see the data structure section below to find the right file)
2. Click the **pencil icon** (Edit this file) in the top right of the file view
3. Make your changes directly in the editor
4. Scroll to the bottom - under **"Propose changes"**, select **"Create a new branch for this commit"**
5. Give the branch a short descriptive name, e.g. `fix-bloodrush-description`
6. Click **Propose changes**
7. On the next screen, fill in a brief summary of what you changed and why, then click **Create pull request**

The maintainer will review the diff (a side-by-side view of what changed), leave feedback if needed, and merge it when it looks good.

---

## Data structure

All game content lives in the `data/` folder. Here's what each file contains and what format it uses.

```
data/
  feats.js          - All playable feats
  hindrances.js     - Arcane and mutant hindrances
  costs.js          - XP costs for each expenditure type
  weapons.js        - Weapons and armour
  spells/
    cantrips.js     - All cantrips (general, patron, and inherent)
    ichor.js        - Ichor discipline spells
    cursesmithy.js  - Cursesmithy discipline spells
    ether.js        - Ether discipline spells
    artifice.js     - Artifice discipline spells
    force.js        - Force discipline spells
    tellurgy.js     - Tellurgy discipline spells
    index.js        - Loader (do not edit — merges the above into one list)
```

Each file is a JavaScript file that sets a global variable to a JSON array. You only need to edit the array contents — don't change the `window.VARIABLE_NAME =` declaration at the top or the `;` at the end.

---

### Feats (`data/feats.js`)

Each entry in `FEATS_DEFAULT` looks like this:

```json
{
  "name": "Aberration Slayer",
  "cat": "Combat",
  "req": "None",
  "desc": "When fighting aberrations, do +1 extra damage on a successful hit...",
  "limited": false
}
```

| Field | What it is |
|-------|------------|
| `name` | The feat name. Capitalise each word. |
| `cat` | Category. Must be one of: `Combat`, `Lineage Weapon`, `Mutation`, `Vampiric`, `Utility`, `Backgrounds`, `Social`, `Magic` |
| `req` | Stat requirement, or `"None"`. See requirement format below. |
| `desc` | Plain prose description of the feat's effect. |
| `limited` | `true` if the feat can only trigger once per turn, `false` otherwise. |

---

### Hindrances (`data/hindrances.js`)

Two arrays - `ARCANE_HINDRANCES_DEFAULT` and `MUTANT_HINDRANCES_DEFAULT`. Each entry:

```json
{
  "name": "Blood Dependency",
  "desc": "The caster requires blood to fuel their magic..."
}
```

Make sure you add arcane hindrances to the arcane array and mutant hindrances to the mutant array.

---

### Weapons (`data/weapons.js`)

Each entry in `WEAPONS_DEFAULT`:

```json
{
  "cat": "Melee (0-2)",
  "name": "Arming Sword",
  "req": "STR: Athletics 0",
  "hit": 1,
  "hands": 1,
  "dmg": 4,
  "acts": 1,
  "dpt": 4,
  "notes": ""
}
```

| Field | What it is |
|-------|------------|
| `cat` | Must be one of: `Melee (0-2)`, `Skirmishing (2-8)`, `Ranged (6-30)`, `Armour`, `Magic` |
| `name` | Weapon or armour name. |
| `req` | Stat requirement, or `"None"`. |
| `hit` | To-hit bonus as a number, or `null` for armour. |
| `hands` | `1` or `2`, or `null` for armour. |
| `dmg` | Base damage, or `null` for armour. |
| `acts` | Actions to attack, or `null` for armour. |
| `dpt` | Damage per turn (dmg ÷ acts). Calculate this or set to `null`. |
| `notes` | Any special properties (pierces armour, bypasses grazing hits, etc.). Empty string if none. |

---

### Cantrips (`data/spells/cantrips.js`)

Each entry in `CANTRIPS_DEFAULT`:

```json
{
  "branch": "Ichor Cantrip",
  "name": "Bloodrush",
  "type": "inherent",
  "anima": 0,
  "actions": "1",
  "cmd": "/cast bloodrush",
  "req": "None",
  "patron": "",
  "capstone": false,
  "targeted": true,
  "desc": "Choose a target in Melee distance...",
  "method": ""
}
```

| Field | Values |
|-------|--------|
| `type` | `"general"` (any mage), `"patron"` (specific patron only), `"inherent"` (specific discipline only) |
| `branch` | `"General Cantrip"`, `"Patron Cantrip"`, or `"[Discipline] Cantrip"` e.g. `"Ichor Cantrip"` |
| `patron` | For patron cantrips only: `"Myo"`, `"The Fey Coterie"`, `"The Dreaming One"`, `"Facet"`, or `"Ciren'na"`. Empty string otherwise. |

---

### Discipline spells (`data/spells/ichor.js` etc.)

Each entry in e.g. `SPELLS_ICHOR`:

```json
{
  "branch": "Ichor",
  "name": "Syphon",
  "anima": 4,
  "actions": "1",
  "cmd": "/cast syphon",
  "req": "INT: Healing +1",
  "patron": "",
  "capstone": false,
  "targeted": true,
  "desc": "Draw a torrent of blood from a target...",
  "method": "Extending a hand toward the target."
}
```

| Field | Values |
|-------|--------|
| `anima` | `2`, `4`, `6`, or `10` |
| `capstone` | `true` only for the 10-anima capstone spell of each discipline |
| `targeted` | `true` if the spell requires choosing a specific target |
| `req` | Stat requirement e.g. `"INT: Healing +1"`, or `"None"` |

---

## Requirement format

Requirements are parsed by the app to check whether a character meets them and to display colored stat pills. Use this format exactly:

```
None
STR: Athletics +2
DEX: Acrobatics +1
HAR: Arcana +2
INT: Healing +1
STR: Athletics +2 and DEX: Acrobatics +2
Vampire
Mutant
```

Stat abbreviations: `STR`, `DEX`, `HAR`, `INT`
Sub-skills: `Athletics`, `Fortitude`, `Forging`, `Acrobatics`, `Stealth`, `Finesse`, `Arcana`, `Nature`, `Belief`, `Healing`, `Perception`, `Research`

---

## Using the converter tool

Rather than editing JSON by hand, you can use the **converter tool** to paste raw forum text and generate a ready-to-upload data file:

1. Go to https://local-evil.github.io/avalore-character-tracker/converter.html
2. Select the data type (Spells, Feats, Weapons, etc.)
3. For spells, select the branch
4. Paste the raw text copied from the Avalore forum
5. Click **Convert** and check the preview table looks correct
6. Click **Download** to get the `.js` file
7. Upload the file to the appropriate location in `data/` via a Pull Request

The converter handles the formatting automatically - no need to write JSON by hand.

---

## Repository structure

```
index.html        - The character tracker app
converter.html    - The data converter tool
README.md         - This file
data/
  feats.js
  hindrances.js
  costs.js
  weapons.js
  spells/
    cantrips.js
    ichor.js
    cursesmithy.js
    ether.js
    artifice.js
    force.js
    tellurgy.js
    index.js
```
