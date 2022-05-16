function contar() {
    let inici = document.getElementById('ini1')
    let fim = document.getElementById('fim1')
    let pass = document.getElementById('pas1')
    let res = document.getElementById('res')

    if (inici.value.length == 0 || fim.value.length == 0 || pass.value.length== 0) {
        res.innerHTML = 'Impossivel contar, complete todos os campos.'
    } else {
    res.innerHTML = 'Contando:'
    let i = Number(inici.value)
    let f = Number(fim.value)
    let p = Number(pass.value)
    if (p <= 0) {
        window.alert('Passo 0 ou menor: invalido!!!')
        p = 1
    }
    if (i < f) {
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
          }
         
    } else {
        for(let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
        }
    } 
    res.innerHTML +=  `\u{1F3c1}` 
  } 
}