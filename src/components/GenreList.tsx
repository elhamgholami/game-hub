import useGenres from "../hooks/useGenres"

export function GenreList()
{
    const {data} = useGenres();
    return(
        <>
        {
            data.map(genre => <li>{genre.name}</li>)
        }
        </>
    )
}