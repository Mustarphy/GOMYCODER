function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    );45
}
export default Student