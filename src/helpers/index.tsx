export function truncateString(string: string, number: number) {
  if (string?.length > number) {
    return string.slice(0, number) + '...';
  } else {
    return string;
  }
}

export function capitalizeFirstLetter(string = '') {
  const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalized;
}
