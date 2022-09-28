// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OppositeFilledSvg from '@pf-ui/pf-icon-svg/es/asn/OppositeFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OppositeFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OppositeFilled: OppositeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OppositeFilledSvg}></PfIcon>;
};

OppositeFilled.displayName = 'OppositeFilled';
OppositeFilled.inheritAttrs = false;
export default OppositeFilled;