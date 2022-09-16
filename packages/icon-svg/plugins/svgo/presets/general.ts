import SVGO from 'svgo';
// import { base } from './base';

export const generalConfig: SVGO.Options = {
  plugins: [
    { removeAttrs: { attrs: ['width', 'height', 'class']} }
  ]
}
