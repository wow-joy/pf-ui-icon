// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomepageFilledSvg from 'pf-icon-svg/es/asn/HomepageFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HomepageFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HomepageFilled: HomepageFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HomepageFilledSvg}></PfIcon>;
};

HomepageFilled.displayName = 'HomepageFilled';
HomepageFilled.inheritAttrs = false;
export default HomepageFilled;