// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExamineFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ExamineFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ExamineFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ExamineFilledStandard: ExamineFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ExamineFilledStandardSvg}></PfIcon>;
};

ExamineFilledStandard.displayName = 'ExamineFilledStandard';
ExamineFilledStandard.inheritAttrs = false;
export default ExamineFilledStandard;