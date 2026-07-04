// Avalore spells — loader
// This file merges all spell branch files into SPELLS_DEFAULT.
// It must be loaded AFTER all the individual spell files.
window.SPELLS_DEFAULT = [
  ...(window.SPELLS_GENERAL_CANTRIPS || []),
  ...(window.SPELLS_PATRON_CANTRIPS  || []),
  ...(window.SPELLS_ICHOR            || []),
  ...(window.SPELLS_CURSESMITHY      || []),
  ...(window.SPELLS_ETHER            || []),
  ...(window.SPELLS_ARTIFICE         || []),
  ...(window.SPELLS_FORCE            || []),
  ...(window.SPELLS_TELLURGY         || []),
];
