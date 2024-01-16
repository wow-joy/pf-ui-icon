// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SignFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SignFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SignFilledStandard: SignFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SignFilledStandardSvg}></PfIcon>;
};

SignFilledStandard.displayName = 'SignFilledStandard';
SignFilledStandard.inheritAttrs = false;
export default SignFilledStandard;