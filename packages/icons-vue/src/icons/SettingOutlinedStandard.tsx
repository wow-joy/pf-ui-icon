// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingOutlinedStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SettingOutlinedStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SettingOutlinedStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SettingOutlinedStandard: SettingOutlinedStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SettingOutlinedStandardSvg}></PfIcon>;
};

SettingOutlinedStandard.displayName = 'SettingOutlinedStandard';
SettingOutlinedStandard.inheritAttrs = false;
export default SettingOutlinedStandard;