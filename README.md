# DOM Tree Formatter

Dette projekt indeholder en JavaScript-funktion, der formaterer og udskriver HTML-strukturen for et webdokument, inklusive korrekt indrykning og håndtering af void-elementer og inline-elementer.

## Funktionalitet

- **DOM Traversal**: Går igennem DOM-træet og formatterer det.
- **Void Elements**: Håndterer elementer, der ikke har børn, som f.eks. `<img>`, `<br>`, `<input>`, etc.
- **Inline Elements**: Håndterer inline-elementer som f.eks. `<span>`, `<a>`, `<strong>`, etc.
- **Børns Indrykning**: Indrykker korrekt afhængigt af, om et element er inline eller ej.

## Hvordan det virker

Når DOM'en er fuldt indlæst, formaterer scriptet hele HTML-strukturen og udskriver den i konsollen med korrekt indrykning og linjeskift.

### Eksempel på output:

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <header>
        <h1>Welcome to the <em>Self-Printing</em> Page</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="section">
            <h2>Home</h2>
            <p>Welcome to our DOM Tree Printer! This tool helps you visualize HTML structure.</p>
            <button onclick="window.location.href='#'" class="back-button">Back to Top</button>
        </section>

        <section id="about" class="section">
            <h2>About</h2>
            <p>This project demonstrates DOM traversal and pretty printing of HTML structure.</p>
            <p>Key features include:</p>
            <ul>
                <li>Proper indentation of nested elements</li>
                <li>Handling of inline and block elements</li>
                <li>Special treatment of void elements</li>
            </ul>
            <button onclick="window.location.href='#'" class="back-button">Back to Top</button>
        </section>

        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>Get in touch with us:</p>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <button onclick="window.location.href='#'" class="back-button">Back to Top</button>
        </section>
    </main>

    <footer>
        <hr>
        <p>&copy; 2024 - DOM Tree Printer Example</p>
    </footer>
    </body>
</html>
 ```

## Installation
- Klon eller download dette repository.
- Inkluder script.js i dit projekt.
- Kør scriptet, når DOM'en er indlæst.