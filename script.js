const input = document.querySelector('.input-id')
const btnsurch = document.querySelector('.btnsurch')
const div = document.querySelector('.information')
const image = document.querySelector('.image')

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data
    })

    return result
}

btnsurch.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchApi(input.value)
    div.textContent = `${JSON.stringify(result, undefined, 5)}`
    image.style.display = "unset"
    image.src = `${result.image}`
})