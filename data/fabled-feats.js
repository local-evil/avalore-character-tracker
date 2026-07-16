// Avalore Fabled Feats
// Each category below becomes its own heading at the bottom of the Feats list.
// Fabled Feats use "boon" and "bane" fields instead of "desc" - the app
// displays them as bolded "Boon:" and "Bane:" lines automatically.
// Format: { name, cat, req, boon, bane, limited }
// The "cat" field must exactly match one of the seven category names below.

window.FABLED_FEATS_DEFAULT = [
  {
    "name": "Fortune Favours The Bold",
    "cat": "Lady Luck",
    "req": "None",
    "boon": "When an enemy succeeds an INT: Perception check to notice you while Hidden, you snap your fingers and vanish in the blink of an eye. Reappear at a location of your choosing in Ranged distance (must be out of plain view and in a space you can generally see). You are Hidden, unable to be perceived for the next round, and your next Sneak Attack is made with a +3 modifier instead of +1. You may perform this trick a number of times per scene equal to the number of Lady Luck feats you have.",
    "bane": "Your Lucky Charm has a knack for getting lost when you need it most. Any time you roll a critical failure (1,1) the charm disappears regardless of any changes to the roll, unable to be found until you win another Legendary Gamble.",
    "limited": false
  },
  {
    "name": "Leave No Trace",
    "cat": "Lady Luck",
    "req": "None",
    "boon": "Objects and rooms you tamper with have a way of reverting to their previous state when you're done with them, as if you were never there. A picked lock may re-lock behind you; a disorderly room will re-organize itself by an unseen hand in a matter of minutes. Evidence, scents, and footprints left behind are minimal, adding a -3 penalty to any efforts to glean from them, which can only be made once.",
    "bane": "Like a magpie, you gain an eye for unattended baubles. You become impulsive, and are inclined to steal while in the presence of valuables even when it would put you at risk.",
    "limited": false
  },
  {
    "name": "Scale Of Luck",
    "cat": "Lady Luck",
    "req": "None",
    "boon": "You have a supernatural knack for pulling yourself and your friends out a scrape when the odds are stacked against you. Once per scene, when you or a target in the same scene rolls a critical failure (1, 1) you may tip the scale and turn it into a critical success (10, 10). Alternatively, if a critical success is rolled, you may tip it toward a critical fail (1, 1).",
    "bane": "With great luck comes great irresponsibility. You are prone to making risky decisions; why bet low when you could raise the stakes?",
    "limited": false
  },
  {
    "name": "Claws of the Dragon",
    "cat": "Spirit of the Fire Dragon",
    "req": "None",
    "boon": "Sharpened claws grow from your fingertips. As a single limited action, scrape the claws together, along metal, or upon Dragon Scales to produce a spray of sparks that ignite flammable objects and cause a -1 aim penalty to targets within a 3x3 area in front of you. This spray can be evaded or blocked as an Unarmed template. If you instead use both actions, targets also take 1 AP/GP damage that increases each round on their turn (1 -> 2 -> 3) until they spend an action to extinguish themselves. When this ability is used with at least one action, Unarmed attacks on your next turn deal full base damage (4) as the claws glow red-hot.",
    "bane": "Finesse Blades, Throwing Knives, Recurves, and Longbows count as non-proficient templates regardless of your stats.",
    "limited": false
  },
  {
    "name": "Scales Of The Dragon",
    "cat": "Spirit of the Fire Dragon",
    "req": "None",
    "boon": "Scales of the beast grow along your body, providing resilience in hot environments and halving fire damage (rounded up). Additionally, these scales act as Medium armour without imposing Evasion penalties or preventing Grazing hits. Scales grow in dark or neutral hues of red, orange, black, and similar colors, and can manifest in simple patterns or gradients.",
    "bane": "When struck by a mace or meteor hammer, reverberation resonates through you like a hammer to an anvil. On your next turn, all forms of movement are reduced by 1m (1 block) per hit from either template.",
    "limited": false
  },
  {
    "name": "Wings Of The Dragon",
    "cat": "Spirit of the Fire Dragon",
    "req": "None",
    "boon": "Scaled wings similar to those of the beast grow from your back in dark or neutral hues of red, orange, black, and similar colors. While not allowing true flight, when falling you may react to slow your descent and mitigate fall damage completely. As a limited action, you can perform one of the following maneuvers so long as you are not grappled: Flap: Dash 8m (8 blocks) in any direction (including vertical), ignoring movement penalties. Repel: Your wings open wide, battering anyone within Melee distance blocks 4m (4 blocks) away from you unless they succeed on a DEX: Acrobatics or STR: Athletics check. Stoke: Currents of air are directed to an open flame, encouraging it to grow 4 blocks in a horizontal direction of your choice. Additionally, your oath to slay aberrations gives you an innate sixth sense. At DM discretion, you are alerted to the presence of aberrations in your vicinity.",
    "bane": "The large leathery wings provide a perfect target to latch onto and bind for enemies. When taking a Struggle action or when a grapple is initiated against you, you roll the contest with a -1 modifier.",
    "limited": false
  },
  {
    "name": "Oath Of Bravery",
    "cat": "Lady of the Lake",
    "req": "None",
    "boon": "Gain a STR-related benefit (no stronger than +2 or equiv.) that applies in situations related to the Oath sworn. Does not stack on other feats/abilities/spells above +3 total.",
    "bane": "The oath-sworn becomes more impulsive, struggling to sit still and needing to act, even when it may put them at a disadvantage.",
    "limited": false
  },
  {
    "name": "Oath Of Diligence",
    "cat": "Lady of the Lake",
    "req": "None",
    "boon": "Gain a DEX-related benefit (no stronger than +2 or equiv.) that applies in situations related to the Oath sworn. Does not stack on other feats/abilities/spells above +3 total.",
    "bane": "The oath-sworn becomes a worrywart, not just about the target of their Oath but in general - a mild anxiety is with them that never leaves.",
    "limited": false
  },
  {
    "name": "Sanctuary",
    "cat": "Shrine Keepers",
    "req": "None",
    "boon": "The shrinekeeper's consistent and mindful devotion catches the attention of the entity or idea they've dedicated a portion of their life to. The grounds of their shrine, a 20m (20 block) radius around the center, gain a passive, non-offensive benefit. The shrinekeeper may also spend an hour to consecrate a minor shrine elsewhere, providing a lesser version of the shrine's benefit in the same radius. The grounds remain blessed for up to one day, and only one minor shrine may exist at a time. In both instances, the shrinekeeper chooses who may or may not receive the passive benefit.",
    "bane": "Replace this with the real bane text.",
    "limited": false
  },
  {
    "name": "Siren's Singer",
    "cat": "Siren Serene",
    "req": "None",
    "boon": "The affected is able to sing a calming tune, bringing all but openly hostile (i.e. attacking) creatures to temporary calm and drowning out the effects of bardic inspiration or vicious mockery so long as they sing. Unwilling player characters must pass a contested HAR: Belief roll to resist the effect. If the target is currently in Rage, they get a +3 to this roll. Can only be focused on a single creature at a time, and the singer can take no action while singing other than movement (including Dash).",
    "bane": "The affected always can hear 'the melody' in the back of their head - a cause for paranoia. When singing, they harmonize with this melody and the paranoia subsides.",
    "limited": false
  },
  {
    "name": "Siren's Swimmer",
    "cat": "Siren Serene",
    "req": "None",
    "boon": "The water parts before you, hastening your passage and allowing for unparalleled agility within its embrace. You're able to hold your breath for up to 10 minutes underwater and ignore all penalties to movement and rolls inflicted by deep or shallow water. Additionally, your move and Dash speed increase by 2 blocks while in water. This stacks with Lightning Speed and you no longer consider deep or shallow water uneven terrain.",
    "bane": "The individual finds themselves often thirsty and fearful of dry environments, such as a desert or savannah.",
    "limited": false
  },
  {
    "name": "Touch Of The Equinox",
    "cat": "Equinox & Phoenix",
    "req": "None",
    "boon": "You gain the Dusk Mark. This manifests as a cool-hued mark on the body, such as a glowing tattoo or a steely ring around the iris. Each full day cycle, you may use Touch of the Phoenix or Equinox a number of times equal to the number of P&E feats you own. You gain access to the following effects to choose from, each costing and action and lasting for three rounds, with the exception of Repose: Empower Soul: You and everyone within Skirmishing distance roll INT & HAR related checks with a +1 bonus, and STR & DEX related checks with a -1 penalty. Nightfall: Your Dusk Mark swallows all light in the Ranged area around you, eclipsing it in darkness equivalent to nighttime. Repose: You stabilize a willing target or one in Bleedout by making physical contact with them, placing them in a peaceful stasis where they cannot move or speak. Barring complete destruction of their body, they cannot be killed for the next complete day cycle unless the Equinox blessed is killed or removes the stasis effect.",
    "bane": "Serenity takes root. In overly noisy or chaotic environments, the blessed's calmness may wane as they are struck with a feeling of disorientation. Close exposure to sudden bright flashes of light (e.g. from a sparkler) limits their vision to Skirmishing distance for a round.",
    "limited": false
  },
  {
    "name": "Touch Of The Phoenix",
    "cat": "Equinox & Phoenix",
    "req": "None",
    "boon": "You gain the Phoenix Brand. This manifests as a warm-hued mark on the body, such as a glowing tattoo or a fiery ring around the iris. Each full day cycle, you may use Touch of the Phoenix or Equinox a number of times equal to the number of P&E feats you own. You gain access to the following effects to choose from, each costing an action and lasting for three rounds: Empower Body: You and everyone within Skirmishing distance roll STR & DEX related checks with a +1 bonus, and INT & HAR related checks with a -1 penalty. Daybreak: Your Phoenix Brand illuminates the Ranged area around you, flooding it with Daylight. Invigorate: The base movement and dash speed you and your allies in Skirmishing distance are increased by +1. Uneven terrain no longer has a penalty, and attempts to traverse obstacles are made with a +3 modifier.",
    "bane": "Decisive moments are craved. Should they find they are not taking initiative, the blessed may feel lost or confused. When surprised or ambushed, they roll initiative with a -3 penalty.",
    "limited": false
  },
  {
    "name": "Touch Of The Twin Birds",
    "cat": "Equinox & Phoenix",
    "req": "None",
    "boon": "A pair of wings can unfurl from the back of the individual, one bright as the day and the other dark as night. The balanced soul may use an action to enter or exit free flight, gaining +1 to their base movement and dash speed while in the air. They are unable to fly if wearing medium/heavy armour, or while carrying objects heavier than weapons. Upon taking a total of 10 damage, the wings falter and the Twinbird Blessed is grounded without taking fall damage. They may resume flight with another action, vulnerable to the same threshold each time.",
    "bane": "Those who bear the wings of both Phoenix and Equinox have found a true balance and struggle when it is broken. When off-balance or Prone, attacks against them are made with an additional +1 aim modifier. If they spend too long without rising, be it through physical ascent, change, or meaningful presence in others' lives, they begin to dim in spirit.",
    "limited": false
  },
  {
    "name": "Holy Garden-keeper",
    "cat": "Divine Gardeners",
    "req": "None",
    "boon": "The individual gains the ability to maintain a particular garden which is struck with supernatural powers, such as growing unique herbs, granting a calming and healing aura, or other benefit of the gardener's wish.",
    "bane": "A sense of paranoia about the state of their home and garden is always with them, and they must spend a not-insignificant amount of time upkeeping their supernatural garden, as it seems to need more care than most.",
    "limited": false
  }
  {
    "name": "Nature's Touch",
    "cat": "Divine Gardeners",
    "req": "None",
    "boon": "The individual has a special connection to nature; their mere touch is able to bring life to wilting plants, make a flower bloom, or rapidly grow berries and herbs from a wild plant. Natural poisons and irritants, such as poison ivy, do not seem to affect them, unless concentrated in a potion. They are also capable of discerning vague sentiments or feelings from non-hostile wild animals.",
    "bane": "Becoming closer with the wilds makes it harder to return to society; cold stone and towering keeps devoid of wild growth deeply unnerve and make the individual uncomfortable.",
    "limited": false
  }
];
