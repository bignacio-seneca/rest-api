// async function getData(date, apiKey){
//     try {
//         const result = await fetch (
//         `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}
//         `);
//         const infoFromServer = await result.json();

//         const content = document.querySelector("#info");
//         content.innerHTML = `
            

//             <p>Camera Name</p> <p>${infoFromServer.photos[0].camera.full_name}</p>
//             <p>${infoFromServer.photos[0].camera.name}</p>
//             <p>Rover ID</p> <p>${infoFromServer.photos[0].camera.rover_id}</p>
//             <p>${infoFromServer.photos[0].earth_date}</p>
//             <p>Image</p> 
//             <img src="${infoFromServer.photos[0].img_src}"/>
//         `;

//         } catch (error) {
//             console.log('Error: ', error);
//         }
// }

// getData('2015-6-3','qAqAKivAXjZrwqnQ0s9PqhXDdbDbHlNabTHnrhLt');

async function fetchData() {
    const date = document.querySelector('#date').value;
    const apiKey = 'qAqAKivAXjZrwqnQ0s9PqhXDdbDbHlNabTHnrhLt';

    if (!date) {
        alert('Please select a date');
        return;
    }

    try {
        const result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
        );
        const infoFromServer = await result.json();

        //store HTML in the content variable and clear it.
        const content = document.querySelector("#info");
        content.innerHTML = '';

        //check photos array in the infoFromServer object has at least one element
        if (infoFromServer.photos && infoFromServer.photos.length > 0){

            //Iterate over each object in the photos array. 
            //The current object passed in the photo parameter
            
            infoFromServer.photos.forEach(photo => {
                
                //create a new div and store in photoElement. div wiill hold information and image of the current photo
                const photoElement = document.createElement('div');
                photoElement.classList.add('col-md-4', 'mb-4');
                //sets innerHTML of the photoELement div to a string containing html
                photoElement.innerHTML = `
            
                <div class="card h-100">
                    <div class="card-body">
                            <p>Camera Name: ${photo.camera.full_name} (${photo.camera.name})</p>
                            <p>ID: ${photo.id}</p>
                            <p>Image:</p> 
                            <img src="${photo.img_src}" alt="Mars Rover Photo" class="img-fluid"/>
                     </div>
                </div>

                `;

                //appends the photoElement div to the content div, adding it to the DOM.
                content.appendChild(photoElement);
            }); //close foreach

        }else {
            content.innerHTML = `<p>No photos available for this date.</p>`;
        }
    } catch (error) {
        console.log('Error:', error);
        const content = document.querySelector("#info");
        content.innerHTML = `<p>Error retrieving data. Please try again later.</p>`;
    }


}



                    
/* <div class="card">
<p>Camera Name: ${photo.camera.full_name} (${photo.camera.name})</p>
<p>ID: ${photo.id}</p>
<p>Image:</p> 
<img src="${photo.img_src}" alt="Mars Rover Photo";"/>
</div> */
