interface Iproject {
     name : string,
     description : string,
     technologies: string[]
}

const projects : Iproject[] = [
    {
    name : 'Fit-Focus', 
    description : 'A web app to do exercises and keep an active lifestyle, with a Personalized Routine, news, tips and more!.',
    technologies :['JavaScript','Node.js','Express.js','MongoDB','Mongoose','JWT Auth']
    },
    {
     name:'Contacts-App',
     description : '',
     technologies: ['TypeScript','Node.js','Express.js','MongoDB','JWT Auth','React','Redux']
    },
    {
     name : 'Videogames-App',
     description: 'A web app for visualizing and interact with information of 100 games, consuming the RAWG API. Manipulating database storing the information of each game, can create a new videogame, seachbar and sorting filters.',
     technologies: ['JavaScript','Node.js','Express.js','PostgreSQL','React','Redux','CSS']
    }
]

export default projects;