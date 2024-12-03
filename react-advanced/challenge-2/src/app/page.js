import Image from "next/image";
import Link from "next/link";

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
      <div className="grid grid-cols-3 gap-4">
        {results.map((character) => (
          <Link 
            href={`/characters/${character.id}`} 
            key={character.id}
            className="hover:scale-105 transition-transform"
          >
            <div className="border rounded-lg overflow-hidden shadow-md">
              <Image 
                src={character.image} 
                alt={character.name} 
                width={300} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <h2 className="font-bold">{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}