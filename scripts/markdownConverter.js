async function fetchMarkdownAsHTML(filePath) {
    const response = await fetch(filePath);
    const markdown = await response.text();
    const converter = new showdown.Converter();
    return converter.makeHtml(markdown);
}
