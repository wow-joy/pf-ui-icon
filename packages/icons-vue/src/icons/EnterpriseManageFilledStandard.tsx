// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnterpriseManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/EnterpriseManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface EnterpriseManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const EnterpriseManageFilledStandard: EnterpriseManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={EnterpriseManageFilledStandardSvg}></PfIcon>;
};

EnterpriseManageFilledStandard.displayName = 'EnterpriseManageFilledStandard';
EnterpriseManageFilledStandard.inheritAttrs = false;
export default EnterpriseManageFilledStandard;