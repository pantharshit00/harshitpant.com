import * as React from 'react';
import { useTooltip, TooltipPopup, TooltipProps } from '@reach/tooltip';
import Portal from '@reach/portal';
import '@reach/tooltip/styles.css';

const centered = (triggerRect: DOMRect, tooltipRect: DOMRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

const Tooltip: React.FC<TooltipProps & { children: any }> = ({
  children,
  label,
  ariaLabel,
}) => {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip();

  // destructure off what we need to position the triangle
  const { isVisible, triggerRect } = tooltip;

  return (
    <React.Fragment>
      {React.cloneElement(children, trigger)}

      {isVisible && (
        <Portal>
          <div
            style={{
              position: 'absolute',
              left:
                triggerRect && triggerRect.left - 10 + triggerRect.width / 2,
              top: triggerRect && triggerRect.bottom + window.scrollY,
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid black',
            }}
          />
        </Portal>
      )}
      <TooltipPopup
        {...tooltip}
        label={label}
        ariaLabel={ariaLabel}
        style={{
          background: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          padding: '0.5em 1em',
        }}
        position={centered as any}
      />
    </React.Fragment>
  );
};

export default Tooltip;
