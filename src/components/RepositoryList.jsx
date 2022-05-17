import { RepositoryItem } from "./RepositoryItem";
const repository = {
  name: 'unformP',
  description: "Forms in react props",
  link: "https://github.com/"
}
export function RepositoryList(){
  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} description={repository.description} link={repository.link} /> 
        <RepositoryItem repository={repository} description={repository.description} link={repository.link} />
        <RepositoryItem repository={repository} description={repository.description} link={repository.link} />

      </ul>
    </section> 
  )
}