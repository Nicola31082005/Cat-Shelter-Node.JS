export const addCat = (breeds) => 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
    </header>
    <main>
        <form action="/cats/add-cat" method="POST" class="cat-form">
            <h2>Add Cat</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name" required>
            <label for="description">Description</label>
            <textarea name="description" id="description" required></textarea>
            <label for="image">Image Url</label>
            <input name="imageUrl" type="text" id="image" required>
            <label for="group">Breed</label>
            <select name="breed" id="group" required>
                ${breeds.map(breed => 
                    `<option value="${breed}">${breed}</option>`
                )}
                
            </select>
            <button type="submit">Add Cat</button>
        </form>
    </main>
</body>

</html>
`
    
