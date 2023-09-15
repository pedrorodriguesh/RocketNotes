import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        padding-top: 48px;
        padding-bottom: 48px;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        padding-top: 124px;
    }
`;
