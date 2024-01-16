// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileZipTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileZipTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileZipTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileZipTwotoneStandard: FileZipTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileZipTwotoneStandardSvg}></PfIcon>;
};

FileZipTwotoneStandard.displayName = 'FileZipTwotoneStandard';
FileZipTwotoneStandard.inheritAttrs = false;
export default FileZipTwotoneStandard;