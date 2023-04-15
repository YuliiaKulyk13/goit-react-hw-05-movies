import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="14" />
      {children}
    </StyledLink>
  );
};
