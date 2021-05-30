import styled from "styled-components"

export const ServicesContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => (bgColor ? bgColor : "#f9f9f9")};
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;
  @media screen and (max-width: 480) {
    font-size: 2rem;
  }
`

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`

export const ServicesCard = styled.div`
  margin: 16px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  width: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

export const ImgWrap = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 64px;
  font-weight: 700;
`
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
