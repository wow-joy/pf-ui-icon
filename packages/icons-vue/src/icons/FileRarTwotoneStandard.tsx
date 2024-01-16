// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileRarTwotoneStandardSvg from '@pf-ui/pf-icon-svg/es/asn/FileRarTwotoneStandard';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface FileRarTwotoneStandardIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const FileRarTwotoneStandard: FileRarTwotoneStandardIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={FileRarTwotoneStandardSvg}></PfIcon>;
};

FileRarTwotoneStandard.displayName = 'FileRarTwotoneStandard';
FileRarTwotoneStandard.inheritAttrs = false;
export default FileRarTwotoneStandard;