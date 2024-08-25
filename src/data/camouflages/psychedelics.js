const multiplayer = [
  'Occult', 
  'Psychedelic Loops', 
  'Psychedelic Pop', 
  'Psychedelic Sky',
  'The Horrors',
  'She Bites',
  'Garden Of Eyes',
  'Cacophonous Collision',
]

const zombies = [
  'Mystic Wither', 
  'Psychedelic Misery', 
  'Psychedelic Ridge', 
  'Psychedelic Toxins',
  'Apparition',
  'Rabio',
  'Eye Love You',
  'Calamitous Collision',
]

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Psychedelics',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
