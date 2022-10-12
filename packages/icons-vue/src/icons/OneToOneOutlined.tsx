// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OneToOneOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/OneToOneOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface OneToOneOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const OneToOneOutlined: OneToOneOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={OneToOneOutlinedSvg}></PfIcon>;
};

OneToOneOutlined.displayName = 'OneToOneOutlined';
OneToOneOutlined.inheritAttrs = false;
export default OneToOneOutlined;