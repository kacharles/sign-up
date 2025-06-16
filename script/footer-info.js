const copyRight = document.querySelector("#copy-right"); 
const lastModified = document.querySelector("#lmf"); 
const today = new Date(); 

copyRight.innerHTML = `&copy; ${today.getFullYear()} | BYU-Pathway Application Guide | Charles A. Koenig`; 
lastModified.innerHTML = `Last Modified - ${document.lastModified}`;

const dataUrl = "./sign-up/data/cert-degree.json";

async function getData() {
    try {

        const response = await fetch(dataUrl);
        const degree = await response.json();
        console.log("first logging\n"); 
        console.log(degree);  
    } catch (error) {
      console.log(error) 
    }
}

getData();