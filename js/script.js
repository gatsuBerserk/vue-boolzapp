
const app = new Vue( 
    {
        el : "#app",
        data : { 
            activeElement : 0,   
            check: false, 
            sendMessage:"",
            search: "",   
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,  
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        
                    ],
                }, 
                 
            ],  
            
        },
        
        methods:{
            /**
             * Prendo l'indice con il click su HTML e lo passo ad activeElement in modo tale da attivare la classe che serve
             */  
            add : function(index){
                this.activeElement=index;  
            }, 
            /**
             * 
             * @param {*} activeElement elemento attivo
             * @param {*} string messaggio da inviare
             */   
            utentMessage: function(activeElement, string){ 
                // creiamo un nuovo oggetto
                const newMessage = { 
                    date:dayjs().format('DD-MM-YYYY') + ' ' + dayjs().format('hh') + ':' + dayjs().format('mm') + ':' + dayjs().format('ss'),
                    message: string,
                    status: 'sent'
                };
                // insieriamo il nuovo messaggio nell'oggetto messages
                this.contacts[activeElement].messages.push(newMessage); 
                // puliamo il campo input dopo aver inviato il messaggio
                this.sendMessage = '';
            }, 
            autoMessage: function(){
                if(this.check == false){
                    setTimeout(()=>{
                        const newMessage = {
                            date: dayjs().format('DD-MM-YYYY') + ' ' + dayjs().format('hh') + ':' + dayjs().format('mm') + ':' + dayjs().format('ss'),
                            message: 'OK!!',
                            status: 'received'};
                            
                        this.contacts[this.activeElement].messages.push(newMessage);
                    }, 1000)
                }
            },  
            // funzione cerca 
            
            /**
             * creaimo la variabile da associare all'input -------> done 
             * cicliamo sull'array di ogetti, ma a noi serve solo il primo object perche le informazioni che ci interessano sono li.
             * 
             */  
        searchContact(){ 
            // Se search non ?? vuoto
            if(this.search.trim() != ''){
                this.contacts.forEach( (element) => {
                    // element.visible = element.name.toLowerCase().includes(this.search.trim().toLowerCase()); 
                    
                    // Soluzioine alternativa. Con startWith cerchiamo  la prima lettera  
                    element.visible = element.name.toLowerCase().startsWith(this.search.trim().toLowerCase()); 
                })
            } 
            // Brutal Force
            this.search="";
        },  
    }
           
        
})  
