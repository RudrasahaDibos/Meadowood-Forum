const loadforum = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data =await res.json()
    const CardContainer = document.getElementById('card-conatiner')

    data.posts.forEach(items => {
        
         console.log(items)
         const div = document.cre
    });
}
loadforum()