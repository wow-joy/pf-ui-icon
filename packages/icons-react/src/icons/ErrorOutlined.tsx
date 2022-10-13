// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ErrorOutlinedSvg from '@pf-ui/pf-icon-svg/es/asn/ErrorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ErrorOutlinedSvg} />;

ErrorOutlined.displayName = 'ErrorOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ErrorOutlined);