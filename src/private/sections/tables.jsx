export default function Tables(){
    return(
        <div className="sectionContainer">
            <h1>About: Welcome to my Website!</h1>
            <br/>
            <a href="/">Home</a>
            <br/>
            <p>Welcome to the hidden part of my website! This is a homework web page for my class, 3806 - Computer Literacy!</p>
            <br/>
            <h2>Favorite Restaurants</h2>
            <table className="tableHolder">
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Cuisine</th>
                </tr>
                <tr className="odd">
                    <td>Shabuya</td>
                    <td>2025 Diamond Blvd, Concord, CA 94520</td>
                    <td>Chinese Hot Pot</td>
                </tr>
                <tr className="even">
                    <td>Genki</td>
                    <td>1581 Sycamore Ave Ste 8, Hercules, CA 94547</td>
                    <td>Japanese Sushi Bar</td>
                </tr>
                <tr className="odd">
                    <td>Max's Restaurant</td>
                    <td>1511 El Camino Real, South SF, CA 94080</td>
                    <td>Filipino Cuisine</td>
                </tr>
                <tr className="even">
                    <td>Jumping Spoon</td>
                    <td>1375 Sycamore Ave, Hercules, Ca 94547</td>
                    <td>Korean Cuisine</td>
                </tr>
            </table>
        </div>
    )
}