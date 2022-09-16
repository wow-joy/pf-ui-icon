// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ErrorFilledSvg from 'pf-icon-svg/es/asn/ErrorFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ErrorFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ErrorFilled: ErrorFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ErrorFilledSvg}></PfIcon>;
};

ErrorFilled.displayName = 'ErrorFilled';
ErrorFilled.inheritAttrs = false;
export default ErrorFilled;