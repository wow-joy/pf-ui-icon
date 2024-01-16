// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/InfoCircleOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InfoCircleOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InfoCircleOutlinedStandard: InfoCircleOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InfoCircleOutlinedStandardSvg}></PfIcon>;
};

InfoCircleOutlinedStandard.displayName = 'InfoCircleOutlinedStandard';
InfoCircleOutlinedStandard.inheritAttrs = false;
export default InfoCircleOutlinedStandard;