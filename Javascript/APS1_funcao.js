/**
  Trabalho da disciplina de Programação em JavaScript
  Turma:963R
  Aluno:Luiz Gustavo Arruda Nascimento
  Matricula:2024100924
*/

function isPrime(num){
  if(num<2){
    return false;
  }
  for(let i=num-1; i>=2; i--){
      let resto = num % i
      if (resto == 0){
        return false; 
      }
  }
  return true;
}

function findLargestPrimes(num){
  const primos = [];
  if(num>=2){
    primos.push(2);
  }
  for(let i=3; i <= num; i+=2){
    if (isPrime(i) == true){
      primos.push(i);   
    }
  }
  return primos;
}

let  num = parseInt(prompt("É numero primo?"));
let primo = isPrime(num);
if (primo == true){
  alert(num + " é numero primo.");
}
else{
  alert(num + " não é numero primo.");
}

alert("Os números primos correspondestes são: " + findLargestPrimes(num));
