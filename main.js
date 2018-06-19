 function selectionSort(array) { 
    let Array = [...array]
    Array.forEach(function(element, index) {
      let minValue = element; 
      let minIndex = index;
      for (let i = index; i < Array.length; i++) { 
        if (compare(Array[i], minValue) < 0){   
            minValue = Array[i];                  
            minIndex = i;                           
          }
      }
      Array = trocar(Array, index, minIndex);
    });
    return Array;
  }

  function compare(a, b) { 
    if (a < b) {
      return -1;
    }else if (a > b){
      return 1;
    } 
    return 0;
  }

  function trocar (array, n1, n2) {
    let aux = array[n1];
    array[n1] = array[n2];
    array[n2] = aux;

    return array;
  }
  

  