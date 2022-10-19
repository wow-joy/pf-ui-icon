// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Close1TwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/Close1TwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface Close1TwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const Close1TwoTone: Close1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={Close1TwoToneSvg}></PfIcon>;
};

Close1TwoTone.displayName = 'Close1TwoTone';
Close1TwoTone.inheritAttrs = false;
export default Close1TwoTone;