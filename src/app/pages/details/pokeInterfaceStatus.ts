

export interface PokeStatus{
  name: string,
  sprites : {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  },
  stats: [{
    stat: {
      name: string,
    },
    base_stat: number
  }],
  names: [{
    name: string,
  }]
};
