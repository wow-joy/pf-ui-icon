// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DefaultCircleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/DefaultCircleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DefaultCircleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DefaultCircleFilledStandard: DefaultCircleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DefaultCircleFilledStandardSvg}></PfIcon>;
};

DefaultCircleFilledStandard.displayName = 'DefaultCircleFilledStandard';
DefaultCircleFilledStandard.inheritAttrs = false;
export default DefaultCircleFilledStandard;