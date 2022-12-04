const renderParagraph = ( paragraph: string, normalText: boolean ) => {
  if (normalText) return <p>{paragraph}</p>
  return <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{paragraph}</p>
}

const renderText = ( text: string | undefined, normalText: boolean = false ) => {
  if (text) return text.split('\n').map((paragraph: string) => renderParagraph(paragraph, normalText));
  return <></>;
}

export default renderText;