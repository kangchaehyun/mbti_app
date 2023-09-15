import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import SkyblueButton from "../components/SkyblueButton";
import Progress from "../components/Progress";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { check, next } from "../store/modules/mbti";
const Question = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  const dispatch = useDispatch();
  return (
    <>
      <Question>{survey[page - 1].question}</Question>
      <ul>
        {survey[page - 1].answer.map((element, index) => {
          return (
            <li>
              <SkyblueButton
                text={element.text}
                clickEvent={() => {
                  dispatch(next());
                  dispatch(check(element.result));
                }}
              />
              {index === 0 && (
                <p style={{ fontSize: "2rem", paddingTop: "1.5rem" }}>VS</p>
              )}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
