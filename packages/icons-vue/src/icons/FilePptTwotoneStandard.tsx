// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePptTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FilePptTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FilePptTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FilePptTwotoneStandard: FilePptTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FilePptTwotoneStandardSvg}></PfIcon>;
};

FilePptTwotoneStandard.displayName = 'FilePptTwotoneStandard';
FilePptTwotoneStandard.inheritAttrs = false;
export default FilePptTwotoneStandard;