type PersonListProps = {
    details: {
        name: string,
        age: number
    }[];

}
const PersonList = (props: PersonListProps) => {

    return (
        <div>
            {
                props.details.map((person) => {
                    return (
                        <h1>{person.name}</h1>
                    )
                })
            }

        </div>
    )
}
export default PersonList;