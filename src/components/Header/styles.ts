import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
      div + div {
        margin-left: 32px;
      }
    }
  }
`;

interface LinkWrapperProps {
  currentPath: boolean;
}
export const LinkWrapper = styled.div<LinkWrapperProps>`
  padding-bottom: 10px;
  ${props =>
    props.currentPath &&
    css`
      border-bottom: 2px solid #ff872c;
    `}
`;
