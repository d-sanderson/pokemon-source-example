export function getColorByType(type) {
  switch (type) {
    case "Normal":
      return "#A8A77A";
    case "Fighting":
      return "#C22E28";
    case "Flying":
      return "#A98FF3";
    case "Poison":
      return "#A33EA1";
    case "Ground":
      return "#E2BF65";
    case "Rock":
      return "#B6A136";
    case "Bug":
      return "#A6B91A";
    case "Ghost":
      return "#735797";
    case "Steel":
      return "#B7B7CE";
    case "Fire":
      return "#EE8130";
    case "Grass":
      return "#7AC74C";
    case "Water":
      return "#6390F0";
    case "Electric":
      return "#F7D02C";
    case "Psychic":
      return "#F95587";
    case "Ice":
      return "#96D9D6";
    case "Dragon":
      return "#6F35FC";
    case "Dark":
      return "#705746";
    case "Fairy":
      return "#D685AD";
    default:
      return "FFF";
  }
}
