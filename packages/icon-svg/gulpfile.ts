import { series, parallel } from 'gulp';
import {
  clean,
  copy,
  generateIcons,
  generateEntry
} from './tasks';
import { generalConfig, remainFillConfig } from './plugins/svgo/presets';
import {
  assignAttrsAtTag,
  adjustViewBox,
  setDefaultColorAtPathTag
} from './plugins/svg2Definition/transforms';
import { twotoneStringify } from './plugins/svg2Definition/stringify';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { getIdentifier } from './utils';

const iconTemplate = readFileSync(
  resolve(__dirname, './templates/icon.ts.ejs'),
  'utf8'
);

export default series(
  // 1. clean
  clean(['src', 'inline-svg', 'es', 'lib']),

  parallel(
    // 2.1 copy helpers.ts, types.ts
    copy({
      from: ['./utils/*.ts'],
      toDir: 'src'
    }),

    // 2.2 generate abstract node with the theme "filled"
    generateIcons({
      theme: 'filled',
      standard: false,
      from: ['svg/filled/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
        adjustViewBox
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
    }),
    generateIcons({
      theme: 'filled',
      standard: true,
      from: ['standardSvg/filled/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
        adjustViewBox
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'FilledStandard' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'FilledStandard' })
    }),

    // 2.2 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'outlined',
      standard: false,
      from: ['svg/outlined/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
        adjustViewBox
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Outlined' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Outlined' })
    }),
    generateIcons({
      theme: 'outlined',
      standard: true,
      from: ['standardSvg/outlined/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
        adjustViewBox
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'OutlinedStandard' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'OutlinedStandard' })
    }),

    // 2.3 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'twotone',
      standard: false,
      from: ['svg/twotone/*.svg'],
      toDir: 'src/asn',
      svgoConfig: remainFillConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
        adjustViewBox,
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'TwoTone' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'TwoTone' })
    })
  ),
  generateIcons({
    theme: 'twotone',
    standard: true,
    from: ['standardSvg/twotone/*.svg'],
    toDir: 'src/asn',
    svgoConfig: generalConfig,
    extraNodeTransformFactories: [
      assignAttrsAtTag('svg', { focusable: 'false', fill: 'currentColor' }),
      adjustViewBox
    ],
    stringify: JSON.stringify,
    template: iconTemplate,
    mapToInterpolate: ({ name, content }) => ({
      identifier: getIdentifier({ name, themeSuffix: 'TwotoneStandard' }),
      content
    }),
    filename: ({ name }) => getIdentifier({ name, themeSuffix: 'TwotoneStandard' })
  }),

  parallel(
    // 3.1 generate entry file: src/index.ts
    generateEntry({
      entryName: 'index.ts',
      from: ['src/asn/*.ts'],
      toDir: 'src',
      banner: '// This index.ts file is generated automatically.\n',
      template: `export { default as <%= identifier %> } from '<%= path %>';`,
      mapToInterpolate: ({ name: identifier }) => ({
        identifier,
        path: `./asn/${identifier}`
      })
    })
  )
);
