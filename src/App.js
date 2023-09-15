import { useSelector } from "react-redux";
import { GlobalStyle } from "./components/GlobalStyle";
import Mbti from "./pages/Mbti";
import Start from "./pages/Start";
import styled from "styled-components";
import Show from "./pages/Show";
const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;
export default function App() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}
