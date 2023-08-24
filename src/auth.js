export function getAuthForm() {
    return `
        <form class="mui-form" id="auth_form">

                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id="password" required>
                    <label for="password">Password</label>
                </div>

                <button type="submit" id="submit" class="mui-btn mui-btn--raised mui-btn--primary disabled">Log In</button>
            </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = "AIzaSyBTRpblwQACYurxhdOEveVZfm7WoswF0tc"
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))


}