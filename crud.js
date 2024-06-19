let array = []

function createItem(item){
    array.push(item)
    console.log('created an item',array)
}

console.log(createItem('item1'))
console.log(createItem('item2'))

function read(){
    console.log(array)
}

console.log(read())

function update(index, newItem){
    if(index>=0 && index<array.length){
        array[index] = newItem
        console.log(array)
    }
}   

console.log(update(0, "updated"))

function deleteItem(index){
    if(index>=0 && index<array.length){
        const deleted = array.splice(index, 1)
        console.log('deleted',deleted)
        console.log('remaining',array)
    }
}

console.log(deleteItem(1))



