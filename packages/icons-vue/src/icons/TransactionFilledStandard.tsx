// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TransactionFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/TransactionFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface TransactionFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const TransactionFilledStandard: TransactionFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={TransactionFilledStandardSvg}></PfIcon>;
};

TransactionFilledStandard.displayName = 'TransactionFilledStandard';
TransactionFilledStandard.inheritAttrs = false;
export default TransactionFilledStandard;