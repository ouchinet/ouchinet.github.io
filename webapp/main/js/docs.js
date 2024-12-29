window.addEventListener("load", () => {
    if (document.title === "ドキュメント | Ouchinet Portal") {
        fetch("https://raw.githubusercontent.com/ouchinet/ouchinet.github.io/refs/heads/docs/list.json")
        .then(response => response.json())
        .then(data => {
            const docsList = document.getElementsByClassName("docs-list")[0]

            const keys = Object.keys(data)

            docsList.innerHTML = ""

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                const slug = data[key].slug

                const listItem = document.createElement("li")
                listItem.innerHTML = "<a href='docs/" + slug + "'>" + key + "</a>"
                docsList.appendChild(listItem)
            }
        })
    }else if(document.title === "ドキュメント読み込み中 | Ouchinet Portal"){
        try{
            fetch("https://raw.githubusercontent.com/ouchinet/ouchinet.github.io/refs/heads/docs/" + location.pathname.replace("/docs/","").replaceAll("/","") + ".md")
            .then(response => response.text())
            .then(data => {
                if(data !== "404: Not Found"){
                    const docs = document.getElementsByClassName("docs")[0]

                    document.title = data.slice(0, data.indexOf('\n')).replace("#","") + " | Ouchinet Portal"

                    docs.innerHTML =
                        marked.parse(data)
                        .replaceAll("<h1>","<h1 class='title'>") +
                        "<a href='https://github.com/ouchinet/ouchinet.github.io/blob/docs/" + location.pathname.replace("/docs/","").replaceAll("/","") + ".md'><p id='art-edit'>この記事を編集する</p></a>"
                }else{
                    document.title = "ドキュメントが見つかりませんでした | Ouchinet Portal"
                    document.getElementsByClassName("docs")[0].innerHTML = "<h1 class='title'>お探しのドキュメントは見つかりませんでした。</h1>"
                }
            })
        }catch(e){}
    }
})