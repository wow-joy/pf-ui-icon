// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SettingFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/SettingFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface SettingFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const SettingFilledStandard: SettingFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={SettingFilledStandardSvg}></PfIcon>;
};

SettingFilledStandard.displayName = 'SettingFilledStandard';
SettingFilledStandard.inheritAttrs = false;
export default SettingFilledStandard;