import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

class WikiLogin extends LitElement {

    // static get properties(){
    //     // return { name: { type: String } };
    // }

    static get styles() {
        return css`
        fieldset {
            display: flex;
            flex-direction: column;
            border: none;
        }

        #form-cont {
            display: flex;
            justify-content: center;
        }

        #btn-cont {
            display: flex;
            justify-content: flex-end;
        }

        label, legend {
            display: none;
        }


        h2 {
            padding: 1em;
        }

        input {
            padding: 12px;
            margin: 5px 0 22px 0;
            background: #f1f1f1;
            
            width: 500px;
            height: 2.3em;
            border: 1px solid #c5c5c5;
            border-radius: 20px;
            font-size: 0.8em;
            font-family: sans-serif;
            padding: 0.4em 1em;
        }

        .button {
            background-color: rgb(29 113 185);
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 0.8em;
            font-family: sans-serif;
            padding: .5em 1em;
            height: min-content;

        }
    `}

    constructor() {
        super();
    }

    render() {
        return html`
            <h2>Inloggen Form</h2>
            <div id="form-cont">
                <form @submit=${this.login}>
                    <fieldset>
                        <legend>Inloggen form</legend>
                        <input id="email-input" type="email" placeholder="email" name="email" required>
                        <label for="email-input">Email input</label>

                        <input id="password-input" type="password" placeholder="wachtwoord" name="password" required>
                        <label for="password-input">Password input</label>

                    </fieldset> 
                    <div id="btn-cont">
                        <button type="submit" class="button">Inloggen</button>
                    </div>
                </form>
             </div>
        `
    }
    login(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        firebase
            .auth()
            .signInWithEmailAndPassword(formData.get("email"),formData.get("password"))
            .then((user) => {
                console.log(user.user.email);
                let loggedInUser = user.user;
                localStorage.setItem("email", loggedInUser.email);
                if (loggedInUser.email.includes("student"))
                    localStorage.setItem("role", "student");
                else if (loggedInUser.email.includes("docent"))
                    localStorage.setItem("role", "docent");

                /* Ga naar volgende pagina...... */
                /* Bij uitloggen, localStorage.removeItem("role") en "email"*/
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Deze gebruiker bestaat niet')
                console.log(errorMessage);
            });
    }
}

customElements.define('wiki-login', WikiLogin);