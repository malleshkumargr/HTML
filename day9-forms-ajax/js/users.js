//es6 - feature - fetch
const usersHandle = document.querySelector('#users');
const postsHandle = document.getElementById('posts');
// https://unpkg.com/axios/dist/axios.js

function optionGenerator(parent,id,text) {
    const optionTag = document.createElement('option');
    optionTag.setAttribute('value',id);
    optionTag.innerHTML = text;
    console.log(optionTag);
    parent.appendChild(optionTag);
}

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){     
        // return response.json();
        console.log("inside users axios");
        const users = response.data;
        console.log(users);
        users.forEach(function(user){
            optionGenerator(usersHandle,user.id,user.name);      
        });
    })
    .catch(function(err){
        console.log(err);
    })

usersHandle.addEventListener('change', function(){
    const id = usersHandle.value;
    postsHandle.innerHTML = '<option value="">select</option>'
    if(id) {
        console.log("inside posts axios");
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(function(response){
            const posts = response.data;
            posts.forEach(function(post){
                optionGenerator(postsHandle,post.id,post.title);
            })
        })
        .catch(function(err){
            console.log(err)
        })
    }

})