export const translate = (style: any, isEnglish: boolean) => {
    return {
        intro: isEnglish ?
            <>
                <h3>intro</h3>
                <p>
                    My name is Victor Sango.<br />
                    I'm a {new Date().getFullYear() - new Date('2001-12-12').getFullYear()} year old <strong>full stack</strong> developer from Denmark.
                </p>
                <p>
                    I've been programming <strong>for more than 7 years</strong> and started with <strong>C#</strong> as my first language.
                </p>
                <p>
                    I'm currently studying <strong>Multimedia Design</strong> at <strong>Erhversakademi Aarhus (EAAA)</strong> finishing in 2025.
                </p>
                <p>
                    I'm also running a <strong>Mentorship Program</strong> where I help other students with their coding skills.
                </p>
            </> :
            <>
                <h3>intro</h3>
                <p>
                    Jeg hedder Victor Sango.<br />
                    Jeg er en {new Date().getFullYear() - new Date('2001-12-12').getFullYear()} år gammel <strong>full stack</strong> udvikler fra Danmark.
                </p>
                <p>
                    Jeg har programmeret i <strong>over 7 år</strong> og startede med <strong>C#</strong> som mit første sprog.
                </p>
                <p>
                    Jeg studerer pt. <strong>Multimediedesigner</strong> på <strong>Erhversakademi Aarhus (EAAA)</strong> og bliver færdig i 2025.
                </p>
                <p>
                    Jeg kører også en <strong>Mentor Program</strong> hvor jeg hjælper andre studerende med at programmere.
                </p>
            </>,
        journey: isEnglish ?
            <>
                <h3>journey</h3>
                <table className={style.table} cellPadding='0'>
                    <tbody>
                        <tr>
                            <td><p><strong>2023 - 2025</strong></p></td>
                            <td><p><strong>Multimedia Design (EAAA)</strong></p></td>
                        </tr>
                        <tr>
                            <td><p>2021 - 2023</p></td>
                            <td><p>Freelancer and CEO at deltabox</p></td>
                        </tr>
                        <tr>
                            <td><p>2018 - 2021</p></td>
                            <td><p>Aarhus Business College</p></td>
                        </tr>
                        <tr>
                            <td><p>2017 - 2018</p></td>
                            <td><p>Laursens Realskole</p></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <br />
                    <strong>how did i learn to code?</strong>
                    <br />
                    9 years ago my brother introduced me to programming but it wasn't until early 2016 that I felt like I needed to learn it.
                </p>
                <br />
                <p>
                    I was fiddling with a tool where you can create motion graphics and animations with a simple video editor, but in order to achieve more complex results I would need to learn C#.
                </p>
                <p>
                    After realizing how cool and satisfying it felt to immedietly see the results, I decided to create my own projects and started learning new programming languages such as JavaScript and TypsScript.
                </p>
            </> :
            <>
                <h3>rejse</h3>
                <table className={style.table} cellPadding='0'>
                    <tbody>
                        <tr>
                            <td><p><strong>2023 - 2025</strong></p></td>
                            <td><p><strong>Multimediedesigner (EAAA)</strong></p></td>
                        </tr>
                        <tr>
                            <td><p>2021 - 2023</p></td>
                            <td><p>Freelancer og CEO hos deltabox</p></td>
                        </tr>
                        <tr>
                            <td><p>2018 - 2021</p></td>
                            <td><p>Aarhus Business College</p></td>
                        </tr>
                        <tr>
                            <td><p>2017 - 2018</p></td>
                            <td><p>Laursens Realskole</p></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <br />
                    <strong>hvordan lærte jeg at programmere?</strong>
                    <br />
                    For 9 år siden introducererede min bror mig til programmering, men det var ikke indtil 2016, at jeg følte at jeg havde brug for at lære det.
                </p>
                <br />
                <p>
                    Jeg legede rundt med en tool hvor man kan oprette motion graphics og animationer med en simpel redigeringsværktøj, men for at opnå mere komplekse resultater blev jeg nødt til at lære C#.
                </p>
                <p>
                    Efter at have opdaget hvor fedt og tilfredsstillende det var at se resultaterne med det samme, besluttede jeg mig for at lave mine egne projekter og startede med at lære nye programmeringssprog fx JavaScript og TypsScript.
                </p>
            </>,
    }
}