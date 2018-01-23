import * as React from 'react';

export default ({ className, children } : { className?: string; children: object}) => (
  <div className={`uc-container ${className}`}>{children}</div>
);
