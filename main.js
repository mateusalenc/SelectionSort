 function selectionSort(array) { //Função Selecion Sort
    let Array = [...array]  //Criando o array. O '...' significa que a função/metodo receberá uma quantidade relativa de dados e tratará como um array.
    Array.forEach(function(element, index) {//Element é o elemento e Index é o indice de Element. O forEach nos permite executar determinado codigo para cada elemento na matriz
      let minValue = element; //O minValue vai ser o primeiro elemento, porque eu não comparei ele com nenhum elemento.
      let minIndex = index;//O MinIndex é o numero do menor indice.
      for (let i = index; i < Array.length; i++) { //Nós encontramos o menor numero, e encotramos o segundo, não precisamos voltar ao indice 1 porque já passamos por ele
                                                        //Por isso o i = index, para indexar todos os index
        if (compare(Array[i], minValue) < 0){   //Vai decidir se precisamos trocar dois elementos ou não. O sortedArray[i] vai iterar atravez de cada numero
                                                      //Na primeira iteração vai comparar o elemento com ele mesmo, Na segunda iteração vai comparar o primeiro com o segundo
            minValue = Array[i];                  //MinValue vai receber sortedArray no indice i
            minIndex = i;                           //E o menor indice vai receber o indice do elemento
          }
      }
      Array = trocar(Array, index, minIndex);
    });
    return Array; //Retorna o array
  }
  
  function compare(a, b) { //Compara dois elementos
    if (a < b) {
      return -1; // Se o elemento A for menor que b, vai retorna -1 na linha 8
    }else if (a > b){
      return 1; //Se o elemento A for maior que b, troque-os.
    } 
    return 0;
  }

  function trocar (array, n1, n2) { //Troca dois elementos
    let aux = array[n1];
    array[n1] = array[n2];
    array[n2] = aux;

    return array;
  }
  

  