// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PdfTwoToneSvg from 'pf-icon-svg/es/asn/PdfTwoTone';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface PdfTwoToneIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const PdfTwoTone: PdfTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={PdfTwoToneSvg}></PfIcon>;
};

PdfTwoTone.displayName = 'PdfTwoTone';
PdfTwoTone.inheritAttrs = false;
export default PdfTwoTone;