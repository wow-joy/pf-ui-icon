// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DictionaryFilledSvg from 'pf-icon-svg/es/asn/DictionaryFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DictionaryFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DictionaryFilled: DictionaryFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DictionaryFilledSvg}></PfIcon>;
};

DictionaryFilled.displayName = 'DictionaryFilled';
DictionaryFilled.inheritAttrs = false;
export default DictionaryFilled;