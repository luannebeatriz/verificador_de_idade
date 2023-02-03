function verificar() {
  let data = new Date();
  // getfull year é pra aparecer 4 digitos no ano.
  let ano = data.getFullYear();
  let fAno = document.getElementById("txtano");
  let mainDiv = document.getElementById("main-div");
  let btnDiv = document.getElementById("btn-div");
  // outra forma de selecionar a div que é a mesma coisa, a forma abaixo é mais utilizada atualmente:
  let res = document.querySelector("div#res");
  let divImagem = document.querySelector("div#div-foto");
  let img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("check the data and try again");
  } else {
    let fSex = document.getElementsByName("radsex");
    let idade = ano - Number(fAno.value);
    //res.innerHTML = `idade calculada: ${idade}`(pra testar)
    //f12 para renomear a mesma palavra em todos os lugares ao mesmo tempo.
    let genero = "";
    if (fSex[0].checked) {
      genero = "man";
      if (idade >= 0 && idade < 3) {
        genero = "boy";
        //bebê
        img.src = "./1bebe_menino.png";
      } else if (idade >= 3 && idade < 10) {
        genero = "boy";
        //criança
        img.src = "./2criança_menino.png";
      } else if (idade >= 10 && idade < 25) {
        //jovem
        img.src = "3jovem_menino.png";
      } else if (idade >= 25 && idade < 50) {
        //adulto
        img.src = "4adulto_homem.png";
      } else {
        //idoso
        img.src = "./5idoso_homem.png";
      }

      document.body.style.background = "#536e56";
    } else if (fSex[1].checked) {
      genero = "woman";
      if (idade >= 0 && idade < 3) {
        genero = "girl";
        //bebê
        img.src = "./1bebe_menina.png";
      } else if (idade >= 3 && idade < 10) {
        genero = "girl";
        //criança
        img.src = "./2crianca_menina.png";
      } else if (idade >= 10 && idade < 27) {
        //jovem
        img.src = "./3jovem_menina.png";
      } else if (idade >= 27 && idade < 50) {
        //adulto
        img.src = "./4adulta_mulher.png";
      } else {
        //idoso
        img.src = "./5idosa_mulher.png";
      }

      document.body.style.background = "#e394df";
    }

    res.style.textAlign = "center";
    mainDiv.style.display = "none";
    btnDiv.style.display = "block";
    // divImagem.innerHTML = '';
    res.innerHTML = `you are a ${idade}yo ${genero}`;
    divImagem.appendChild(img);
  }
}

function voltar() {
  let mainDiv = document.getElementById("main-div");
  let btnDiv = document.getElementById("btn-div");
  let res = document.querySelector("div#res");
  let divImagem = document.querySelector("div#div-foto");
  mainDiv.style.display = "block";
  btnDiv.style.display = "none";
  res.innerHTML = "";
  divImagem.innerHTML = "";
  document.body.style.background = "#ad7373";
}
