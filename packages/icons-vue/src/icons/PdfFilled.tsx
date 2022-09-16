// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PdfFilledSvg from 'pf-icon-svg/es/asn/PdfFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PdfFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PdfFilled: PdfFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PdfFilledSvg}></PfIcon>;
};

PdfFilled.displayName = 'PdfFilled';
PdfFilled.inheritAttrs = false;
export default PdfFilled;