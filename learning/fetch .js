console.log(
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(respons => respons.json())
    .then(data => console.log(data))
)