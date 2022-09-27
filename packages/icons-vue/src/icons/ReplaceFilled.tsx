// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReplaceFilledSvg from 'pf-icon-svg/es/asn/ReplaceFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ReplaceFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ReplaceFilled: ReplaceFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ReplaceFilledSvg}></PfIcon>;
};

ReplaceFilled.displayName = 'ReplaceFilled';
ReplaceFilled.inheritAttrs = false;
export default ReplaceFilled;