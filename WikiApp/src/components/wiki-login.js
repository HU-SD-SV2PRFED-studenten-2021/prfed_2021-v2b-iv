import {LitElement, html, css} from 'https://cdn.skypack.dev/lit-element@2.3.1'

class WikiLogin extends LitElement {

    // static get properties(){
    //     // return { name: { type: String } };
    // }

    static get styles() {
        return css`

.form-container {
    max-width: 250px;
    padding: 10px;
    background-color: white;
}

.form-container input[type=email], .form-container input[type=password] {
    width: 90%;
    padding: 12px;
    margin: 5px 0 22px 0;
    background: #f1f1f1;
    
    max-width: 300px;
    height: 2.3em;
    border: none;
    border-radius: 20px;
    font-size: 0.8em;
    font-family: sans-serif;
    padding: 0.4em 1em;
}

.form-container .button {
    background-color: rgb(29 113 185);
    color: white;
    
    max-width: 300px;
    height: 2.3em;
    border: none;
    border-radius: 20px;
    font-size: 0.8em;
    font-family: sans-serif;
    padding: 0.4em 1em;

}
    `}

    constructor() {
        super();
    }

    render() {
        return html`
        <div class="form-popup" id="myForm">
             <form class="form-container" @submit=${this.login}>
                 <h1>Inloggen</h1>
                 <input id="email" type="email" placeholder="email" name="email" required>
                 <input id="password" type="password" placeholder="wachtwoord" name="password" required>
                 <button type="submit" class="button">Inloggen</button>
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