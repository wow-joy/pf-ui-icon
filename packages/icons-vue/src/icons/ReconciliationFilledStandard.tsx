// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReconciliationFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ReconciliationFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ReconciliationFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ReconciliationFilledStandard: ReconciliationFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ReconciliationFilledStandardSvg}></PfIcon>;
};

ReconciliationFilledStandard.displayName = 'ReconciliationFilledStandard';
ReconciliationFilledStandard.inheritAttrs = false;
export default ReconciliationFilledStandard;