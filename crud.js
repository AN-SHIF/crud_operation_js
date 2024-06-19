 //Get request
 fetch('https://jsonplaceholder.typicode.com/posts').
 then((response) => response.json()).then((data) => console.log(data));

//Post request - add data
fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'Post',
 body: JSON.stringify({
     title: 'newly created',
     body: 'new',
     userId: 1,
 }),
 headers: {
     'content-type': 'application/json'
 }
}).then((response) => response.json()).then((data) => console.log(data));

///put - request / edit data
fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'Put',
 body: JSON.stringify({
     id: 1,
     title: 'updated',
     body: 'updated',
     userId: 1
 }),
 headers: {
     'content-type': 'application/json'
 }
}).then((response) => response.json()).then((data) => console.log(data));


//Delete-request - delete data
fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'Delete',
}).then((response) => response.json()).then((data) => console.log('deleted', data)); 