const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones  = (phones, isShowAll ) =>{
    //1.get id
    const phoneContainer = document.getElementById('phone-container');
    // clear old search data 
    phoneContainer.textContent ='';
    ///show see more button if have more then 10.
            const seeAllPhone = document.getElementById('see-more');
            if(phones.length > 12 && !isShowAll){
                seeAllPhone.classList.remove('hidden')
            }
            else{
                seeAllPhone.classList.add('hidden')
            }

            console.log('is show all', isShowAll)

    // display top 10 phone

/////////display 1st 12 if not show all

   if(!isShowAll){
    phones = phones.slice(0,12)
   }


    phones.forEach(phone =>{
        console.log(phone);
        // 2.create div 
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-gray-100 shadow-xl';
        //3 set inner html
        phoneCard.innerHTML =`
        <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.
                    phone_name}</h2>
                <p>${phone.slug.image}</p>
                <div class="card-actions">
                    <button onclick="handleshowDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
                </div>
                </div>`;
        phoneContainer.appendChild(phoneCard);


    })
    // hide loading spin 
    toggolespnner(false);

}

// show phn details

const handleshowDetails = async(id) => {
    console.log('data', id)
    // load data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);

}

// search handle

const searchHandle = (isShowAll) => {
    toggolespnner(true);
    const searchFiled = document.getElementById('search-fld');
    const searchText = searchFiled.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}

const toggolespnner = (isLoading)=>{
    const loadinglogo = document.getElementById('loading');
    if(isLoading){
        loadinglogo.classList.remove('hidden')
    }
    else{
        loadinglogo.classList.add('hidden')
    }
}



const searchHandle2 = () =>{
    const searchfld2 =  document.getElementById('search-fld2');
    const searchText = searchfld2.value;
    console.log(searchText);
    loadPhone(searchText)
}

// loadPhone();
///see all handle

const seeAllHandle = () =>{
    searchHandle(true)

}
