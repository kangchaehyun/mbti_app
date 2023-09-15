import Button from "./Button";

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="#c1e3ff"
      subColor="#7cb8fd"
      hoverColor="#d7f6ff"
      text={text}
      clickEvent={clickEvent}
    />
  );
}
