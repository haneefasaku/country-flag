const api = document.getElementById('api');

const loadCountryApi = () => {
    // Fetch URL from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // Check if data is an array and has length
        if (Array.isArray(data) && data.length > 0) {
            data.forEach(country => {
                // Create article element
                const article = document.createElement('article');
                
                // Create and set image element
                const img = document.createElement('img');
                img.src = country.flags.png;
                img.alt = `${country.name.common} flag`;

                // Create and set heading element
                const h2 = document.createElement('h2');
                h2.textContent = country.name.common;

                // Append heading and image to article
                article.appendChild(h2);
                article.appendChild(img);

                // Append article to the DOM
                api.appendChild(article);
            });
        } else {
            console.log('No countries found.');
        }
    })
    .catch(error => console.error('Fetch error:', error));
}

loadCountryApi();

