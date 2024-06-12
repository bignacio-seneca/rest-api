
// async function getData(date, apiKey){   
//     //console.log(infoFromServer.photos.full_name);
    
//     try {
//         const result = await fetch(
//             `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
//             );
//         const infoFromServer = await result.json();

//         console.log('info from server: ' + JSON.stringify(infoFromServer));
//         const content = document.querySelector("#info");

//         let htmlContent = '';

//         //if theres photos, display them
//         if (infoFromServer.photos.legnth > 0){
//             htmlContent += `
//             <p>Name</p>
//             <p>${infoFromServer.photos[0].camera.name}</p>
//             <h2>${infoFromServer.photos[0].camera.full_name}</h2>
//             <img src="${infoFromServer.photos[0].img_src}"/>

//             `;
//             //loop through array to display all photos
//             infoFromServer.photos.forEach(photo => {
//                 htmlContent += `
//                 <h2>${photo.camera.full_name}</h2>
//                 <p>${photo.camera.name}</p>
//                 <img src="${photo.img_src}" alt="Mars Photo"/>
//                 `;
//             });

//         } else {
//             htmlContent = '<p>No photos available for this date.</p>';
//         }

//         content.innerHTML = htmlContent;

//     } catch (error){
//         console.log('Error: ', error);
//     }
// }

// function fetchMarsPhotos() {
//     const date = document.querySelector("#date").value;
//     const apiKey = 'qAqAKivAXjZrwqnQ0s9PqhXDdbDbHlNabTHnrhLt';
//     if (dateInput){
//         getData(date, apiKey);
//     }else {
//         alert('Please select a date');
//     }
// }

// fetchMarsPhotos();


async function getData(date, apiKey){
    try {
        const result = await fetch (
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}
        `);
        const infoFromServer = await result.json();

        const content = document.querySelector("#info");
        content.innerHTML = `
            <p>Nameeee</p>
            <h2>${infoFromServer.photos[0].camera.full_name}</h2>
            <p>${infoFromServer.photos[0].camera.name}</p>
            
            <img src="${infoFromServer.photos[0].img_src}"/>

            <p>${infoFromServer.photos}
        `;

        } catch (error) {
            console.log('Error: ', error);
        }
}


getData('2018-9-3','qAqAKivAXjZrwqnQ0s9PqhXDdbDbHlNabTHnrhLt');