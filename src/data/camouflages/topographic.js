const multiplayer = [
  'Topo Arid',
  'Topo Boulder',
  'Topo Caustic',
  'Topo Glitch',
  'Topo Hardpan',
  'Topo Lithic',
  'Topo Muddy',
  'Topo Regal',
  'Topo Reverb',
  'Topo Sandrock',
  'Forms And Features',
]

const zombies = [
  'Topo Ash',
  'Topo Blaze',
  'Topo Gargoyle',
  'Topo Ghast',
  'Topo Gloom',
  'Topo Grave',
  'Topo Ooze',
  'Topo Sickly',
  'Topo Spirit',
  'Topo Stone',
  'Maps And Mazes',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Topographic',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
