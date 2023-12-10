import styles from '@/styles/Ninjas.module.css'
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();  // Await the result of the promise

    return {
        props: { ninjas: data}
    }
}


const Ninjas = ({ninjas}) => {

    return ( 
        <>
        <Head>
          <title>Ninja API | List </title>
          <meta name="keywords" content="ninjas"/>
      </Head>
            <h1>See All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link className={styles.single}
                 href={'/ninjas/' + ninja.id} key={ninja.id}>
                    
                        <h3>{ ninja.name }</h3>
                    
                </Link>
            ))}
        </>
     );
}
 
export default Ninjas;