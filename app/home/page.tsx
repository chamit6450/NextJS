import axios from "axios";

export default async function Home() {
    const response = await axios.get('https://catfact.ninja/fact');

    const data = response.data;

    return(
        <div>

            {data.fact}
        </div>
    )
}