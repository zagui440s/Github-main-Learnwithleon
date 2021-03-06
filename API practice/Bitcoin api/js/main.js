
document.querySelector('button').addEventListener('click', getMoniez)

function getMoniez(){
document.querySelector("#rocket").classList.toggle('hidden')
document.querySelector("h5").classList.toggle('hidden')
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.bpi.USD.rate
      document.querySelector('h3').innerText = data.bpi.EUR.rate
      document.querySelector('h4').innerText = data.bpi.GBP.rate


    })
    .catch(err => {
      console.log(`err ${err}`)
    })
}
