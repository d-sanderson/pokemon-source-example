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

export function LightenDarkenColor(col, amt) {
  var usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
