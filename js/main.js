const indexUrl = '/data/index.json';

function fetchJson(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
}

function appendContents(contents) {
    contents.forEach(content => {
        let article = document.createElement("div");
        content.forEach(paragraph => {
            let p = document.createElement("p");
            p.textContent = paragraph;
            article.appendChild(p);
        })
        document.body.appendChild(article);
    });
}

function main() {
    let index = (indexJson) => {
        let total = indexJson.total;
        for(i = 1; i <= total; i++) {
            let callback = (contents) => {
                appendContents(contents)
            }
            fetchJson('/data/' + i + '.json', callback)
        }
    }
    fetchJson(indexUrl, index);
}

window.onload = main;