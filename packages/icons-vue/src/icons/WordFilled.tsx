// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WordFilledSvg from 'pf-icon-svg/es/asn/WordFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface WordFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const WordFilled: WordFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={WordFilledSvg}></PfIcon>;
};

WordFilled.displayName = 'WordFilled';
WordFilled.inheritAttrs = false;
export default WordFilled;