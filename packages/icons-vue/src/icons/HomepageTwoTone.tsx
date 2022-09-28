// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomepageTwoToneSvg from '@pf-ui/pf-icon-svg/es/asn/HomepageTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HomepageTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HomepageTwoTone: HomepageTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HomepageTwoToneSvg}></PfIcon>;
};

HomepageTwoTone.displayName = 'HomepageTwoTone';
HomepageTwoTone.inheritAttrs = false;
export default HomepageTwoTone;