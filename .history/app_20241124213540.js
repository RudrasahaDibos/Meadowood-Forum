const loadforum = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data =await res.json()
    const CardContainer = document.get
    data.posts.forEach(items => {
         console.log(items)
    });
}
loadforum()