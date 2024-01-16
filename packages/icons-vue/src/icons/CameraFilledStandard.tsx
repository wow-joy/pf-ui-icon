// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/CameraFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface CameraFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const CameraFilledStandard: CameraFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={CameraFilledStandardSvg}></PfIcon>;
};

CameraFilledStandard.displayName = 'CameraFilledStandard';
CameraFilledStandard.inheritAttrs = false;
export default CameraFilledStandard;