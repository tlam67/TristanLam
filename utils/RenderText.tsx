const renderParagraph = ( paragraph: string, idx: number, normalText: boolean ) => {
  if (paragraph === "") return <br />
  if (normalText) return <p key={idx}>{paragraph}</p>
  return <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400" key={idx}>{paragraph}</p>
}

const renderText = ( text: string | undefined, normalText: boolean = false ) => {
  if (text) return text.split('\n').map((paragraph: string, idx: number) => renderParagraph(paragraph, idx, normalText));
  return <></>;
}

export default renderText;