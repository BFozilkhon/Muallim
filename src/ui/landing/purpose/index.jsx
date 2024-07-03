import React from 'react';

import { Box, Container, IconBox, Wrapper } from './style';

const Purpose = () => {
  return (
    <Container className='er-wrapper'>
      <Container.Title className='er-title'>
        All-In-One <span className='er-title-mark'>Rating System.</span>
      </Container.Title>
      <Container.TitleDescr className='er-title-description'>
        EduRate is one powerful online software suite that combines all the
        tools needed to rate a successful school or LLC.
      </Container.TitleDescr>

      <Wrapper>
        {/* box1 */}
        <Box>
          <IconBox bgColor='#FED369'>
            <IconBox.Icon1 />
          </IconBox>
          <Box.Subtitle className='er-subtitle'>Business Planning</Box.Subtitle>
          <Box.Description className='er-description'>
            Our Business Plan is a written document describing doing a company’s
            core business activities.
          </Box.Description>
        </Box>
        {/* box2 */}
        <Box>
          <IconBox bgColor='#3ADAD9'>
            <IconBox.Icon1 />
          </IconBox>
          <Box.Subtitle className='er-subtitle'>
            Financial Planning
          </Box.Subtitle>
          <Box.Description className='er-description'>
            Our expert team sensible decision about their money, to ensure they
            achieve the life goals. A financial plan.
          </Box.Description>
        </Box>
        {/* box3 */}
        <Box>
          <IconBox bgColor='#FD9B79'>
            <IconBox.Icon1 />
          </IconBox>
          <Box.Subtitle className='er-subtitle'>Market Analysis</Box.Subtitle>
          <Box.Description className='er-description'>
            A market analysis is a quantitative and qualitative assessment of a
            market. It looks into the size of the market.
          </Box.Description>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Purpose;
