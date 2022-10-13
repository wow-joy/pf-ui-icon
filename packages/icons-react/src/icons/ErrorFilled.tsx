// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ErrorFilledSvg from '@pf-ui/pf-icon-svg/es/asn/ErrorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorFilledSvg} />;

ErrorFilled.displayName = 'ErrorFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorFilled);