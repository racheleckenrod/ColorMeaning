document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
    const entry = document.querySelector('#entry').value;
    const res = await fetch(`https://color-meanings.herokuapp.com/api?${entry}`)
    const data = await res.json()

    console.log(data)
    document.querySelector('#summary').textContent = data.summary
    document.querySelector('#symbolizes').textContent = data.symbolizes
    document.querySelector('#effects').textContent = data.effects
    document.querySelector('#positive').textContent = data.positive
    document.querySelector('#negative').textContent = data.negative

}