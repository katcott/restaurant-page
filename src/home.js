 import tavern from "./images/tavern.jpg";
 
 
 export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');
    const image = document.createElement('img');
    image.src = tavern;

    heading.innerHTML = 'The Prancing Pony';
    p1.innerHTML = '"The Prancing Pony is a fine establishment to gather with friends and enjoy a pint" - Gandalf the Grey';
    p2.innerHTML = 'We are located in Bree and open 7 days a week from noon to 2am.';
    p3.innerHTML = 'Accomodations are available for both hobbits and men.';
    h1.innerHTML = 'Hear our reviews:';
    h2.innerHTML = 'Location and Info:';
    content.appendChild(heading);
    div1.appendChild(h1);
    div1.appendChild(p1);
    content.appendChild(div1);
    div2.appendChild(h2);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(image);
    content.appendChild(div2);

    document.body.appendChild(content);
  }
 

