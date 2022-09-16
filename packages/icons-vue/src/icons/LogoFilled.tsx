// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoFilledSvg from 'pf-icon-svg/es/asn/LogoFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface LogoFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const LogoFilled: LogoFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={LogoFilledSvg}></PfIcon>;
};

LogoFilled.displayName = 'LogoFilled';
LogoFilled.inheritAttrs = false;
export default LogoFilled;