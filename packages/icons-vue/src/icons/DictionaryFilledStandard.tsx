// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DictionaryFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DictionaryFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DictionaryFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DictionaryFilledStandard: DictionaryFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DictionaryFilledStandardSvg}></PfIcon>;
};

DictionaryFilledStandard.displayName = 'DictionaryFilledStandard';
DictionaryFilledStandard.inheritAttrs = false;
export default DictionaryFilledStandard;