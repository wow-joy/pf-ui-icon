// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomepageOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/HomepageOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface HomepageOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const HomepageOutlined: HomepageOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={HomepageOutlinedSvg}></PfIcon>;
};

HomepageOutlined.displayName = 'HomepageOutlined';
HomepageOutlined.inheritAttrs = false;
export default HomepageOutlined;