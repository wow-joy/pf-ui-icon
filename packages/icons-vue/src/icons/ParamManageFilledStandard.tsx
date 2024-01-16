// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ParamManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ParamManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ParamManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ParamManageFilledStandard: ParamManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ParamManageFilledStandardSvg}></PfIcon>;
};

ParamManageFilledStandard.displayName = 'ParamManageFilledStandard';
ParamManageFilledStandard.inheritAttrs = false;
export default ParamManageFilledStandard;