
var Actors=[];
var Genres=[];


const Solution = (data) => {

    data.forEach( (item) => {
        
        createObj( Actors ,item , item.cast);
        createObj( Genres , item , item.genres );
    })

}
const createObj=( objList ,  item , property)=>{
    property.forEach( ( element ) => {
        // console.log(actor);
        let index=objList.findIndex( obj => obj.Name == element)
        // console.log(index);
        if(index==-1){
            objList.push({
                Name: element,
                Movies: [ item.title ]
            })
        }
        else{
            objList[index].Movies.push( item.title )
        }

    })

}
console.log("fetching json object")
let url=" https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
fetch(url)
.then(res => res.json())
.then((data) => {
   console.log("finding solution")
   Solution(data);
   console.log('Checkout this Object ');
   res={
       Actors:Actors,
       Genres:Genres

   }
   console.log(res)
})
.catch(err => { throw err });