export function colorWithOpacity(colorString: string, opacity: number) {
  const color = colorString;
  if (
    opacity == null ||
    typeof opacity !== 'number' ||
    opacity > 1 ||
    opacity < 0
  ) {
    return color;
  }
  // adding 00 and slicing the last two digits to make sure opacity of 0.05 returns 0d instead of d, which would create a 7 letter hex
  const opacityCode =
    `00${Number.parseInt(Math.ceil(opacity * 255).toString(), 10).toString(16)}`.slice(
      -2,
    );

  return color + opacityCode;
}
