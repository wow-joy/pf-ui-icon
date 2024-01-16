// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YesFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/YesFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface YesFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const YesFilledStandard: YesFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={YesFilledStandardSvg}></PfIcon>;
};

YesFilledStandard.displayName = 'YesFilledStandard';
YesFilledStandard.inheritAttrs = false;
export default YesFilledStandard;