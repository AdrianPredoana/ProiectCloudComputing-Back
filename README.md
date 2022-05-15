#Exchange Rate APP

În cadrul acestui proiect am realizat o aplicație care are ca scop returnarea sumei reieșite în urma unui schimb valutar, pe baza unei sume de bani introdusă, moneda în care este suma respectivă și moneda în care vrei sa schimbi suma. În final rezultatul acestui proces de Exchange Rate este trimis pe mail către un destinatar pe care îl putem alege.

Pentru a avea informațiile legate de ratele de schimb valutar am folosit API-ul site-ului Apilayer (https://apilayer.com/marketplace/description/exchangerates_data-api#authentication). Logica din spate este că atunci când completăm cu Suma de bani, moneda acelei sume și moneda în care vrem să schimbăm banii respectivi se va returna un JSON cu calculul noii sume de bani. API Key-ul site-ului utilizat este salvat în fișierul .env și este utilizat atunci când facem un request ca url.

Pentru partea de trimitere a mail-urilor am utilizat API-ul de la SendGrid (https://sendgrid.com/). Contul care trimite mail-urile este adresa de student de email și ca parametrii de request mai avem: numele expeditorului, adresa de email și mesajul care reprezintă rezultatul schimbului valutar.

În screenshot-ul de mai jos putem vedea baza de date utilizata pentru stocarea mail-urilor trimise:
 ![image](https://user-images.githubusercontent.com/105487372/168451188-a83f2b6c-d4d7-4e29-b4b0-98c2f17e9c23.png)

Metodele HTTP folosite
Get all Messages – Ne returnează mail-urile salvate în baza de date
 ![image](https://user-images.githubusercontent.com/105487372/168451190-fce54231-1cb3-4790-8e58-9ca267434e51.png)

Get Message by ID – Returnează detaliile mail-ului pentru un ID ales
 ![image](https://user-images.githubusercontent.com/105487372/168451200-736a9330-348f-41bb-ac2c-eab3f78d8f76.png)

Get exchange rate – Calculeaza Exchange Rate-ul și-l returnează
 ![image](https://user-images.githubusercontent.com/105487372/168451207-95b42ce5-b702-41b2-bbe0-92157c276f8e.png)

Delete by ID - Stergerea unei înregistrări din baza de date
 ![image](https://user-images.githubusercontent.com/105487372/168451212-53a50b8d-1d85-4eac-9be4-17ad3046f0b4.png)

Aplicația arată precum în screenshot-ul de mai jos. Userii vor avea de introdus:
-moneda sumei pe care vor să o schimbe în câmpul Base Currency
-moneda în care vor să schimbe suma în câmpul Exchange Currency
-suma pe care vor să o schimbe în câmpul Amount 
 ![image](https://user-images.githubusercontent.com/105487372/168451222-ebfaba2a-625a-486b-9ae9-f4dd6043d6dd.png)

După ce userii completează câmpurile menționate mai sus vor apăsa pe butonul Calculate care va returna suma dorită.
 ![image](https://user-images.githubusercontent.com/105487372/168451225-462720d3-bca8-445d-a37f-acfb4150e4f0.png)

Pentru trimiterea acestei informații pe mail, tot ce avem de făcut este să completăm câmpurile Your Name și Receiver Mail și să apăsăm pe butonul Send Mail.
 ![image](https://user-images.githubusercontent.com/105487372/168451234-00a792bf-4da3-4a38-91a5-f652d1216000.png)
![image](https://user-images.githubusercontent.com/105487372/168451239-056a7129-4eba-4024-a574-054c9ee98af0.png)

 

Bibliografie: Seminar Cloud Computing, https://apilayer.com/marketplace/description/exchangerates_data-api#authentication
Link youtube:  https://youtu.be/4N_An1JMzdw
Link heroku back:  link heroku front: 
