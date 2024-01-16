// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaleFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/MaleFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface MaleFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const MaleFilledStandard: MaleFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={MaleFilledStandardSvg}></PfIcon>;
};

MaleFilledStandard.displayName = 'MaleFilledStandard';
MaleFilledStandard.inheritAttrs = false;
export default MaleFilledStandard;