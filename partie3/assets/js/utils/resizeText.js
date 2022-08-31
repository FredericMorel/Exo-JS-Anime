function resizeText({ text, NbrChar }) {
    const size = text.length;
    
    if (size >= NbrChar) {
        return text.slice(0, NbrChar) + '...';
    }
    return text;
}