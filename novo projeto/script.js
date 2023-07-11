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
       


       let headerp2 = document.createElement('div');
       headerp2.classList = 'tright';

       let t1lp2 = document.getElementById('t1cp2');
       let t2lp2 = document.getElementById('t2cp2');
       headerp2.appendChild(t1lp2);
       headerp2.appendChild(t2lp2);

       let artigo2 = document.getElementById("p2");
       artigo2.appendChild(headerp2);
    
       let contentp2 = document.createElement('div');
       contentp2.classList = 'contentp2'
       
       let imgp2 = document.getElementById('imgp2');
       let infotecp2 = document.getElementById("infotecp2");
       contentp2.appendChild(imgp2);
       contentp2.appendChild(infotecp2);
       artigo2.appendChild(contentp2);


       
       let headerp3 = document.createElement('div');
       headerp3.classList = 'tleft';

       let t1lp3 = document.getElementById('t1cp3');
       let t2lp3 = document.getElementById('t2cp3');
       headerp3.appendChild(t1lp3);
       headerp3.appendChild(t2lp3);

       let artigo3 = document.getElementById("p3");
       artigo3.appendChild(headerp3);
    
       let contentp3 = document.createElement('div');
       contentp3.classList = 'contentp1'
       
       let imgp3 = document.getElementById('imgp3');
       let infotecp3 = document.getElementById("infotecp3");
       contentp3.appendChild(imgp3);
       contentp3.appendChild(infotecp3);
       artigo3.appendChild(contentp3);



       let headerp4 = document.createElement('div');
       headerp4.classList = 'tright';

       let t1lp4 = document.getElementById('t1cp4');
       let t2lp4 = document.getElementById('t2cp4');
       headerp4.appendChild(t1lp4);
       headerp4.appendChild(t2lp4);

       let artigo4 = document.getElementById("p4");
       artigo4.appendChild(headerp4);
     
       let contentp4 = document.createElement('div');
       contentp4.classList = 'contentp2'
       
       let imgp4 = document.getElementById('imgp4');
       let infotecp4 = document.getElementById("infotecp4");
       contentp4.appendChild(imgp4);
       contentp4.appendChild(infotecp4);
       artigo4.appendChild(contentp4);

        let contatos = document.createElement('div');
        contatos.classList = 'contatos';

        let tel = document.createElement('div');
        tel.classList = 'telefone'
        contatos.appendChild(tel)
        let tittel = document.querySelector('#tittel');
        let ntel = document.getElementById('ntel');
        tel.appendChild(tittel);
        tel.appendChild(ntel);

        let email = document.createElement('div');
        email.classList = 'email';
        contatos.appendChild(email);
        let titmail = document.getElementById('titmail');
        let endmail = document.getElementById('endmail');
        email.appendChild(titmail);
        email.appendChild(endmail);

        let endereço = document.createElement('div');
        endereço.classList = 'endereço';
        contatos.appendChild(endereço);
        let titend = document.getElementById('titend');
        let endfis = document.getElementById('endfis');
        endereço.appendChild(titend);
        endereço.appendChild(endfis);

        let form = document.querySelector('form');
        contato.insertBefore(contatos, form);



        console.log(contato);

      

    } else {
        console.log('num del!')
    }
}
