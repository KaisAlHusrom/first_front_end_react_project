export default function SrcPerson(){
    let person;
    fetch("http://localhost:8080/person/show"
    ).then(res => res.json).then(result => person = result)
    console.log(person)
    return person
}