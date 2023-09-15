import Button from "./Button";

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="#f9c4de"
      subColor="#b18597"
      hoverColor="#ffe9e9"
      text={text}
      clickEvent={clickEvent}
    />
  );
}
