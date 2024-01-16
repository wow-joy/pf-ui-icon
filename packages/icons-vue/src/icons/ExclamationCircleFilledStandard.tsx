// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ExclamationCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExclamationCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExclamationCircleFilledStandard: ExclamationCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExclamationCircleFilledStandardSvg}></PfIcon>;
};

ExclamationCircleFilledStandard.displayName = 'ExclamationCircleFilledStandard';
ExclamationCircleFilledStandard.inheritAttrs = false;
export default ExclamationCircleFilledStandard;