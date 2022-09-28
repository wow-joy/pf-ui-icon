// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ErrorOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/ErrorOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ErrorOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ErrorOutlined: ErrorOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ErrorOutlinedSvg}></PfIcon>;
};

ErrorOutlined.displayName = 'ErrorOutlined';
ErrorOutlined.inheritAttrs = false;
export default ErrorOutlined;