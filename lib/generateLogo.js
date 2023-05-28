class Logo {
    constructor(text, textColour, shape) {
        this.text = text;
        this.textColour = textColour;
        this.shape = shape
    }
    renderSVG() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${this.shape.render()}
<text x="150" y="150" font-weight="bold" font-size="50" text-anchor="middle" fill="${this.textColour}" dy="0.35em">${this.text}</text>
</svg>`
    }
}

module.exports = Logo