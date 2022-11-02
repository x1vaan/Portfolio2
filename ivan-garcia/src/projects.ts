interface Iproject {
     name : string,
     description : string,
     technologies: string[],
     image : string,
     link : string
}

const projects : Iproject[] = [
    {
    name : 'Fit-Focus', 
    description : 'A web app to do exercises and keep an active lifestyle, with a Personalized Routine, news, tips and more!. I have worked in the Backend, creating a REST API, manipulating database, and implementing Authentication with JWT.',
    technologies :['JavaScript','Node.js','Express.js','MongoDB','Mongoose','JWT Auth'],
    image : 'Fit-Focus.png',
    link : 'https://pf-app-five.vercel.app/'
    },
    {
     name:'Contacts-App',
     description : 'In this Web Application you can store your contacts, visualize them and edit. Data persistence, and Authentication with JWT.',
     technologies: ['TypeScript','Node.js','Express.js','MongoDB','JWT Auth','React','Redux'],
     image: 'Contacts-App.png',
     link : 'https://contacts-app-phi.vercel.app/'
    },
    {
     name : 'Videogames-App',
     description: 'A web app for visualizing and interact with information of 100 games, consuming the RAWG API. Manipulating database,storing the information of each game,create a new videogame, seachbar and sorting filters.',
     technologies: ['JavaScript','Node.js','Express.js','PostgreSQL','React','Redux','CSS'],
     image : 'Videogames-App.png',
     link: 'https://videogames-project-topaz.vercel.app/'
    }
]

export default projects;