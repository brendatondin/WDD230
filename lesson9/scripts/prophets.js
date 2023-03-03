const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(url)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            let death = document.createElement('p');
            let length = document.createElement('p');
            let numofchildren = document.createElement('p')
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthdate.textContent = "Birth: " + prophets[i].birthdate;
            birthplace.textContent = "Place: " + prophets[i].birthplace;
            numofchildren.textContent = "Children: " + prophets[i].numofchildren;
            length.textContent = "Prophet Years: " + prophets[i].length;
            death.textContent = "Death: " + prophets[i].death;

            card.appendChild(h2);
            card.appendChild(image);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(numofchildren);
            card.appendChild(length);
            card.appendChild(death);

            image.setAttribute('src', prophets[i].imageurl);

            document.querySelector('div.cards').appendChild(card);
        };
    });