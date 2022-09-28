// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PrevFilledSvg from '@pf-ui/pf-icon-svg/es/asn/PrevFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PrevFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PrevFilled: PrevFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PrevFilledSvg}></PfIcon>;
};

PrevFilled.displayName = 'PrevFilled';
PrevFilled.inheritAttrs = false;
export default PrevFilled;