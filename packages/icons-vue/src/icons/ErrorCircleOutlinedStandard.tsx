// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ErrorCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ErrorCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ErrorCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ErrorCircleOutlinedStandard: ErrorCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ErrorCircleOutlinedStandardSvg}></PfIcon>;
};

ErrorCircleOutlinedStandard.displayName = 'ErrorCircleOutlinedStandard';
ErrorCircleOutlinedStandard.inheritAttrs = false;
export default ErrorCircleOutlinedStandard;