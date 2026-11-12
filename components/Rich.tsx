/** Renders content text where **this** marks a key phrase for skimming readers. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-paper">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
