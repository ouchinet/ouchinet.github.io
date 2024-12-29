window.addEventListener("load",() => {
    try{
        document.getElementById("home-latest-release").addEventListener("click", () =>{
            location.href="https://github.com/ouchinet/ouchinet/releases"
        })
    }catch(e){}
})