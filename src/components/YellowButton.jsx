import Button from "./Button";

export default function YellowButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
      text={text}
      clickEvent={clickEvent}
    />
  );
}
