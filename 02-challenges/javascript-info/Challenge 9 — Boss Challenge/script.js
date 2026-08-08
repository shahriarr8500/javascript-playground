let Name = prompt("Whats your name?");
let Age = prompt("Whats your Age?");
let school = prompt("Whats your school?");
let FavoriteSubject = prompt("Whats your Favorite subject?");
let FavoritePL = prompt("Whats your Favorite coding lang?");
let isStudent= confirm("Are u a student?")
let studentStatus = isStudent && "Yes" || "No";


alert(`========================
    STUDENT PROFILE
========================

Name: ${Name}
Age: ${Age}
School: ${school}
Favorite Subject: ${FavoriteSubject}
Favorite Language: ${FavoritePL}
Student: ${studentStatus}`);
