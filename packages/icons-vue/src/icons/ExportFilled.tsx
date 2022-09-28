// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportFilledSvg from '@pf-ui/pf-icon-svg/es/asn/ExportFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExportFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExportFilled: ExportFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExportFilledSvg}></PfIcon>;
};

ExportFilled.displayName = 'ExportFilled';
ExportFilled.inheritAttrs = false;
export default ExportFilled;