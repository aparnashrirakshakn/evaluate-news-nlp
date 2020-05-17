function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value;
    
    if(Client.checkForUrl(formText)){
        document.getElementById('error').innerHTML = '';
        fetch('http://localhost:8081/news', {
            method: 'POST',
            body: JSON.stringify({text: formText}),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerHTML = `<p>Polarity: ${res.polarity}</p><p>Confidence: ${res.polarity_confidence * 100}%</p><p>Subjectivity: ${res.subjectivity}</p>
            <p>Confidence: ${res.subjectivity_confidence * 100}%</p>`;
        })
    }
    else {
        document.getElementById('error').innerHTML = `<p>ERROR!</p><p>"Please check the url entered. Something seems to be wrong!"</p>`
    }
}

export { handleSubmit }