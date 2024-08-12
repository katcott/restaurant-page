export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');

    heading.innerHTML = 'Menu';
    h1.innerHTML = 'Lunch Menu';
    h2.innerHTML = 'Dinner Menu';
    h3.innerHTML = 'Drink Menu';

    p1.innerHTML = '';
    p2.innerHTML = '';
    p3.innerHTML = '';
    content.appendChild(heading);
    div1.appendChild(h1);
    div1.appendChild(p1);
    content.appendChild(div1);
    div2.appendChild(h2);
    div2.appendChild(p2);
    div2.appendChild(p3);
    content.appendChild(div2);

    document.body.appendChild(content);
  }
 