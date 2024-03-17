import { useGenres } from "../hooks/useGenres"

export function GenreList()
{
    const {Genres} = useGenres();
    return(
        <>
        {
            Genres.map(genre => <li>{genre.name}</li>)
        }
        </>
    )
}