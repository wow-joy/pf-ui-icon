// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ExclamationCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExclamationCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExclamationCircleOutlinedStandard: ExclamationCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExclamationCircleOutlinedStandardSvg}></PfIcon>;
};

ExclamationCircleOutlinedStandard.displayName = 'ExclamationCircleOutlinedStandard';
ExclamationCircleOutlinedStandard.inheritAttrs = false;
export default ExclamationCircleOutlinedStandard;