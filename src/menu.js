export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const ul1 = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const ul2 = document.createElement('ul');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const ul3 = document.createElement('ul');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');
    const li13 = document.createElement('li');
    const li14 = document.createElement('li');
    const li15 = document.createElement('li');
    const p1 = document.createElement('p');
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');


    heading.innerHTML = 'Menu';
    content.appendChild(heading);

    h1.innerHTML = 'Lunch Menu:';
    p1.innerHTML = 'Lunch is served from noon until 3';
    li1.innerHTML = `Shepherd's Pie - Peas, onion, carrots, and lamb under potato mash`;
    li2.innerHTML = `Barley Stew - Barley, chicken, and vegetables with a side of crusty bread`;
    li3.innerHTML = 'Bangers and Mash - served with gravy';
    li4.innerHTML = 'Steak and Kidney Pie';
    li5.innerHTML = 'Boxed Lunch - Varies daily';

    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);
    ul1.appendChild(li4);
    ul1.appendChild(li5);
    div1.appendChild(h1);
    div1.appendChild(p1);
    div1.appendChild(ul1);

    h2.innerHTML = 'Dinner Menu:';
    li6.innerHTML = `Roast Chicken - Half a roast chicken with crusty bread and peas`;
    li7.innerHTML = `Pumpkin Soup - Creamy pumpkin soup served with crackers`;
    li8.innerHTML = 'Mushroom Pie';
    li9.innerHTML = 'Lamb Shank and Mash';
    li10.innerHTML = 'Porridge';

    ul2.appendChild(li6);
    ul2.appendChild(li7);
    ul2.appendChild(li8);
    ul2.appendChild(li9);
    ul2.appendChild(li10);
    div2.appendChild(h2);
    div2.appendChild(ul2);
    

    h3.innerHTML = 'Drink Menu';
    li11.innerHTML = `Mead`;
    li12.innerHTML = `Ale`;
    li13.innerHTML = 'Red wine';
    li14.innerHTML = 'Fire Cider';
    li15.innerHTML = 'Goat Milk';

    ul3.appendChild(li11);
    ul3.appendChild(li12);
    ul3.appendChild(li13);
    ul3.appendChild(li14);
    ul3.appendChild(li15);
    div3.appendChild(h3);
    div3.appendChild(ul3);


    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    document.body.appendChild(content);
  }
 