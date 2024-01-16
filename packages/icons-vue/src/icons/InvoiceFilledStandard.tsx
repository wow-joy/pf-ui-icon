// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InvoiceFilledStandardSvg from '@pf-ui/pf-icon-svg/es/asn/InvoiceFilledStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface InvoiceFilledStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const InvoiceFilledStandard: InvoiceFilledStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={InvoiceFilledStandardSvg}></PfIcon>;
};

InvoiceFilledStandard.displayName = 'InvoiceFilledStandard';
InvoiceFilledStandard.inheritAttrs = false;
export default InvoiceFilledStandard;