import Image from "next/image";

async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }

  return res.json();
}

export default async function Home() {
  const { results } = await fetchCharacters();

  return (
    <div>
      <p>Rick and Morty Characters</p>
      <div className="grid grid-cols-3 gap-4">
        {results.map((character) => (
          <div key={character.id} className="border p-2">
            <Image 
              src={character.image} 
              alt={character.name} 
              width={200} 
              height={200} 
              className="w-full"
            />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}