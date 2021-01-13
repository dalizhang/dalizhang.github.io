const indexUrl = '/data/index.json';

const fetchJson = async (url, callback) => {
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
    const onIndexReturn = (indexJson) => {
        let total = indexJson.total;
        for (let i = 1; i <= total; i++) {
            let callback = (contents) => {
                appendContents(contents)
            }
            fetchJson('/data/' + i + '.json', callback)
        }
    }
    await fetchJson(indexUrl, onIndexReturn);
    document.getElementById('btn').onclick = () => {
        const input = document.getElementById('xxx');
        location.href = input.value;
    }
};

window.onload = main;