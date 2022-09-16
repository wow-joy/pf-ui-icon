// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PptFilledSvg from 'pf-icon-svg/es/asn/PptFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PptFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PptFilled: PptFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PptFilledSvg}></PfIcon>;
};

PptFilled.displayName = 'PptFilled';
PptFilled.inheritAttrs = false;
export default PptFilled;