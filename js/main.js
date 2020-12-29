const indexUrl = '/data/index.json';

const fetchJson = (url, callback) => {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
};

const appendContents = (contents) => {
    contents.forEach(content => {
        let article = document.createElement("div");
        content.forEach(paragraph => {
            let p = document.createElement("p");
            p.textContent = paragraph;
            article.appendChild(p);
        })
        document.body.appendChild(article);
    });
};

const main = async () => {
    const index = (indexJson) => {
        let total = indexJson.total;
        for(i = 1; i <= total; i++) {
            let callback = (contents) => {
                appendContents(contents)
            }
            fetchJson('/data/' + i + '.json', callback)
        }
    }
    fetchJson(indexUrl, index);
    document.getElementById('btn').onclick = () => {
        input = document.getElementById('xxx');
        location.href = input.value;
    }
};

window.onload = main;