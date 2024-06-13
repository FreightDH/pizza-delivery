type Mods = Record<string, boolean | string>;

export const cn = (cls: string, mods: Mods = {}, additional: string[] = []) =>
  [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter((value) => Boolean(value)),
  ].join(' ');
