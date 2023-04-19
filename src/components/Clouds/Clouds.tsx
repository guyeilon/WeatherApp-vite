import React from 'react';
import Cloud from 'icons/Cloud';
import styled, { keyframes } from 'styled-components';

export interface CloudsProps {
  amount: number;
}

interface ICloud {
  position: number;
  delay: number;
  speed: number;
}

const MIN_CLOUD_SIZE = 100;
const MIN_CLOUD_SPEED = 5;
const MAX_CLOUD_SPEED = 30 - MIN_CLOUD_SPEED;
const DIFF_CLOUD_SIZE_PER_SPEED = 10;

const Clouds: React.FC<CloudsProps> = ({ amount }) => (
  <CloudsWrapper>
    {Array.from({ length: amount }).map(() => (
      <AnimatedCloud
        key={Math.random() * MAX_CLOUD_SPEED + MIN_CLOUD_SPEED}
        position={Math.random() * 100}
        delay={Math.random() * 10}
        speed={Math.random() * MAX_CLOUD_SPEED + MIN_CLOUD_SPEED}
      />
    ))}
  </CloudsWrapper>
);

export default React.memo(Clouds);

const cloudAnimation = keyframes`
    0% { left:100%	}
    100% { left: -300px}
`;

const CloudsWrapper = styled.div`
  overflow: hidden;
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const AnimatedCloud = styled(Cloud)<ICloud>`
  position: absolute;
  right: 100%;
  bottom: ${({ position }) => position}%;
  animation: ${cloudAnimation} ${({ speed }) => speed}s linear infinite ${({ delay }) => delay}s;
  width: ${({ speed }) => MIN_CLOUD_SIZE + (MAX_CLOUD_SPEED - speed) * DIFF_CLOUD_SIZE_PER_SPEED}px;
`;
