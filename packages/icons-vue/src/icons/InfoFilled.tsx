// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoFilledSvg from 'pf-icon-svg/es/asn/InfoFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InfoFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InfoFilled: InfoFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InfoFilledSvg}></PfIcon>;
};

InfoFilled.displayName = 'InfoFilled';
InfoFilled.inheritAttrs = false;
export default InfoFilled;