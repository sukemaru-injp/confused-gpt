import React from 'react';
import styled from 'styled-components';
import { colors, spacings } from '@/common/ui/styles';
import { FacebookIcon, GithubIcon } from '@/common/ui/Icons';
import Image from 'next/image';

export const AuthorSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>作者について</Title>

      <Card>
        <Name>sukemaru-injp</Name>
        <ImageWrapper>
          <StyledImage height={80} width={80} src='/profile-min.png' alt='profile' />
        </ImageWrapper>
        <Job>Web-FrontendDeveloper</Job>

        <AccountsWrapper>
          <LinkIcon
            href='https://www.facebook.com/profile.php?id=100029782609298'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon />
          </LinkIcon>

          <LinkIcon
            href='https://github.com/sukemaru-injp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon />
          </LinkIcon>
        </AccountsWrapper>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: ${spacings.L} ${spacings.M};
  display: flex;
  gap: ${spacings.S};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  text-align: center;
  color: ${colors.gray};
`;
const Card = styled.div`
  padding: ${spacings.M};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacings.S};
  background-color: ${colors.white};
  border-radius: 5px;
  max-width: 400px;
`;
const ImageWrapper = styled.div`
  padding: ${spacings.XS};
`;
const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const Name = styled.span`
  color: ${colors.main};
  font-size: 1.2rem;
`;
const Job = styled.span`
  color: ${colors.gray};
`;
const AccountsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.S};
`;
const LinkIcon = styled.a`
  text-decoration: none;
`;
