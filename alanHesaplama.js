const pi=3
const arguments=process.argv.slice(2)

function alanHesapla(yarıcap){
    let alan=pi*(yarıcap*yarıcap)

    console.log("yarıçapı "+arguments[0]+" olan dairenin alanı:"+ alan)
}

alanHesapla(arguments[0])
