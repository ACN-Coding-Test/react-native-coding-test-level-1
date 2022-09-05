import { statName, baseStat } from './constants';

export function getTypeContainerColor(type) {
  switch (type) {
    case 'grass':
      return '#a2d882';

    case 'fire':
      return '#f3a76e';

    case 'water':
      return '#92b1f4';

    case 'electric':
      return '#fae076';

    case 'ice':
      return '#b4e4e2';

    case 'fighting':
      return '#dd625d';

    case 'poison':
      return '#c76cc5';

    case 'ground':
      return '#ead292';

    case 'flying':
      return '#c2aff6';

    case 'psychic':
      return '#fb86aa';

    case 'bug':
      return '#d2e545';

    case 'rock':
      return '#d2c169';

    case 'ghost':
      return '#9b84b8';

    case 'dark':
      return '#a58570';

    case 'dragon':
      return '#9970fd';

    case 'steel':
      return '#ccccdc';

    case 'fairy':
      return '#e2a8c5';

    default:
      return '#c1c1a1';
  }
}

export function getBackgroundColor(type) {
  switch (type) {
    case 'grass':
      return '#7AC74C';

    case 'fire':
      return '#EE8130';

    case 'water':
      return '#6390F0';

    case 'electric':
      return '#F7D02C';

    case 'ice':
      return '#96D9D6';

    case 'fighting':
      return '#C22E28';

    case 'poison':
      return '#A33EA1';

    case 'ground':
      return '#E2BF65';

    case 'flying':
      return '#A98FF3';

    case 'psychic':
      return '#F95587';

    case 'bug':
      return '#A6B91A';

    case 'rock':
      return '#B6A136';

    case 'ghost':
      return '#735797';

    case 'dark':
      return '#705746';

    case 'dragon':
      return '#6F35FC';

    case 'steel':
      return '#B7B7CE';

    case 'fairy':
      return '#D685AD';

    default:
      return '#A8A77A';
  }
}

export function formatPokemonIndex(pokemonIndex) {
  if (pokemonIndex < 10) {
    return (pokemonIndex = '00' + pokemonIndex);
  } else if (pokemonIndex >= 10 && pokemonIndex < 100) {
    return (pokemonIndex = '0' + pokemonIndex);
  }

  return pokemonIndex;
}

export function getStat(stat, pokemonStats) {
  switch (stat) {
    case statName.HP:
      return pokemonStats[0].base_stat;
    case statName.ATTACK:
      return pokemonStats[1].base_stat;
    case statName.DEFENSE:
      return pokemonStats[2].base_stat;
    case statName.SP_ATK:
      return pokemonStats[3].base_stat;
    case statName.SP_DEF:
      return pokemonStats[4].base_stat;
    case statName.SPEED:
      return pokemonStats[5].base_stat;

    default:
      return (
        pokemonStats[0].base_stat +
        pokemonStats[1].base_stat +
        pokemonStats[2].base_stat +
        pokemonStats[3].base_stat +
        pokemonStats[4].base_stat +
        pokemonStats[5].base_stat
      );
  }
}

export function getProgress(stat, pokemonStats) {
  switch (stat) {
    case statName.HP:
      return pokemonStats[0].base_stat / baseStat.HP;
    case statName.ATTACK:
      return pokemonStats[1].base_stat / baseStat.ATTACK;
    case statName.DEFENSE:
      return pokemonStats[2].base_stat / baseStat.DEFENSE;
    case statName.SP_ATK:
      return pokemonStats[3].base_stat / baseStat.SP_ATK;
    case statName.SP_DEF:
      return pokemonStats[4].base_stat / baseStat.SP_DEF;
    case statName.SPEED:
      return pokemonStats[5].base_stat / baseStat.SPEED;

    default:
      return (
        (pokemonStats[0].base_stat +
          pokemonStats[1].base_stat +
          pokemonStats[2].base_stat +
          pokemonStats[3].base_stat +
          pokemonStats[4].base_stat +
          pokemonStats[5].base_stat) /
        (baseStat.HP +
          baseStat.ATTACK +
          baseStat.DEFENSE +
          baseStat.SP_ATK +
          baseStat.SP_DEF +
          baseStat.SPEED)
      );
  }
}
