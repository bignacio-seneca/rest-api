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

        const content = document.querySelector("#info");
        content.innerHTML = '';

        if (infoFromServer.photos && infoFromServer.photos.length > 0){

            infoFromServer.photos.forEach(photo => {
                const photoElement = document.createElement('div');
                photoElement.innerHTML = `
                    <p>Camera Name: ${photo.camera.full_name} (${photo.camera.name})</p>
                    <p>Rover ID: ${photo.rover.id}</p>
                    <p>Earth Date: ${photo.earth_date}</p>
                    <p>Image:</p> 
                    <img src="${photo.img_src}" alt="Mars Rover Photo" style="max-width: 100%; height: auto;"/>
                `;
                content.appendChild(photoElement);
            });

        }else {
            content.innerHTML = `<p>No photos available for this date.</p>`;
        }
    } catch (error) {
        console.log('Error:', error);
        const content = document.querySelector("#info");
        content.innerHTML = `<p>Error retrieving data. Please try again later.</p>`;
    }


}