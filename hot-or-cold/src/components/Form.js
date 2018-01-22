import React from "react";


export default function Form(){
    return(
        <form>
            <input placeholder="Enter your Guess"  name="userGuess" required/>
            <input id="guessButton" class="button" name="submit" value="Guess" type="submit"/>
        </form>
    );
}