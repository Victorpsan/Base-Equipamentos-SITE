window.onload = function() {
    if (matchMedia('(min-width:653px').matches){
       let headerp1 = document.createElement('div');
       headerp1.classList = 'tleft';
       let t1lp1 = document.getElementById('t1cp1');
       let t2lp1 = document.getElementById('t2cp1');
       headerp1.appendChild(t1lp1);
       headerp1.appendChild(t2lp1);
       let artigo1 = document.getElementById("p1");
       artigo1.appendChild(headerp1);
    
       let contentp1 = document.createElement('div');
       contentp1.classList = 'contentp1'
       let imgp1 = document.getElementById('imgp1');
       let infotecp1 = document.getElementById("infotecp1");
       contentp1.appendChild(imgp1);
       contentp1.appendChild(infotecp1);
       artigo1.appendChild(contentp1);
       console.log(contentp1)

    } else {
        console.log('num del!')
    }
    

}