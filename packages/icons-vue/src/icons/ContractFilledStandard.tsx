// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ContractFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/ContractFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface ContractFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const ContractFilledStandard: ContractFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={ContractFilledStandardSvg}></PfIcon>;
};

ContractFilledStandard.displayName = 'ContractFilledStandard';
ContractFilledStandard.inheritAttrs = false;
export default ContractFilledStandard;