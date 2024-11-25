const loadforum = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data =await res.json()
    const CardContainer = document.getElementById('card-conatiner')

    data.posts.forEach(items => {
        
         console.log(items)
         const div = document.createElement('div')
         div.classList = `card card-side bg-base-100 shadow-xl`
         div.innerHTML =`
         <div class="avatar indicator">
                                        <span class="indicator-item ml-16 mt-4 indicator-start badge badge-secondary"></span>
                                        <div class="lg:h-20 lg:ml-2 lg:mt-3 lg:w-full lg:mx-auto lg:rounded-3xl rounded-full h-20 ">
                                          <img
                                            alt="Tailwind CSS examples"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                      </div>
                              
                                <div class="card-body">
                                    <div class="flex justify-between">
                                        <p>#music</p>
                                        <p>Author : Awlad Hossain</p>
                                    </div>
                                  <h2 class="card-title">New movie is released!</h2>
                                  <p>Click the button to watch on Jetflix app fadssssssssssssssssssssssssssssssssssssss.</p>
                                   <p class="border-2 border-dotted "></p>
                                    <div class="flex justify-between">
                                        <div class="flex gap-4 ">
                                       <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-message"></i>560</p>
                                        <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-eye"></i>560</p>
                                        <p class="flex justify-center items-center gap-2"><i class="fa-regular fa-compass"></i>560</p>
                                        </div>
                                        <div class=" bg-green-600 h-10 w-10 rounded-full">
                                            <i class="fa-solid fa-envelope text-white flex justify-center items-center mt-3"></i>
                                        </div>
                                    </div>
                                  
                                </div>
         
         
         `
         
    });
}
loadforum()