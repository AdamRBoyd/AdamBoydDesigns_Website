import React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

import { Reviews } from '../json';
import {
  Heading,
  HorizontalRule,
  Icon,
  Label,
  Link,
  List,
  PageTitleFrame,
  ReviewCard,
  Spacer,
} from '../../components';

const CenteredFlexRow = css`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CenteredFlexColumn = css`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPageTitleFrame = styled(PageTitleFrame)`
  align-items: flex-start;
`;

const StyledHeading = styled(Heading)`
  align-self: center;
`;

const StyledLabel = styled(Label)`
  margin-top: 1rem;
  padding-left: 0.5rem;
`;

const ParagraphWrapper = styled.div`
  font-family: ${font('primary')};
  padding: 1rem 1.5rem 0rem;
`;

const ImageAndTextBlock = styled.div`
  ${CenteredFlexRow}
  align-self: center;
  width: 95%;
`;

const ImageBlock = styled.div`
  ${CenteredFlexColumn}
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 300px;
  margin: 1rem;
  object-fit: cover;
  width: 400px;
`;

const RightImage = styled.img`
  border-radius: 0.25rem;
  height: 325px;
  margin: 3rem 1rem 0 1rem;
  object-fit: cover;
`;

const ImageLabel = styled(Label)`
  align-self: center;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  width: 90%;
`;

const InstagramBlock = styled.div`
  ${CenteredFlexRow}
`;

const StyledIcon = styled(Icon)`
  color: ${palette('primary', 0)};
  font-size: 1.5rem;
  justify-self: center;
  margin-left: 0.75rem;
  margin-right: 0.5rem;
  text-align: center;
  text-justify: center;
`;

const InstagramLink = styled(Link)`
  color: ${palette('primary', 0)};
  cursor: pointer;
  font-family: ${font('primary')};
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  text-justify: center;
  margin-top: 1rem;
`;

const TextBlockStyle = css`
  ${CenteredFlexColumn}
  margin: 1rem;
  font-family: ${font('primary')};
`;

const RightSideTextBlock = styled.div`
  ${TextBlockStyle}
  padding: 0.9rem 1rem 1rem 2rem;
`;

const LeftSideTextBlock = styled.div`
  ${TextBlockStyle}
`;

const LeftParagraph = styled.div`
  font-family: ${font('primary')};
  margin: 1rem;
  text-align: left;
`;

const StyledList = styled(List)`
  padding-left: 4rem;
`;

