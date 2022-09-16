// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoOutlinedSvg from 'pf-icon-svg/es/asn/InfoOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InfoOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InfoOutlined: InfoOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InfoOutlinedSvg}></PfIcon>;
};

InfoOutlined.displayName = 'InfoOutlined';
InfoOutlined.inheritAttrs = false;
export default InfoOutlined;