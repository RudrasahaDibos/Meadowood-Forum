const loadforum = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data =await res.json()
    const CardContainer = document.getElementById('card-conatiner')

    data.posts.forEach(items => {
         const div = document.createElement('div')
         div.classList = `card card-side bg-base-100 shadow-xl`
         div.innerHTML =`
         <div class="avatar indicator">

                                        <span class="indicator-item ml-16 mt-4  indicator-start badge badge-secondary">${items.isActive?:"gelo"}</span>
                                        <div class="lg:h-20 lg:ml-2 lg:mt-3 lg:w-full lg:mx-auto lg:rounded-3xl rounded-full h-20 ">
                                          <img
                                            alt="Tailwind CSS examples"
                                            src="${items.image}" />
                                        </div>
                                      </div>
                              
                                <div class="card-body">
                                    <div class="flex justify-between">
                                        <p>#${items.category}</p>
                                        <p>Author : ${items.author.name}</p>
                                    </div>
                                  <h2 class="card-title">${items.title}</h2>
                                  <p>${items.description}</p>
                                   <p class="border-2 border-dotted "></p>
                                    <div class="flex justify-between">
                                        <div class="flex gap-4 ">
                                       <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-message"></i>${items.comment_count}</p>
                                        <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-eye"></i>${items.posted_time}</p>
                                        <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-compass"></i>${items.view_count}</p>
                                        </div>
                                        <div class=" bg-green-600 h-10 w-10 rounded-full">
                                        <button onClick="handledetails('${items.title}','${items.view_count}')"><i class="fa-solid fa-envelope text-white flex justify-center items-center ml-3 mt-3"></i> </button>
                                    
                                        </div>
                                    </div>
                                  
                                </div>
         
         
         `
         CardContainer.appendChild(div)
    });
}

  const handledetails = async(title,view_count) =>{
    const secondcard = document.getElementById('secondcard-container')
        const div = document.createElement('div')
        div.classList = `card  bg-base-100 shadow-xl`
        div.innerHTML = `
        
                              
                                <div class="card-body flex mx-auto justify-between">
                                   <div>
                                      <h2 class="">${title}</h2>
                                 </div>
                                    <div>
                                        <p class=""><i class="fa-regular fa-eye">${view_count}</i></p>
                                 </div>
                                 
                               
                                </div>
         
        `
        secondcard.appendChild(div)
    
    
  }

loadforum()