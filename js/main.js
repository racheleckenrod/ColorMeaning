document.querySelector('#clickMe').addEventListener('click', makeReq)

const entry = document.querySelector('#entry').value;
async function makeReq(){
    // const entry = document.querySelector('#entry').value;
    const res = await fetch(`https://color-meanings.herokuapp.com/api/${entry}`)
    const data = await res.json()

    console.log(data)
    document.querySelector('#summary').textContent = 'Summary' + " " + data.summary
    document.querySelector('#symbolizes').textContent = `Symbolizes \n ${data.symbolizes}`
    document.querySelector('#effects').textContent = `Effects \n ${data.effects}`
    document.querySelector('#positive').textContent = `Positive \n ${data.positive}`
    document.querySelector('#negative').textContent = `Negative \n ${data.negative}`

}

document.querySelector('#page').style.backgroundColor = entry