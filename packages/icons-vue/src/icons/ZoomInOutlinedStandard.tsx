// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZoomInOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ZoomInOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ZoomInOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ZoomInOutlinedStandard: ZoomInOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ZoomInOutlinedStandardSvg}></PfIcon>;
};

ZoomInOutlinedStandard.displayName = 'ZoomInOutlinedStandard';
ZoomInOutlinedStandard.inheritAttrs = false;
export default ZoomInOutlinedStandard;