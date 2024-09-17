const app = document.getElementById('app');

function Header(props) {
    return (<h1>{props.title}</h1>
    )
}

function HomePage() {
    const names = ["John Doe", "Mark Mcnugget", "Josh Syrup"];

    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return(<div>
        <Header title="React" />
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
    </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render (<HomePage />);

