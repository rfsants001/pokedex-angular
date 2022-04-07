export interface PokeInterface {
  name : string;
  status: {
    id: number;
    sprites : {
      other: {
        dream_world: {
          front_default: string;
        }
      }
    };
    types: [{
      type: {
        name: string;
        url: string;
      }
    }]
  }
}
