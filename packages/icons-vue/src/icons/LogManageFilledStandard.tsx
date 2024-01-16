// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogManageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/LogManageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface LogManageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const LogManageFilledStandard: LogManageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={LogManageFilledStandardSvg}></PfIcon>;
};

LogManageFilledStandard.displayName = 'LogManageFilledStandard';
LogManageFilledStandard.inheritAttrs = false;
export default LogManageFilledStandard;