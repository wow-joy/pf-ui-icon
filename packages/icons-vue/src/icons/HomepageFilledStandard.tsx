// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomepageFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/HomepageFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HomepageFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HomepageFilledStandard: HomepageFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HomepageFilledStandardSvg}></PfIcon>;
};

HomepageFilledStandard.displayName = 'HomepageFilledStandard';
HomepageFilledStandard.inheritAttrs = false;
export default HomepageFilledStandard;