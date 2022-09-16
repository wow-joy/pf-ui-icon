// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertOutlinedSvg from 'pf-icon-svg/es/asn/AlertOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface AlertOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const AlertOutlined: AlertOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={AlertOutlinedSvg}></PfIcon>;
};

AlertOutlined.displayName = 'AlertOutlined';
AlertOutlined.inheritAttrs = false;
export default AlertOutlined;