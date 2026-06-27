export interface Team {
  name: string
  iconKey: string
  region: string
  players: string[]
}

export const teams: Team[] = [
  { name: "Lunar Wolves",
       iconKey: "moon",        
       region: "NA",   
       players: ["Alpha", "Ghost", "Nova", "Storm", "Vex"] 
  },
  { name: "Void Reapers",   
    iconKey: "skull",       
    region: "EU",   
    players: ["Razor", "Spectre", "Hex", "Cipher", "Zero"] 
  },
  { name: "Solar Flares",   
    iconKey: "sun",         
    region: "APAC", 
    players: ["Blaze", "Ember", "Flash", "Spark", "Inferno"] 
  },
  { name: "Abyss Walkers",  
    iconKey: "eye",         
    region: "CIS",  
    players: ["Phantom", "Shade", "Echo", "Wraith", "Banshee"] 
  },
  { name: "Nebula Knights", 
    iconKey: "star",        
    region: "EU",   
    players: ["Orion", "Vega", "Sirius", "Rigel", "Altair"] 
  },
  { name: "Cosmic Tide",    
    iconKey: "waves",       
    region: "SA",   
    players: ["Tsunami", "Vortex", "Riptide", "Monsoon", "Typhoon"] 
  },
  { name: "Star Forgers",   
    iconKey: "hammer",      
    region: "NA",   
    players: ["Forge", "Anvil", "Hammer", "Steel", "Iron"] 
  },
  { name: "Dark Matter",    
    iconKey: "disc",        
    region: "OCE",  
    players: ["Quark", "Gluon", "Boson", "Fermion", "Lepton"] 
  },
]