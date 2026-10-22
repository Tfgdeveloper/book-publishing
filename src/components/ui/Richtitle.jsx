/* ==================================================================
   Turns a title string from the data set into styled spans.

   "From Idea to *Published Book* Step by Step"
     → <span class="regular">From Idea to </span>
       <span class="medium">Published Book</span>
       <span class="regular"> Step by Step</span>

   Words wrapped in *asterisks* get the emphasis class.
   ================================================================== */

function RichTitle({ text = "", emphasisClass = "medium", baseClass = "regular" }) {
  const parts = String(text).split(/\*(.+?)\*/g);

  return parts.map((part, i) =>
    part ? (
      <span key={i} className={i % 2 === 1 ? emphasisClass : baseClass}>
        {part}
      </span>
    ) : null
  );
}

export default RichTitle;