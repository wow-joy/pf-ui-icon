// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaleOutlinedSvg from 'pf-icon-svg/es/asn/MaleOutlined';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MaleOutlinedIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MaleOutlined: MaleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MaleOutlinedSvg}></PfIcon>;
};

MaleOutlined.displayName = 'MaleOutlined';
MaleOutlined.inheritAttrs = false;
export default MaleOutlined;