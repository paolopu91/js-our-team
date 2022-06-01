/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, 
dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card:
Nome, Ruolo e Foto.

Milestone 1:
stampare in console l’elenco dei membri del team, 
scrivendo separatamente i dettagli di ciascun componente.

Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico,
creando per ciascun membro del team un elemento html che conterrà i suoi dati.

BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, 
come nel mockup allegato.

Consigli del giorno:
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico, ed anche il console.table()
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva immagine visibile nell’html?
Buon lavoro!
*/

//Milestone numero 1:
// creo il mio array dove andrò ad inserire il nome dei membri del team

const containerTeam =[
    {
        nome :"Wayne Barnett" ,
        ruolo : "founder and CEO" ,
        
    },
    {
        nome : "Angela Caroll" ,
        ruolo :"Chief Editor" ,
        
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        
    },
    {
        nome :"Angela Lopez" ,
        ruolo : "Social Media Manager",
        
    },
    {
        nome : "Scott Estrada",
        ruolo :"Developer" ,
        
    },
    {
        nome : "Barbara Ramos" ,
        ruolo : " Graphic Designer",
        
    },

];
console.table(containerTeam);

//Milestone 2:
