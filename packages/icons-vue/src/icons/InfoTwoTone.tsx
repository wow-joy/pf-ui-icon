// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/InfoTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InfoTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InfoTwoTone: InfoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InfoTwoToneSvg}></PfIcon>;
};

InfoTwoTone.displayName = 'InfoTwoTone';
InfoTwoTone.inheritAttrs = false;
export default InfoTwoTone;