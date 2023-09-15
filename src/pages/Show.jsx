import { useDispatch, useSelector } from "react-redux";
import PinkButton from "../components/PinkButton";
import styled from "styled-components";
import { reset } from "../store/modules/mbti";
const Header = styled.p`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Result = styled.p`
  font-size: 3rem;
  color: dodgerblue;
`;

const Img = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;
export default function Show() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.mbti.mbtiResult); //"ESFJ"
  const explain = useSelector((state) => state.mbti.explanations[result]); //"ESFJ"

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explain.text}</Explanation>
      <Result>{result}</Result>
      <Img src={process.env.PUBLIC_URL + explain.img} alt="설명" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
      {/* <PinkButton text={} clickEvent={}/> */}
    </>
  );
}
