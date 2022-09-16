// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertFilledSvg from 'pf-icon-svg/es/asn/AlertFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AlertFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AlertFilled: AlertFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AlertFilledSvg}></PfIcon>;
};

AlertFilled.displayName = 'AlertFilled';
AlertFilled.inheritAttrs = false;
export default AlertFilled;