const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
});

let seedMoviesData = [
    {
        movie_title: 'The Italian Job',
        genre: 'Action',
        cover_img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81SFgtWNp+L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        movie_title: 'Die Hard',
        genre: 'Action',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
        movie_title: 'Hancock',
        genre: 'Action',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Hancockposter.jpg',
    },
    {
        movie_title: 'Drunken Master',
        genre: 'Action',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMzY1ZjM2MzgtODUwZi00NWM3LThlYjAtNWJjZGM2ZDY1ODg1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg',
    },
    {
        movie_title: 'Saving Private Ryan',
        genre: 'Action',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg',
    },
    {
        movie_title: 'Old School',
        genre: 'Comedy',
        cover_img: 'https://www.themoviedb.org/t/p/original/a7NFIR4BQlFs6PbFqR6EKcmdl6H.jpg',
    },
    {
        movie_title: 'Rat Race',
        genre: 'Comedy',
        cover_img: 'https://play-lh.googleusercontent.com/zPfJJ_t_zWLKRV9OudOJDr5aVlwvB81sKWCewIMm-YJmXJbXQrOQMGERgj5-R3UFNaU1',
    },
    {
        movie_title: 'Jackass #2',
        genre: 'Comedy',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Jackass_Number_Two_movie_poster.jpg',
    },
    {
        movie_title: `Let's Go to Prison`,
        genre: 'Comedy',
        cover_img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61gR8ON0H6L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        movie_title: 'Zoolander #1',
        genre: 'Comedy',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_.jpg',
    },
    {
        movie_title: 'Knives Out',
        genre: 'Crime',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
    },
    {
        movie_title: 'Training Day',
        genre: 'Crime',
        cover_img: 'https://static.wikia.nocookie.net/dvd/images/5/5c/Training_Day_%28DVD%29.JPG/revision/latest/scale-to-width-down/300?cb=20221212224321',
    },
    {
        movie_title: 'The Da Vinci Code',
        genre: 'Crime',
        cover_img: 'https://static.wikia.nocookie.net/davincicode/images/0/0f/Da_Vinci_Code_poster.jpg/revision/latest?cb=20150623194856',
    },
    {
        movie_title: 'The Godfather #1',
        genre: 'Crime',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
        movie_title: 'Zodiac',
        genre: 'Crime',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
        movie_title: 'Red Dawn',
        genre: 'Disaster',
        cover_img: 'https://i.ebayimg.com/images/g/uSoAAOSwGf5kxpCR/s-l1200.jpg',
    },
    {
        movie_title: 'Deep Impact',
        genre: 'Disaster',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BYTUwMTY1YmMtN2U5NC00YjkzLTg0YWQtZmEwNTEzZjdkNzQ2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
        movie_title: 'Apollo 13',
        genre: 'Disaster',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Apollo_thirteen_movie.jpg',
    },
    {
        movie_title: 'Armageddon',
        genre: 'Disaster',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMTMwNDUzYjgtMGRiZS00MWFlLWIxZmYtZGE4OGUyYWZiYWRmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
    },
    {
        movie_title: 'tremors',
        genre: 'Disaster',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMTEzNjkwMzIyMjZeQTJeQWpwZ15BbWU4MDI2NTU5ODYx._V1_.jpg',
    },
    {
        movie_title: 'American History X',
        genre: 'Drama',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMTU5OTczMzM4M15BMl5BanBnXkFtZTYwNjk1Mzg4._V1_.jpg',
    },
    {
        movie_title: 'Good Will Hunting',
        genre: 'Drama',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
        movie_title: 'Her',
        genre: 'Drama',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg',
    },
    {
        movie_title: 'Seven',
        genre: 'Drama',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
        movie_title: 'Unbreakable',
        genre: 'Drama',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMDIwMjAxNzktNmEzYS00ZDY5LWEyZjktM2Y0MmUzZDkyYmZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    },
    {
        movie_title: 'Hocus Pocus #1',
        genre: 'Holiday',
        cover_img: 'https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg',
    },
    {
        movie_title: 'Hocus Pocus #2',
        genre: 'Holiday',
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Hocus_Pocus_2_Logo.jpg',
    },
    {
        movie_title: 'Halloween Town',
        genre: 'Holiday',
        cover_img: 'https://m.media-amazon.com/images/M/MV5BOTAyYjQ3NjctNGMzNi00YThkLThmYzUtZDViYWZkMDA2YTMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjAwMjc0NjQ@._V1_.jpg',
    },
    {
        movie_title: 'Elf',
        genre: 'Holiday',
        cover_img: 'https://i.ebayimg.com/images/g/5hMAAOSw5CtimQEK/s-l1600.jpg'

    },
    {
        movie_title: 'The Grinch Animation', 
        genre: 'Holiday', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BODE3NTQzMWEtYTVkZS00YjNlLTg0ZGQtMDdmYzYyMmVlNWQ2XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg',
    },
    {
        movie_title: 'A Christmas Story', 
        genre: 'Holiday', 
        cover_img: 'https://i.ebayimg.com/images/g/VEIAAOSwr0RghuRO/s-l500.jpg',
    },
    {
        movie_title: 'Eight Crazy Nights', 
        genre: 'Holiday', 
        cover_img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51FqmA7nfJL._AC_UF894,1000_QL80_.jpg',
    },
    {
        movie_title: 'Donnie Darko', 
        genre: 'Horror', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
        movie_title: 'Childs Play',
        genre: 'Horror', 
        cover_img: 'https://i.ebayimg.com/images/g/BrUAAOSwj0deKpTa/s-l1200.webp',
    },
    {
        movie_title: 'IT #1', 
        genre: 'Horror', 
        cover_img: 'https://i.ebayimg.com/images/g/kP0AAOSwUJlZ402H/s-l1600.jpg',
    },
    {
        movie_title: 'IT #2', 
        genre: 'Horror', 
        cover_img: 'https://i.ebayimg.com/images/g/kP0AAOSwUJlZ402H/s-l1600.jpg',
    },
    {
        movie_title: 'Saw #2', 
        genre: 'Horror', 
        cover_img: 'https://www.originalfilmart.com/cdn/shop/files/saw_ii_2005_style_A_original_film_art.webp?v=1694204477',
    },
    {
        movie_title: 'Scream #1', 
        genre: 'Horror', 
        cover_img: 'https://i5.walmartimages.com/seo/Scream-1996-11x17-Movie-Poster_ec9d460a-6906-4246-9b5b-fe64adbe1a3a.5be250c0f95fdd821ed144982710d3a2.jpeg',
    },
    { 
        movie_title: 'Fight Club', 
        genre: 'Nolan-esque', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
        movie_title: 'Interstellar', 
        genre: 'Nolan-esque', 
        cover_img: 'https://www.originalfilmart.com/cdn/shop/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010',
    },
    {
        movie_title: 'Limitless', 
        genre: 'Nolan-esque', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    },
    {
        movie_title: 'The Prestige', 
        genre: 'Nolan-esque', 
        cover_img: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg',
    },
    {
        movie_title: 'Shawshank Redemption', 
        genre: 'Nolan-esque', 
        cover_img: 'https://i.ebayimg.com/images/g/G0AAAOSwdnZaEzkx/s-l1600.jpg',
    },
    {
        movie_title: 'The Fifth Element', 
        genre: 'Sci-Fi/Fantasy',
        cover_img: 'https://cdn.posteritati.com/posters/000/000/068/790/the-fifth-element-md-web.jpg',
    },
    {
        movie_title: 'Star Trek #1', 
        genre: 'Sci-Fi/Fantasy', 
        cover_img: 'https://cdn.discordapp.com/attachments/563519179605540886/1190515940820000788/startrekupdated.png?ex=65a2155f&is=658fa05f&hm=4ed27be5815e83867f18f870f61e2412c24f54c95c05aac14ac8e7cc4e0e9f2a&',
    },
    {
        movie_title: 'The Matrix #1', 
        genre: 'Sci-Fi/Fantasy', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
        movie_title: '2001: A Space Odyssey', 
        genre: 'Sci-Fi/Fantasy', 
        cover_img: 'https://i.ebayimg.com/images/g/Z~UAAOSwdGhgmnWv/s-l1600.jpg',
    },
    {
        movie_title: 'Space Jam', 
        genre: 'Sci-Fi/Fantasy', 
        cover_img: 'https://in.originalfilmart.com/cdn/shop/products/space_jam_1996_advance_original_film_art.webp?v=1678741470',
    },
    {
        movie_title: 'Avengers #1', 
        genre: 'Superhero', 
        cover_img: 'https://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original-1-Sheet-27x41_f7a83b7a-9d50-4743-b630-3fbd34b35e5a.jpg?v=1671051716',
    },
    {
        movie_title: 'Deadpool #1', 
        genre: 'Superhero', 
        cover_img: 'https://i.ebayimg.com/images/g/r3gAAOSwJcdjyG3U/s-l1200.webp',
    },
    {
        movie_title: 'Iron Man #1', 
        genre: 'Superhero', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg',
    },
    {
        movie_title: 'Logan', 
        genre: 'Superhero', 
        cover_img: 'https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg',
    },
    {
        movie_title: 'Spider-Man #1', 
        genre: 'Superhero', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
    },
    {
        movie_title: 'The Butterfly Effect', 
        genre: 'Thriller', 
        cover_img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71M4f6dSSgL.jpg',
    },
    {
        movie_title: 'Blade Runner', 
        genre: 'Thriller', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
    {
        movie_title: 'The Burbs', 
        genre: 'Thriller', 
        cover_img: 'https://m.media-amazon.com/images/M/MV5BNWE1OGExYzQtYzRjOS00MmJhLWE3OTYtZjkzOTNlMjJlZTQ4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg',
    },
    {
        movie_title: 'Constantine', 
        genre: 'Thriller', 
        cover_img: 'https://i.ebayimg.com/images/g/-DsAAOSwaDRfleRz/s-l1200.jpg',
    },
    {
        movie_title: 'The Number 23', 
        genre: 'Thriller', 
        cover_img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51xTEI-g-kL._AC_UF894,1000_QL80_.jpg',
    }
]

const Movie = require('../../Models/MovieModel')(sequelize, Sequelize.DataTypes);
const RequstedMovie = require('../../Models/RequstedMovieModel')(sequelize, Sequelize.DataTypes);
const SpecialsList = require('../../Models/SpecialsModel')(sequelize, Sequelize.DataTypes);

sequelize
.sync({ force: true })
.then( async() => 
await seed(),
console.log('Tables Created'))
.catch((err) => console.log('error Creating Tables',err));

async function seed() {
    await Movie.bulkCreate(seedMoviesData);
    console.log('DB seeded!');
}