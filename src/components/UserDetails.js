const UserDetails = ({ key,name, age, job }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>idade: {age}</p>
            <p>Trabalho: {job}</p>            
            {age >= 18 ? (
                <p>Pode tirar a habilitação</p>
            ) : (
                <p> Não pode tirar a habilitação</p>
            )}
        </div>
    )
}

export default UserDetails