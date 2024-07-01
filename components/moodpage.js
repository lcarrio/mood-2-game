import { Query } from "../app/api/steamdb";
export async function getServerSideProps() {
    // Fetch data from external API
    const QueryGenre = "Adventure";
    const res = await fetch(Query("Adventure"));
    const repo = await res.json();
    // Pass data to the page via props
    return { props: { repo } }
  }
  export default function Page({ repo }) {
    return (
        
      <main>
            {repo.name}
      </main>
    )   
  }