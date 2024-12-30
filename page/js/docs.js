window.addEventListener("load", () => {
    try{
        var article_urlparams = []

        for(let entry of new URL(location.href).searchParams.entries()) {
            article_urlparams[article_urlparams.length] = entry[0]
        }
    }catch(e){}

    article_urlparams = article_urlparams[0]

    if(article_urlparams == "" || article_urlparams == null || article_urlparams == undefined){
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
                listItem.innerHTML = "<a href='docs?" + slug + "'>" + key + "</a>"
                docsList.appendChild(listItem)
            }
        })
    }else{
        try{
            function page_html(){
                fetch("/docs/page.html")
                .then(response => response.text())
                .then(data => {
                    document.querySelector("html").innerHTML = data
                })
            }

            function article_html(){
                fetch("https://raw.githubusercontent.com/ouchinet/ouchinet.github.io/refs/heads/docs/" + article_urlparams + ".md")
                .then(response => response.text())
                .then(data => {
                    if(data !== "404: Not Found"){
                        const docs = document.getElementsByClassName("docs")[0]

                        document.title = data.slice(0, data.indexOf('\n')).replace("#","") + " | Ouchinet Portal"

                        docs.innerHTML =
                            marked.parse(data)
                            .replaceAll("<h1>","<h1 class='title'>") +
                            "<a href='https://github.com/ouchinet/ouchinet.github.io/blob/docs/" + article_urlparams + ".md'><p id='art-edit'>この記事を編集する</p></a>"
                    }else{
                        document.title = "ドキュメントが見つかりませんでした | Ouchinet Portal"
                        document.getElementsByClassName("docs")[0].innerHTML = "<h1 class='title'>お探しのドキュメントは見つかりませんでした。</h1>"
                    }
                })
            }

            page_html()
            setTimeout( ()=> {
                article_html()
            }, 100);
        }catch(e){}
    }
})