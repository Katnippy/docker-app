export default function Entry({ entry: { identifier, info }}) {
  return (
    <p>{identifier}: {info}</p>
  );
}
