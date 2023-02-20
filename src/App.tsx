
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

const posts: PostType[] =[
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/WigoF.png',
      name:'Wigo Ferreira',
      role:'React Developer'
    }, 
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 WigoF.design/doctorcare'}
    ],
    publishedAt: new Date('2023-02-12 20:00:00')
  },

  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/larissapessoa.png',
      name:'Larissa Pessoa',
      role:'Software Development'
    }, 
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 WigoF.design/doctorcare'}
    ],
    publishedAt: new Date('2023-02-10 20:00:00')
  }
]


export function App() {
  return (
    <div>
    
    <Header />
    
      <div className={styles.wrapper}>
        
          <Sidebar />
        
          <main>
            {posts.map(post =>{
              return (
                <Post 
                key={post.id}
                post={post}
                />
              )
            })}

           
          </main>

      </div>
    </div>
  )
}



