// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TemplateFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/TemplateFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TemplateFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TemplateFilledStandard: TemplateFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TemplateFilledStandardSvg}></PfIcon>;
};

TemplateFilledStandard.displayName = 'TemplateFilledStandard';
TemplateFilledStandard.inheritAttrs = false;
export default TemplateFilledStandard;