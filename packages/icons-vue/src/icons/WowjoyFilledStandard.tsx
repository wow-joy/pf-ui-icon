// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WowjoyFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/WowjoyFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface WowjoyFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const WowjoyFilledStandard: WowjoyFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={WowjoyFilledStandardSvg}></PfIcon>;
};

WowjoyFilledStandard.displayName = 'WowjoyFilledStandard';
WowjoyFilledStandard.inheritAttrs = false;
export default WowjoyFilledStandard;