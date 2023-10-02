/* Bienve tache : 
    - Creer trois 3 tableaux chacun de tableaux dois avoir 5 index dont chacune seras une chaine
    qui aura un message.
    - creer un Redmi
    Balavane tache:
    - creer une fonction qui afficheras le message*/
    let fruit = ["avocar","ananas","orange","citron","banane"];
  
    let object = ["latte","stylos","ordinateur","modem","agenda"];
  
    let number = [ "one","five","two","nani","six"];
  // creation des mots aleatoire 
 const fruits_aleatoire = Math.floor(Math.random()* fruit.length)
 const object_aleatoire = Math.floor(Math.random()* object.length)
 const number_aleatoire = Math.floor(Math.random()* number.length)
  
// Creation du fonction des mots aleatoires
 const hasard_mots = () => {
  let a = Math.floor(Math.random()* 3)
  if(a == 0){
    return fruit[fruits_aleatoire] + " : l'element du tableau fruit à l'index " + fruits_aleatoire
  }else if (a == 1){
   return object[object_aleatoire] + " : l'element du tableau object à l'index " + object_aleatoire 
  }else{
   return number[number_aleatoire] + " : l'element du tableau number à l'index "+ number_aleatoire
  }
}

// affichage de mots aleatoire
console.log(hasard_mots())
  
   
