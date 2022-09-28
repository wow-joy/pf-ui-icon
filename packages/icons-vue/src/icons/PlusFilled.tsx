// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusFilledSvg from '@pf-ui/pf-icon-svg/es/asn/PlusFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PlusFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PlusFilled: PlusFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PlusFilledSvg}></PfIcon>;
};

PlusFilled.displayName = 'PlusFilled';
PlusFilled.inheritAttrs = false;
export default PlusFilled;