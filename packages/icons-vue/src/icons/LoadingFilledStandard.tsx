// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoadingFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/LoadingFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface LoadingFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const LoadingFilledStandard: LoadingFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={LoadingFilledStandardSvg}></PfIcon>;
};

LoadingFilledStandard.displayName = 'LoadingFilledStandard';
LoadingFilledStandard.inheritAttrs = false;
export default LoadingFilledStandard;