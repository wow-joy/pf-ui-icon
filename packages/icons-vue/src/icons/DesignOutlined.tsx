// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesignOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/DesignOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DesignOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DesignOutlined: DesignOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DesignOutlinedSvg}></PfIcon>;
};

DesignOutlined.displayName = 'DesignOutlined';
DesignOutlined.inheritAttrs = false;
export default DesignOutlined;