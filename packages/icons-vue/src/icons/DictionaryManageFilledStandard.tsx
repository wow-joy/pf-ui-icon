// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DictionaryManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DictionaryManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DictionaryManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DictionaryManageFilledStandard: DictionaryManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DictionaryManageFilledStandardSvg}></PfIcon>;
};

DictionaryManageFilledStandard.displayName = 'DictionaryManageFilledStandard';
DictionaryManageFilledStandard.inheritAttrs = false;
export default DictionaryManageFilledStandard;