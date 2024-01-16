// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileUnknowTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileUnknowTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileUnknowTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileUnknowTwotoneStandard: FileUnknowTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileUnknowTwotoneStandardSvg}></PfIcon>;
};

FileUnknowTwotoneStandard.displayName = 'FileUnknowTwotoneStandard';
FileUnknowTwotoneStandard.inheritAttrs = false;
export default FileUnknowTwotoneStandard;