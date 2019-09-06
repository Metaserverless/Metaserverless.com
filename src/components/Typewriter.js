import styled from '@emotion/styled';
import { withTheme } from '@material-ui/styles';
import React, { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { sleep } from '../utils/time';

const StyledSpan = withTheme(styled.span`
  border-right-width: 0.4em;
  border-right-style: none;
  border-right-color: ${props => props.theme.palette.primary.main};
  word-wrap: break-word;

  &.cursor {
    border-right-style: solid;
  }
`);

async function animateText(element) {
  const text = element.innerText;
  let currentText = '';

  element.innerHTML = '&NegativeVeryThinSpace;';
  element.classList.add('cursor');
  await sleep(500);

  for (const c of text) {
    currentText += c;
    element.innerText = currentText;
    await sleep(75);
  }

  await sleep(200);
  element.classList.remove('cursor');
}

const Typewriter = ({ children, onAnimationEnd }) => {
  const ref = React.createRef();
  const [viewRef, inView] = useInView({
    triggerOnce: true,
  });

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      if (inView) {
        animateText(ref.current).then(onAnimationEnd);
      }
    }, [inView]);
  }

  return (
    <StyledSpan
      ref={current => {
        ref.current = current;
        viewRef(current);
      }}
    >
      {children}
    </StyledSpan>
  );
};

export default React.memo(Typewriter);
