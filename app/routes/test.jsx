import LandingButton from "../components/landingButton"
import RecipeCard from "../components/recipeCard"
import DataCard from "../components/data-card"

export default function TestPage() { 
    // This is a test page to see if the components are working correctly
    return(
        <div>
            <h1>Test Page</h1>
            <h2>Landing Button</h2>
            <LandingButton bgColor={"#381E72"} textColor={"#D0BCFE"} boxWidth={"200px"} text={"Click Me!"} />
            <h2>Recipe Card</h2>
            <RecipeCard boxWidth={"300px"} leftRowInfo={["1", "2"]} rightRowInfo={["3", "4"]} />
            <h2>Data Card</h2>
            <DataCard boxWidth={"300px"} leftRowInfo={["1", "2"]} rightRowInfo={["3", "4"]} />
        </div>
    );
}