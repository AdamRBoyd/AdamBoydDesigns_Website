import styled from 'styled-components';
import { palette } from 'styled-theme';

const StyledHorizontalRule = styled.hr`
  width: 95%;
  margin: 1rem;
  border: 1px solid ${palette('grayscale', 1)};
`;

const HorizontalRule = ({ ...props }) => {
  return <StyledHorizontalRule />;
};

export default HorizontalRule;
