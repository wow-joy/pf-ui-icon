// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DelFilledSvg from '@pf-ui/pf-icon-svg/es/asn/DelFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DelFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DelFilled: DelFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DelFilledSvg}></PfIcon>;
};

DelFilled.displayName = 'DelFilled';
DelFilled.inheritAttrs = false;
export default DelFilled;