// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WordTwoToneSvg from 'pf-icon-svg/es/asn/WordTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface WordTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const WordTwoTone: WordTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={WordTwoToneSvg}></PfIcon>;
};

WordTwoTone.displayName = 'WordTwoTone';
WordTwoTone.inheritAttrs = false;
export default WordTwoTone;