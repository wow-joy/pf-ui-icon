// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NoFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/NoFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface NoFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const NoFilledStandard: NoFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={NoFilledStandardSvg}></PfIcon>;
};

NoFilledStandard.displayName = 'NoFilledStandard';
NoFilledStandard.inheritAttrs = false;
export default NoFilledStandard;