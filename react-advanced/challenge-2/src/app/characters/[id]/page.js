import Image from "next/image";
import Link from "next/link";

async function fetchCharacterDetails(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch character details');
  }

  return res.json();
}

export default async function CharacterDetailPage({ params }) {
  const character = await fetchCharacterDetails(params.id);

  return (
    <div className="container mx-auto p-4">
        <Link 
          href="/" 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <Image 
          src={character.image} 
          alt={character.name} 
          width={400} 
          height={400} 
          className="w-full object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{character.name}</h1>
          <div className="space-y-2">
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Number of Episodes:</strong> {character.episode.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}