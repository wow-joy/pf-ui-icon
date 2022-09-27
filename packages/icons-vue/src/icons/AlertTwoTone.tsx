// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertTwoToneSvg from 'pf-icon-svg/es/asn/AlertTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AlertTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AlertTwoTone: AlertTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AlertTwoToneSvg}></PfIcon>;
};

AlertTwoTone.displayName = 'AlertTwoTone';
AlertTwoTone.inheritAttrs = false;
export default AlertTwoTone;