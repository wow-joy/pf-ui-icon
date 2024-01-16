// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/UnlockFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface UnlockFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const UnlockFilledStandard: UnlockFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={UnlockFilledStandardSvg}></PfIcon>;
};

UnlockFilledStandard.displayName = 'UnlockFilledStandard';
UnlockFilledStandard.inheritAttrs = false;
export default UnlockFilledStandard;