import React from 'react';

export default function Headings({
  animation,
  duration = '1000',
  offset = '250',
  easing = 'ease-in-out',
  delay = '600',
  text,
  className,
}) {
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay={delay}
    >
      <h1 className={className}>{text}</h1>
    </div>
  );
}
