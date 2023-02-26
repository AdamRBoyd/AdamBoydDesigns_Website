import { font, palette } from 'styled-theme';
import styled, { css } from 'styled-components';

import { Reviews } from '../../../json';
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
} from '../..';

const CenteredFlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  width: 90%;
`;

const InstagramBlock = styled.div`
  ${CenteredFlexRow}
  gap: 0.7rem;
`;

const StyledIcon = styled(Icon)`
  color: ${palette('primary', 0)};
  font-size: 1.5rem;
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
  margin: 0.5rem 1rem;
  text-align: left;
`;

const RightParagraph = styled.div`
  font-family: ${font('primary')};
  margin: 0.5rem 1rem;
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
          <RightParagraph>
            Welcome to my portfolio website! I am a jewelry designer and
            silversmith with a passion for creating unique and meaningful pieces
            of jewelry.
          </RightParagraph>
          <RightParagraph>
            I am the founder of{' '}
            <Link href={'https://AdamBoydDesigns.etsy.com'} target='_blank'>
              {' AdamBoydDesigns on Etsy'}
            </Link>
            , where I sell my handcrafted silver and copper jewelry. I enjoy
            using my creativity and attention to detail to design and create
            beautiful and functional pieces of jewelry. From simple and elegant
            designs to more intricate and personalized pieces, I strive to
            create something that speaks to each individual wearer.
          </RightParagraph>
          <RightParagraph>
            In addition to my work in jewelry design, I also have a background
            in computers, fabrication, and graphic design. I recently graduated
            from California State University, East Bay with a Bachelor of
            Science in Computer Science and have experience in developing
            websites using HTML, CSS, JavaScript, React and Nodejs. Additionally
            I have experience with several programming languages including C++,
            Java, Python, and more.
          </RightParagraph>
          <RightParagraph>
            In the "Code" section of my website, you will find a link to my
            <Link
              href={'https://github.com/phoenix239/adamboyddesigns'}
              target='_blank'
            >
              {' GitHub '}
            </Link>
            profile, as well as many mini projects that I have developed using
            various programming languages and tools. I enjoy exploring new
            technologies and creating applications that are both functional and
            visually appealing.
          </RightParagraph>
          <RightParagraph>
            Whether I am creating jewelry or programming, I bring the same level
            of passion and attention to detail to everything I do. I am always
            looking for new opportunities to grow and learn in both fields, and
            I am excited to share my work with others. Thank you for visiting my
            portfolio website, and please feel free to
            <Link to='/contact'>{' contact me'}</Link> if you have any questions
            or if you are interested in working together.
          </RightParagraph>
          <Spacer padding={2} />
          <InstagramLink
            href='https://www.instagram.com/adamboyddesigns/'
            target='_blank'
          >
            <InstagramBlock>
              Follow me on Instagram!
              <StyledIcon name='instagram' icon='instagram' size={25} />
            </InstagramBlock>
          </InstagramLink>
        </RightSideTextBlock>
      </ImageAndTextBlock>
      <Spacer padding={1} />
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
          <RightImage alt='Bench' src='/images/Bench.jpg' loading='lazy' />
          <ImageLabel>
            Sandwiched between the mustard and the freezer, it may not look like
            much, but it works.
          </ImageLabel>
        </ImageBlock>
      </ImageAndTextBlock>
      <Spacer padding={2} />
      <HorizontalRule />
      <Spacer padding={0.5} />
      <StyledHeading>Etsy Reviews</StyledHeading>
      <Spacer padding={2} />
      {Reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
      <Spacer padding={1} />
      <HorizontalRule />
      <Spacer padding={0.5} />
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
      <Spacer padding={6} />
    </StyledPageTitleFrame>
  );
};

export default About;
