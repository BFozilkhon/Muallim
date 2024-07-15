import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import { faqData } from '../../../shared/utils/faqData';

import {
  Container,
  Wrapper,
  Collapse,
  CollapseHeader,
  CollapseBody,
  ArrowIcon,
} from './style';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container className='er-wrapper'>
      <Container.Title className='er-title'>
        Frequently Asked <span className='er-title-mark'> Questions</span>
      </Container.Title>
      <Wrapper>
        {faqData.map((faq, index) => (
          <Collapse key={index} active={activeIndex === index}>
            <CollapseHeader onClick={() => toggleCollapse(index)}>
              {faq.question}
              <ArrowIcon active={activeIndex === index}>
                <Icon
                  icon={
                    activeIndex === index
                      ? 'mdi:chevron-up'
                      : 'mdi:chevron-down'
                  }
                />
              </ArrowIcon>{' '}
            </CollapseHeader>
            <CollapseBody active={activeIndex === index}>
              {faq.answer}
            </CollapseBody>
          </Collapse>
        ))}
      </Wrapper>
    </Container>
  );
};

export default FAQ;
