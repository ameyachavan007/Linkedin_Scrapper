// alert("I am on Likendin");
const profileSection = document.querySelector(".pv-top-card");
const fullNameElement = profileSection?.querySelector('h1')
const fullName = fullNameElement?.textContent || null

let userProfile = {
    name: fullName,
    title: "VP",
    email: "satyajeet@litmusblox.io"
};
chrome.runtime.sendMessage(userProfile);

// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(msg, sender, sendREsponse) {
//     console.log(msg);
    
//         const profileSection = document.querySelector(".pv-top-card");
//         const fullNameElement = profileSection?.querySelector('h1')
//         // const fullName = fullNameElement?.textContent || null
//         fullNameElement.textContent ="Ameya Chavan";
    
// }
// console.log(fullName);


// const fs = require('fs');


// chrome.pageAction.onClicked.addListener(
//     () => {
//         let data = "Learning how to write in a file.";
//         fs.writeFile('Output.txt', data, (err) => {
      
//     // In case of a error throw err.
//     if (err) throw err;
// })
//     }
// )

//     const profileSection = document.querySelector(".pv-top-card");
    
//     const fullNameElement = profileSection?.querySelector('h1')

//     const infoElement = document.getElementById('infoElement');
// infoElement.innerHTML = fullName;

// const titleElement = profileSection?.querySelector('.text-body-medium')
// var title = titleElement?.textContent || null

// const descriptionElement = document.querySelector('div#about')?.parentElement.querySelector('.pv-shared-text-with-see-more > div > span.visually-hidden')// Is outside "profileSection"
// var description = descriptionElement?.textContent || null

// const nameOfPerson = document.querySelector('h1').textContent;
// const nameOfPerson = 'Ameya';
// console.log(fullName);

