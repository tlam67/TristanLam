const renderParagraph = ( paragraph: string ) => {
  return (
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{paragraph}</p>
  )
}

const renderText = ( text: string ) => {
  return text.split('\n').map(renderParagraph);
}

export default renderText;