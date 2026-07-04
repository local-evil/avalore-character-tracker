// Avalore spells — loader
// Merges all spell branch files and cantrips into SPELLS_DEFAULT.
// Must be loaded AFTER all individual spell files and cantrips.js.
window.SPELLS_DEFAULT = [
  ...(window.CANTRIPS_DEFAULT    || []),
  ...(window.SPELLS_ICHOR        || []),
  ...(window.SPELLS_CURSESMITHY  || []),
  ...(window.SPELLS_ETHER        || []),
  ...(window.SPELLS_ARTIFICE     || []),
  ...(window.SPELLS_FORCE        || []),
  ...(window.SPELLS_TELLURGY     || []),
];