const About = () => {
  return (
    <StyledPageTitleFrame title='About Me' noBottomRule>
      <ImageAndTextBlock>
        <ProfileImage src='/images/ProfilePic.png' />
        <RightSideTextBlock>
          <StyledHeading>A Bit About Me</StyledHeading>
          This is placeholder text... Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed imperdiet quam vitae urna dictum faucibus.
          Quisque tristique arcu aliquet tellus vehicula, egestas commodo sapien
          imperdiet. Suspendisse eget ultrices leo. Fusce laoreet risus vel leo
          pretium, sit amet laoreet metus imperdiet. Duis leo quam, lobortis eu
          convallis id, ultricies sed justo. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Nulla nec nisi eget velit laoreet pellentesque ac sed nunc. Fusce ut
          rutrum elit, eget tempor ligula. In commodo rutrum lectus, et egestas
          augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Phasellus eu lorem venenatis, dignissim sapien a, sodales odio.
          <Spacer />
          <InstagramLink
            href='https://www.instagram.com/adamboyddesigns/'
            target='_blank'
          >
            <InstagramBlock>
              Follow me on Instagram!
              <StyledIcon name='instagram' icon='instagram' />
            </InstagramBlock>
          </InstagramLink>
        </RightSideTextBlock>
      </ImageAndTextBlock>
      <Spacer small />
      <HorizontalRule />
      <ImageAndTextBlock>
        <LeftSideTextBlock>
          <StyledHeading>My Jewelry</StyledHeading>
          <LeftParagraph>
            Each piece of jewelry in this shop is designed and hand crafted
            using 100% solid silver, copper and brass. The silver that I use is
            of extremely high quality, composed of 92.5% Silver (or more) and
            copper. I buy from trusted suppliers and do not use silver that
            contains nickel. This means that the jewelry found here will not
            cause irritation to sensitive skin. If you are allergic to copper,
            my jewelry can be made from 99.9% pure silver instead, please{' '}
            <Link to='/contact'>contact me</Link> for more information. No
            plated components are used unless specified in the description.
          </LeftParagraph>
          <LeftParagraph>
            I often use a variety of precious and semi-precious stones in my
            designs, each hand selected by myself. I strive to find gemstones
            with unique and beautiful qualities that will stand out in the
            jewelry designs and that will create one of a kind pieces that will
            become favorites in your jewelry box.
          </LeftParagraph>
          <LeftParagraph>
            I am happy to accommodate one off and custom designs. If you have a
            jewelry design in mind that you would like realized, please don't
            hesitate to ask. I am happy to work with you to bring your ideas to
            life.
          </LeftParagraph>
        </LeftSideTextBlock>
        <ImageBlock>
          <RightImage alt='Bench' src='/images/Bench.jpg' />
          <ImageLabel>
            Sandwiched between the mustard and the freezer, it may not look like
            much, but it works.
          </ImageLabel>
        </ImageBlock>
      </ImageAndTextBlock>
      <Spacer />
      <HorizontalRule />
      <Spacer small />
      <StyledHeading>Etsy Reviews</StyledHeading>
      <Spacer small />
      {Reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      <Spacer />
      <HorizontalRule />
      <Spacer small />
      <StyledHeading>Shop policies</StyledHeading>
      <StyledLabel>Shipping Processing time</StyledLabel>
      <ParagraphWrapper>
        The time I need to prepare an order for shipping varies according to
        stock on hand, typically within a few business days. With made to order
        and custom items, I will get them shipped out within a few business days
        of completion. For details, see individual item listings. I will send
        you an email when your order has been shipped. I will not be able to
        ship an order until I have received payment.
      </ParagraphWrapper>
      <StyledLabel>Estimated shipping times</StyledLabel>
      <StyledList>
        <li>North America: 3-7 business days</li>
        <li>Europe: 12-20 business days</li>
        <li>Australia, New Zealand and Oceania: 14-24 business days</li>
      </StyledList>
      <ParagraphWrapper>
        I'll do my best to meet these shipping estimates, but cannot guarantee
        them. Actual delivery time will depend on the shipping method you
        choose.
      </ParagraphWrapper>
      <StyledLabel>Customs and import taxes</StyledLabel>
      <ParagraphWrapper>
        Buyers are responsible for any customs and import taxes that may apply.
        I'm not responsible for delays due to customs.
      </ParagraphWrapper>
      <StyledLabel>Returns and exchanges</StyledLabel>
      <ParagraphWrapper>
        I gladly accept returns, exchanges, and cancellations. I will supply you
        with a return address. Delayed shipping is a subject of 10% re-stocking
        fee.
      </ParagraphWrapper>
      <StyledList>
        <li>Contact me within: 3 days of delivery</li>
        <li>Ship items back within: 7 days of delivery</li>
        <li>Request a cancellation within: 12 hours of purchase</li>
      </StyledList>
      <ParagraphWrapper>
        If you wish to cancel your order, please request a cancellation within
        12 hours of purchase.
      </ParagraphWrapper>
      <StyledLabel>
        The following items can't be returned or exchanged
      </StyledLabel>
      <ParagraphWrapper>
        Because of the nature of these items, unless they arrive damaged or
        defective, I can't accept returns for custom or personalized orders
        (i.e. orders with personalization).
      </ParagraphWrapper>
      <StyledLabel>Conditions of return</StyledLabel>
      <ParagraphWrapper>
        Buyers are responsible for return shipping costs. If the item is not
        returned in its original condition, the buyer is responsible for any
        loss in value.
      </ParagraphWrapper>
      <StyledLabel>Questions about your order?</StyledLabel>
      <ParagraphWrapper>
        Please <Link to='/contact'>contact me</Link> if you have any problems
        with your order, I am more than happy to help you. I take pride in my
        work and stand behind it. If you are not satisfied with your jewelry
        piece, you can return it for a full refund (minus the shipping charge).
      </ParagraphWrapper>
      <Spacer padding='xxlarge' />
    </StyledPageTitleFrame>
  );
};

export default About;
