import SVGO from 'svgo';
import { createTrasformStreamAsync } from '../creator';

export const svgo = (options: SVGO.Options) => {
  const optimizer = new SVGO(options);
  return createTrasformStreamAsync(async (before, file) => {
    const { data } = await optimizer.optimize(before, {path: file.path});
    return data;
  });
};
