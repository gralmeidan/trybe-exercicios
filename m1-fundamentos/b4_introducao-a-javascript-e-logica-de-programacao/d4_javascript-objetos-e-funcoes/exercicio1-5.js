let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let tio = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for(let key in info){
  if(info[key] == tio[key]){
    console.log('Ambos ' + key);
  }
  else {
    console.log(info[key] + ' e ' + tio[key]);
  }
}