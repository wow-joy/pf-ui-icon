// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFilledSvg from 'pf-icon-svg/es/asn/DocumentFilled';
import PfIcon, { PfIconProps } from '../components/PfIcon';

export interface DocumentFilledIconType extends FunctionalComponent<PfIconProps> {
  displayName: string;
}

const DocumentFilled: DocumentFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <PfIcon {...p} icon={DocumentFilledSvg}></PfIcon>;
};

DocumentFilled.displayName = 'DocumentFilled';
DocumentFilled.inheritAttrs = false;
export default DocumentFilled;