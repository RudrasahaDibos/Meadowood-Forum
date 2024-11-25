const loadforum = async(categoryName) =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data =await res.json()
    const CardContainer = document.getElementById('card-conatiner')

    data.posts.forEach(items => {
        console.log(items)
         const div = document.createElement('div')
         div.classList = `card card-side bg-base-100 shadow-xl`
         div.innerHTML =`
                                         <div class="avatar indicator">
                                        
                                           <span class="indicator-item ml-16 mt-4  indicator-start badge badge-secondary">${items.isActive === false}</span>
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
    const Cart = getValueElementById('mark-read')
    const totalCart = Cart +1
    setInnerText('mark-read',totalCart)
   

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
  

  function setInnerText(id,value){
    document.getElementById(id).innerText = value
  }

  function getValueElementById(id){
    const getvalueText = document.getElementById(id).innerText
    const getValueint = parseInt(getvalueText)
    return getValueint
   }
   const loadletest = async() =>{
       const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
       const data = await res.json()
    
       const latestCard = document.getElementById('latest-card')
       data.forEach(items => {
        console.log(items)
          const div = document.createElement('div')
          div.classList =`card bg-base-100  shadow-xl`
          div.innerHTML=`
                             <figure class="px-10 pt-10">
                            <img
                              src="${items.cover_image}"
                              alt=""
                              class="rounded-xl" />
                          </figure>
                          
                          <div class="card-body ">
                          <h2 class="flex items-center  gap-4"><i class="fa-solid fa-calendar-days"></i>${items.author.posted_date || 'No publish date'}</h2>
                            <h2 class="card-title">${items.title}</h2>
                            <p>${items.description}</p>
                            <div class="navbar bg-base-100">
                    
                    <div class="flex-none gap-2">
                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                              <div class="w-10 rounded-full">
                                <img
                                  alt="Tailwind CSS Navbar component"
                                  src="${items.profile_image}" />
                              </div>
                            </div>
                            
                          </div>

                           <div class="">
                              <h2 class="text-2xl text-black font-bold">${items.author.name}</h2>  
                              <span>${items.author.designation || "Unknown"}</span>
                           </div>
                     
                    </div>
                  </div>
                          </div>
          `
          latestCard.appendChild(div)
       });
   }
  
   const handleSearch = async() =>{
     console.log("click")
     const inputflield = document.getElementById('input-flield').value
      
    
   }

   const loadsearch =async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category${category}`)
    const data = await res.josn()
    console.log(data)

   }
  
loadforum()
loadletest()